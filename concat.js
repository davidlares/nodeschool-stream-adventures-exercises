var concat = require('concat-stream');

process.stdin.pipe(concat(function(body){
	process.stdout.write(body.toString().split('').reverse().join('') + '\n');
}));

// process.stdin.pipe(concat ( ct ) ).pipe(process.stdout)
// doesn't work as I expect because the data processing 
// is happening in the callback to concat which is asynchronous

// In order to send the data forward from the concat callback I need to write() 
// the results to the next stream from within the callback itself
//  process.stdout.write(result);