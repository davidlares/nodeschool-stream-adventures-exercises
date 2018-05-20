var http = require('http');
var fs = require('fs');
var through = require('through2');

var server = http.createServer(function(req,res){
	if(req.method == "POST"){
		
		req.pipe(through(function(buffer,encoding,next){
			this.push(buffer.toString().toUpperCase());
			next()
		},function(done){
			done()
		})).pipe(res);
	}
});

server.listen(process.argv[2]);