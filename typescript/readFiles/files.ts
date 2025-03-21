import * as fs from 'node:fs' 

fs.readFile('example.txt', 'foo', (err, data) => {
    if(err) throw err
    console.log(data)
})
