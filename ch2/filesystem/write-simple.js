'use strict';
const fs = require('fs');
fs.writeFile('target.txt', 'Hello funy folks. ÄÖÜ 🏃', (err) => {
if (err) {
throw err;
}
console.log('File saved!');
});