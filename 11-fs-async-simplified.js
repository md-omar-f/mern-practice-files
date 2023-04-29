const { readFile, writeFile } = require('fs').promises;
// const util = require('util');

// const readFilePromise = util.promisify(readFile);
// const writeFilePromise = util.promisify(writeFile)


// const getText = (path) => {
//     return new Promise((resolve,reject) => {
//         readFile(path, 'utf-8', (err, data) => {
//             if(err) {
//                 reject(err);
//             } else {
//                 resolve(data);
//             }
//         })
//     })
// }

const start = async() => {
    try {
        const first = await readFile('./content/first.text', 'utf-8')
        const second = await readFile('./content/second.text', 'utf-8')
        await writeFile('./content/result-mind-grenade.txt', `THIS IS AWESOME: ${first} ${second}`, {flag: 'a'})
        console.log(first, second);
        
    } catch(err) {
        console.log(err);
    }
}

// getText('./content/first.text')
//     .then((result) => console.log(result))
//     .catch((err) => console.log(err))

// const start = async() => {
//     const first = await getText('./content/first.text')
//     console.log(first);
// }
start()