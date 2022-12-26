const express = require('express')
const app = express()
const cors = require('cors')
app.use(cors())
app.use(express.json())
const axios = require("axios")
const cheerio = require("cheerio")

const puppeteer = require('puppeteer')

async function run(keyword){
    const browser = await puppeteer.launch()
    const page = await browser.newPage()
    await page.goto(`https://search.naver.com/search.naver?where=news&query=${keyword}`)
    const html = await page.content()

    let news_list = []
    for(let i = 0 ; i < 20; i++){
        const title = await page.evaluate(()=>{
            let re
            try{
                re = document.querySelector(`#sp_nws${i} > div > div > a`).title
            }catch(err){
                re = undefined
            }
        })
        const details = await page.evaluate(()=>{
            let re
            try{
                re = document.querySelector(`#sp_nws${i} > div > div > div.news_dsc > div > a`).text
            }catch(err){
                re = undefined
            }
        })
        const link = await page.evaluate(()=>{
            let re
            try{
                re = document.querySelector(`#sp_nws${i} > div > div > a`).href
            }catch(err){
                re = undefined
            }
        })
        const img = await page.evaluate(()=>{
            let re
            try{
                re = document.querySelector(`#sp_nws${i} > div > a > img`).src
            }catch(err){
                re = undefined
            }
        })
        
        if(title !== undefined){
            news_list.push({"title" : title, "details" : details, "link" : link, "img" : img})
            console.log(title,details,link,img)
        
        }
    }

    await browser.close()
    return news_list
}




app.get('/api', (req,res) =>{
    res.json({"users": ['one']})
})

app.post('/api/search', async (req, res)=>{
    var news_json = await run('카타르')
    // res.json({status:'success'})
    //res.json -> json 형태로 send
    res.json(news_json)
})

app.listen(5000, ()=>{
    console.log("Server started on port 5000")
})
