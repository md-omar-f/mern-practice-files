const {readFile} = require('fs');

console.log('first app starts here');

readFile('./content/first.text', 'utf-8', (err, result) =>{
    if(err){
        console.log(err);
        return;
    }
    console.log(result);
    console.log('first app ends here');
})
console.log('next app starting here');