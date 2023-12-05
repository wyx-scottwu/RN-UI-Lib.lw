const { exec } = require('child_process')
const path = require('path')

const projectPath = path.resolve(__dirname, '..')

exec(`watchman watch-del ${projectPath} ; watchman watch-project ${projectPath}`, (error, stdout, stderr)=> {
  if (error) {
    console.error(`exec error: ${error}`);
    return;
  }
  console.log(`stdout: ${stdout}`);
  console.error(`stderr: ${stderr}`);
})