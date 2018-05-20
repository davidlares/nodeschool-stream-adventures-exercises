var through = require('through2');
var split = require('split');
var counter = 0
// otra forma de hacerlo, bajo pipes directamente
process.stdin
	.pipe(split()) // separate
	.pipe(through(function(buffer, encoding, next){
		// validating lines	
		if(counter % 2 == 0){
			this.push(buffer.toString().toLowerCase() + '\n'); 
		} else {
			this.push(buffer.toString().toUpperCase() + '\n');
		}
		counter +=1;
		next(); // allow next to come
	
	}, function(done){
		done(); // finish stream
	}))
	.pipe(process.stdout)