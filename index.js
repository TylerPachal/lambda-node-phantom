var childProcess = require('child_process');
var path = require('path');

exports.handler = function(event, context) {
	
	// Set the path as described here: https://aws.amazon.com/blogs/compute/running-executables-in-aws-lambda/
	process.env['PATH'] = process.env['PATH'] + ':' + process.env['LAMBDA_TASK_ROOT'];
	
	// Set the path to the phantomjs binary
	var phantomPath = path.join(__dirname, 'phantomjs_linux-x86_64');

	// Arguments for the phantom script
	var processArgs = [
		path.join(__dirname, 'phantom-script.js'),
		'my arg'
	];
	
	// Launc the child process
	childProcess.execFile(phantomPath, processArgs, function(error, stdout, stderr) {
		if (error) {
			context.fail(error);
			return;
		}
		if (stderr) {
			context.fail(error);
			return;
		}
		context.succeed(stdout);
	});
}