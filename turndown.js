#!/usr/bin/env node

// Requires: npm install -g turndown

var TurndownService = require('turndown')

let input = '';

process.stdin.on('data', (chunk) => {
  input += chunk;
});

process.stdin.on('end', () => {
    var turndownService = new TurndownService({ headingStyle: 'atx' })
    var markdown = turndownService.turndown(input)
    console.log(markdown)
});
