# Unofficial api for DeepL — DeepL.JS

This is a simple Node.js module that allows you to interact with the DeepL API for translation services.

Installation
You can install the DeepL.JS package using npm:

`npm install deepljs`

```
const deepljs = require("deepljs");

(async () => {

let sourceLang = "en";
let targetLang = "ru";
let text = "Hello";

console.log(await deepljs(sourceLang, targetLang, text));

})();
```

Command Line Interface (CLI)
You can also use DeepL.JS via the command line interface:

`deepljs <sourceLang> <targetLang> <text>`
