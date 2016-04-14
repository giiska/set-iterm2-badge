// Thanks to [@sel-fish](http://stackoverflow.com/questions/36613285/how-to-exec-script-to-set-iterm2-badge-from-nodejs)

function setBadge(rawBadgeFormat) {
  var base64BadgeFormat = new Buffer(rawBadgeFormat.toString()).toString('base64')
  var setBadgeFormatCmd = 'printf "\\e]1337;SetBadgeFormat=' + base64BadgeFormat + '\\a"'
  require('child_process').exec(setBadgeFormatCmd, function(error, stdout, stderr) {
      if (error) console.log(error);
      process.stdout.write(stdout); // this line actually do the trick
      process.stderr.write(stderr);
  });
}

module.exports = setBadge