var request = require('request');
var r = request.post('http://localhost:8099');
// r object is a writable/readable (stream)
process.stdin.pipe(r).pipe(process.stdout);