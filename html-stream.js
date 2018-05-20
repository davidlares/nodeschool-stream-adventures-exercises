var trumpet = require('trumpet');
var through = require('through2');
var tr = trumpet();
var loud = tr.select('.loud').createStream();

// stdin - trumpet
process.stdin.pipe(tr).pipe(process.stdout)

// del trumpet - al through al mismo stream (duplex)
loud.pipe(through(function(b,_,n){
	this.push(b.toString().toUpperCase());
	n();
},function(done){ done(); })).pipe(loud);