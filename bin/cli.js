#!/usr/bin/env node

const args = process.argv.slice(2);

const portIndex = args.indexOf("--port");
if (portIndex === -1 || !args[portIndex + 1]) {
  console.error("Usage: deepljs --port <port_number>");
  process.exit(1);
}

const port = args[portIndex + 1];

console.log(`${port}`);
