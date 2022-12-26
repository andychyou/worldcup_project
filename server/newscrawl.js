const axios = require("axios")
const cheerio = require("cheerio")

const getHTML = async(keyword) =>{
    try{
        return await axios.get('https://search.naver.com/search.naver?where=news&query='+ encodeURI(keyword))
    }catch(err){
        console.log(err)
    }
}


const parsing = async (keyword) =>{
    const html = await getHTML(keyword)
    const $ = cheerio.load(html.data)
    const newslist = $("ul.list_news").find('.news_wrap')
    // newslist.each((idx, node) =>{
    //     let title = $(node).find('a').attr('class')
    //     console.log(title)
    //     console.log('\n')
    // })
  

    let news_data = []
    for(let cnt = 0; cnt < 20; cnt++){
        const news_title = $(`#sp_nws${cnt} > div > div > a`).attr('title')
        const news_details = $(`#sp_nws${cnt} > div > div > div.news_dsc > div > a`).text()
        const news_href = $(`#sp_nws${cnt} > div > div > div.news_dsc > div > a`).attr('href')
        if(news_title !== undefined){
            news_data.push(JSON.stringify({news_title, news_details, news_href}))
            console.log(news_title, news_details, news_href)
        }
       
    }
    console.log(news_data)
}

parsing("카타르")