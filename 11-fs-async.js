const {readFile, writeFile, read} = require('fs');

console.log('starting position');
readFile('./content/first.text', 'utf-8', (err, val)=>{
    if(err){
        console.log(err);
        return;
    }
    const first = val;
    readFile('./content/second.text', 'utf-8', (err, val)=>{
        if(err){
            console.log(err);
            return;
        }
        const second = val;
        writeFile(
            './content/result-async.text',
            `The text is: ${first} ${second}.`,
            (err, val)=>{
                if(err){
                    console.log(err);
                    return;
                }
                //console.log(val);
                console.log('nested instructon');
        })
    })
})
console.log('next segment of code starts here');