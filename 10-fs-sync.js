const {readFileSync, writeFileSync} = require('fs');

const first = readFileSync('./content/first.text', 'utf-8');
const second = readFileSync('./content/second.text', 'utf-8');

writeFileSync(
    './content/result-sync.txt',
    `The text is: ${first} ${second}.`
)