// https://shapeshed.com/writing-cross-platform-node/#scripts-in-package-json
// https://dzone.com/articles/execute-unix-command-nodejs

var os = require('os');
// var sys = require('sys')
var exec = require('child_process').exec;
// function puts(error, stdout, stderr) { sys.puts(stdout) }
// exec("ls -la", puts);

if(os.platform() == 'darwin') {
    exec("terminal-notifier -message 'All done! 🐱'");
};
