var system = require('system');
var args = system.args;

// Example of how to get arguments passed from node script
// args[0] would be this file's name: phantom-script.js
var unusedArg = args[1];

// Send some info node's childProcess' stdout
system.stdout.write('hello from phantom!')

phantom.exit();