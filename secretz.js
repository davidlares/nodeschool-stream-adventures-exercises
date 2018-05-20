const crypto = require('crypto')
const zlib = require('zlib')
const tar = require('tar')
const concat = require('concat-stream') 

var Parser = tar.Parse
var parser = new Parser()

let cipherName = process.argv[2]
let cipherPassphrase = process.argv[3]

parser.on('entry', function (e) {
    e.resume()
    let hash = crypto.createHash('md5', { encoding: 'hex' })
    e.pipe(hash).pipe(concat((hash)=>{
        console.log(`${hash} ${e.path}`)
    }))
});

// 
process.stdin
.pipe(crypto.createDecipher(cipherName, cipherPassphrase))
.pipe(zlib.createGunzip())
.pipe(parser)