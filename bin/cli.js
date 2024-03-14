#!/usr/bin/env node
const deepljs = require("../index");

const args = process.argv;
const sourceLang = args[2];
const targetLang = args[3];
const text = args.slice(4).join(" ");

if (!sourceLang || !targetLang || !text) {
  console.error("Usage: deepljs <sourceLang> <targetLang> <text>");
} else {
  (async () => {
    console.log(await deepljs(sourceLang, targetLang, text));
  })();
}
