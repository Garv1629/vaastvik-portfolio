const fs = require('fs');
const path = require('path');

const tempFiles = [
  'commit_msg.txt',
  'deploy.bat',
  'deploy.js',
  'git_push.cjs',
  'run_git.js',
  'run_push.cjs',
  'push.ps1',
  'set_new_repo.bat'
];

tempFiles.forEach(file => {
  const filePath = path.join(__dirname, file);
  if (fs.existsSync(filePath)) {
    try {
      fs.unlinkSync(filePath);
      console.log(`Cleaned up ${file}`);
    } catch (e) {
      console.error(`Could not delete ${file}:`, e.message);
    }
  }
});
