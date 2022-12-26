const express = require('express')
const app = express()
const cors = require('cors')
app.use(cors())
app.use(express.json())
const axios = require("axios")
const cheerio = require("cheerio")
// const mongoose = require("mongoose")

// mongoose.connect("mongodb+srv://andychyou:asdf1234@cluster0.fvmdzjv.mongodb.net/?retryWrites=true&w=majority",{
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
// }).then(()=>{console.log("MongoDB connected")},
// err=>console.log(err))
var MongoClient = require('mongodb').MongoClient;
var db_url = "mongodb+srv://andychyou:asdf1234@cluster0.fvmdzjv.mongodb.net/?retryWrites=true&w=majority";

//find all
// MongoClient.connect(url, function(err, db) {
//   if (err) throw err;
//   var dbo = db.db("db");
//   dbo.collection("matches").find({}).toArray(function(err, result) {
//     if (err) throw err;
//     console.log(result);
//     db.close();
//   });
// });

//find specific
// MongoClient.connect(db_url, function(err, db) {
//     if (err) throw err;
//     var dbo = db.db("db");
//     dbo.collection("matches").find({away_team_en : 'France'}).toArray(function(err, result) {
//       if (err) throw err;
//       console.log(result);
//       db.close();
//     });
//   });




const getHTML = async(keyword) =>{
    try{
        return await axios.get('https://search.naver.com/search.naver?where=news&query='+ encodeURI(keyword))
    }catch(err){
        console.log(err)
    }
}


const naver_news = async (keyword) =>{
    const html = await getHTML(keyword)
    const $ = cheerio.load(html.data)

    let news_data = []
    for(let cnt = 0; cnt < 20; cnt++){
        const news_title = $(`#sp_nws${cnt} > div > div > a`).attr('title')
        const news_details = $(`#sp_nws${cnt} > div > div > div.news_dsc > div > a`).text()
        const news_href = $(`#sp_nws${cnt} > div > div > div.news_dsc > div > a`).attr('href')
        const news_img = $(`#sp_nws${cnt} > div > a > img`).attr('data-lazysrc')
        if(news_title !== undefined){
            // news_data.push(JSON.stringify({news_title, news_details, news_href}))
            news_data.push({"news_title" : news_title, "news_details" : news_details, "news_href" : news_href, "news_img" : news_img})    
        } 
    }
    var news_json = {"news_data": news_data}
    return news_json
}

const firstCharUpper = (keyword) =>{
    let firstLetter = keyword.substr(0, 1)
    return firstLetter.toUpperCase() + keyword.substr(1)
}

const dateParser = (date) =>{
    if(date !== ""){
        date = date.split('-')
        date[2].length === 1 ?  0 :  date[2] = date[2][1]
        date = date[1]+'/'+date[2]+'/'+date[0]
    }
    
    return date
}


const find_match = async (client_request) =>{
    let {Country, Scorer, Round, MatchDate} = client_request
    Country = firstCharUpper(Country)
    Scorer = firstCharUpper(Scorer)  
    MatchDate = dateParser(MatchDate)

    const db = await MongoClient.connect(db_url).catch(err=>console.log(err));
    var dbo = db.db("db");
    let search_this = []
    Country !== "" ? search_this.push({ $or : [{home_team_en : new RegExp(Country)}, {away_team_en : new RegExp(Country)}]}) : 0
    Scorer !== "" ? search_this.push({ $or : [{home_scorers : new RegExp(Scorer)}, {away_scorers: new RegExp(Scorer)}]}) : 0
    Round !== "" ? search_this.push({group : Round}) : 0
    MatchDate !== "" ? search_this.push({local_date : new RegExp(MatchDate)}) : 0
    // MatchDate !== "" ? search_this.push({local_date : new RegExp(Round)}) : 0
    const result = await dbo.collection('matches').find({$and: search_this}).toArray();
    
    
    db.close()
    return result
}





app.post('/api/matchsearch', async (req, res)=>{
    console.log('Got Client Request:', req.body)
    match_json = await find_match(req.body)
    // res.json({status:'success'})
    //res.json -> json 형태로 send
    console.log(match_json)
    res.json(match_json)
})


app.post('/api/newssearch', async (req, res)=>{
    var news_json = await naver_news(req.body.keyword)
    // res.json({status:'success'})
    //res.json -> json 형태로 send
    console.log(news_json)
    res.json(news_json)
})

app.listen(5000, ()=>{
    console.log("Server started on port 5000")
})
