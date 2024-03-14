const puppeteer = require("puppeteer");

async function deepljs(sourceLang, targetLang, text) {
  const deeplUrl = `https://www.deepl.com/translator?share=generic#${sourceLang}/${targetLang}/${encodeURIComponent(
    text
  )}`;

  const browser = await puppeteer.launch({
    // For testing :)
    // headless: false,
    // args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });

  const page = await browser.newPage();

  try {
    await page.goto(deeplUrl);

    let translationTarget = "";

    while (translationTarget === "") {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      translationTarget = await page.$eval(
        'div[aria-labelledby="translation-target-heading"]',
        (element) => element.textContent.trim()
      );
    }

    if (translationTarget === "") {
      console.error("Translation not found");
    } else {
      return translationTarget;
    }
  } catch (error) {
    console.error("An error occurred:", error);
  } finally {
    await browser.close();
  }
}

module.exports = deepljs;
