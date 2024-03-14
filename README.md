# Unofficial api for DeepL — free-deepl

This is a simple Node.js module that allows you to interact with the DeepL API for translation services.

Installation
You can install the free-deepl package using npm:

`npm install free-deepl`

```
const deepljs = require("free-deepl");

(async () => {

let sourceLang = "en";
let targetLang = "ru";
let text = "Hello";

console.log(await deepljs(sourceLang, targetLang, text));

})();
```

Command Line Interface (CLI)
You can also use free-deepl via the command line interface:

`deepljs <sourceLang> <targetLang> <text>`
