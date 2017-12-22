const exec = require('child_process').exec;
const CLIEngine = require('eslint').CLIEngine;

const cli = new CLIEngine({
  fix: true,
});
function getErrorLevel(number) {
  switch (number) {
    case 2:
      return 'error';
    case 1:
      return 'warn';
    default:
  }
  return 'undefined';
}
let pass = 0;
exec('git diff --cached --name-only| grep .js$', (error, stdout) => {
  if (stdout.length) {
    const array = stdout.split('\n');
    array.pop();
    const report = cli.executeOnFiles(array);
    const results = report.results;
    const errorCount = report.errorCount;
    const warningCount = report.warningCount;
    results.forEach((result) => {
      if (result.messages.length > 0) {
        console.log('\n');
        console.log(result.filePath);
        result.messages.forEach((obj) => {
          const level = getErrorLevel(obj.severity);
          console.log(`   ${obj.line}:${obj.column}  ${level}  ${obj.message}  ${obj.ruleId}`);
          pass = 1;
        });
      }
    });
    console.log(`\n   ${errorCount + warningCount} problems (${errorCount} ${'errors'} ${warningCount} warnings)`);
    CLIEngine.outputFixes(report);
    process.exit(pass);
  }
  if (error !== null) {
    console.log(`exec error: ${error}`);
  }
});
