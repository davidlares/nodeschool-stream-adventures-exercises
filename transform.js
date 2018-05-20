// transforming data 
// input date -> applies operation -> output data
var through = require('through2');
var stream = through(function(buffer,encoding,next){
	// write function -> for every buffer
	// produce the output
	this.push(buffer.toString().toUpperCase());
	// ready to receive more chunk of data 
	next(); 

}, function(done){
	// end function -> no more data to transform
	done();
});

// ! write => input to output (sin modificaciones)
// ! end -> llama a this.push(null) para cerrar el output

process.stdin.pipe(stream) 
	.pipe(process.stdout)

// concatenamos el input al filter (con pipe)
// y luego ese stream va hacia el output