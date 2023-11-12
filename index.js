const puppeteer = require ("puppeteer");


(async() =>{
    const browser = await puppeteer.launch({headless: false});
    
    const page = await browser.newPage()
    await page.goto("https://www.linkedin.com/in/bader-klila-b60396225/")
    await page.setViewport({ width: 1366, height: 768 });
    const title = await page.title()
    const url = await page.url()
    console.log(title,url)


})();