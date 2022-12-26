const axios = require("axios")
const cheerio = require("cheerio")
const {spawn} = require("child_process")
const url2 = 'https://www.amazon.co.uk/dp/B08X3Q347D'
const url = 'https://www.fifa.com/fifaplus/en/tournaments/mens/worldcup/qatar2022/scores-fixtures'

// axios(url, {headers : {'User-Agent' : "Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:15.0) Gecko/20100101 Firefox/15.0.1"}}
// ).then(res => {
//     const html = res.data
//     const $ = cheerio.load(html)
    
// })

const process = spawn('python', ['hi.py']);
  
process.stdout.on('data', function (data) {
    console.log(data.toString());
});
 
process.stderr.on('data', function (data) {
    console.error(data.toString());
});

