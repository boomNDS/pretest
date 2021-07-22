const url = 'https://codequiz.azurewebsites.net'
const puppeteer = require('puppeteer')
const cheerio = require('cheerio')
const fundName = process.argv[2]

async function run() {
    const browser = await puppeteer.launch()
    const page = await browser.newPage()
    await page.goto(url)
    await page.click(`input`)
    await page.waitForSelector('table')
    let html = await page.content()
    let data = cheerio.load(html);
    let temp = data('table', html)
    temp = temp.html()
    temp = temp.toString()
    temp = temp.split(/(<.?td>)/)
    console.log(temp)
    // temp.splice(/(<.?td>)/)
    // console.log(data.html())
    browser.close()
}
run();