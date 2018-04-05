'use strict';
const fs = require('fs');
const filename = process.argv[2];
  if (!filename) {
      throw Error('Please specify a filename');
  }
fs.watch(filename, () => console.log(`File ${filename} changed!`));
console.log(`Watching ${filename} for changes...`);
