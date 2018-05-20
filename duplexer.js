var duplexer = require('duplexer2');
var spawn = require('child_process').spawn;

module.exports = function(cmd,args){
	var sp = spawn(cmd,args)
	return duplexer(sp.stdin,sp.stdout);
}