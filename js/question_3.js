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
    let temps = data('table', html)
    temps = temps.html()
    temps = temps.toString()
    temps = temps.split(/(<.?td>)/)
    temps.splice(0, 1)
    temps.pop()
    for (let i = 0; i < temps.length; i++) {
        let removeList = ['<td>', '</td>', '', '</tr><tr> ']
        if (removeList.includes(temps[i])) {
            temps.splice(i, 1);
            i--;
        }
    }
    let result
    temps.forEach((currentValue, index) => {
        if (currentValue == fundName) {
            result = temps[index + 1]
        }
    })
    console.log(result)
    browser.close()
}
run();