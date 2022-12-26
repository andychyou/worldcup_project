const puppeteer = require('puppeteer')

async function run(keyword){
    const browser = await puppeteer.launch()
    const page = await browser.newPage()
    await page.goto(`https://search.naver.com/search.naver?where=news&query=${keyword}`)
    const html = await page.content()
    // const title = await page.$eval('#sp_nws1 > div > div > a', e => e.title)
    // const details = await page.$eval('#sp_nws1 > div > div > div.news_dsc > div > a', e => e.text)
    // const link = await page.$eval('#sp_nws1 > div > div > a', e => e.href)
    // const img = await page.$eval('#sp_nws1 > div > a > img', e => e.src)
    await page.waitForSelector('#sp_nws1 > div > div > a');
    const title = await page.evaluate(()=>{
        let re
        try{
            re = document.querySelector('#sp_nws0 > div > div > a').title
        }catch(err){
            re = undefined
        }
    })
    

    console.log(title)


    await browser.close()
}

run('카타르')