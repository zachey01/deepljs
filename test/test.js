const deepljs = require("../index");

(async () => {
  let sourceLang = "en";
  let targetLang = "ru";
  let text = "Hello";

  if ((await deepljs(sourceLang, targetLang, text)) === "Здравствуйте") {
    console.log("Test passed! :)");
  } else {
    console.log("Test failed! :(");
  }
})();
