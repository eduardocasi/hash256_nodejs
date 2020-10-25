/* Simple sha256 hash code */
var crypto = require('crypto');

var hash = crypto.createHash('sha256');

var code = 'Hello';

code = hash.update(code);
code = hash.digest(code);

console.log(code);
process.stdout.write(code.toString("hex"));
