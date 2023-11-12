const puppeteer = require("puppeteer");

(async () => {
  const browser = await puppeteer.launch({ headless: false });

  const page = await browser.newPage();
  page.setDefaultNavigationTimeout(60000);
  await page.goto("https://zen.com.tn/fr");
  await page.screenshot({ path: "netflix.png" });
  await page.setViewport({ width: 500, height: 500 });
  const title = await page.title();
  const url = await page.url();

  const pgTag = await page.evaluate(() =>{

        const paragraph = document.querySelector('.ticker__item')

        return paragraph ? paragraph.innerHTML : "no elements found";
    })
  
  await page.click(".burger-menu");

  await page.click(".far.fa-user");
  const [link] = await page.$x("//a[contains(text(), 'Créer un compte')]");
  if (link) {
      await link.click();
  }

  const radioButtonHandles = await page.$x("//*[contains(@id, 'title_M')]");

  if (radioButtonHandles.length > 0) {
      const radioButton = radioButtonHandles[0];
      await page.evaluate((el, value) => el.checked = value, radioButton, true);
  }

await page.type('[formcontrolname=firstname]', 'Jean')

await page.type('[formcontrolname=lastname]', 'Axel')
await page.type('[formcontrolname=email]', 'Jeanaxel@gmail.com')
await page.type('[formcontrolname=password]', 'Eminem123')
await page.type('[formcontrolname=birthday]', '31052001')
await page.type('[formcontrolname=phone]', '55228866')

await page.click(".checkButton")

  console.log(title, url);
  console.log(pgTag)
  
})();
