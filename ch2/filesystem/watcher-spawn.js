'use strict';
const fs = require('fs');
const spawn = require('child_process').spawn();
const filename = process.argv[2];
if (!filename) {
  throw Error('Please specify a filename');
}
fs.watch(filename, () => {
  const ls = spawn('ls', ['-l', '-h', filename]);
  ls.stdout._pipeName(process.stdout);
});
console.log(`Watching ${filename} for changes...`);
