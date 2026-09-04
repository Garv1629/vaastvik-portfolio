const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const NEW_REPO_URL = 'https://github.com/Garv1629/vaastvik.git';

function run(cmd) {
  console.log(`\n> ${cmd}`);
  try {
    const output = execSync(cmd, { encoding: 'utf8', stdio: 'inherit' });
    return output;
  } catch (err) {
    console.error(`Error executing "${cmd}":`, err.message);
  }
}

console.log('==================================================');
console.log(' CREATING FRESH GIT REPOSITORY & PUSHING TO GITHUB');
console.log('==================================================');

// 1. Remove old .git folder if it exists
const gitDir = path.join(__dirname, '.git');
if (fs.existsSync(gitDir)) {
  console.log('Removing old .git directory for fresh start...');
  try {
    fs.rmSync(gitDir, { recursive: true, force: true });
  } catch (e) {
    console.log('Could not remove .git folder via Node, continuing with git re-init...');
  }
}

// 2. Remove temporary build scripts
const tempFiles = ['commit_msg.txt', 'deploy.bat', 'deploy.js', 'git_push.cjs', 'run_git.js', 'run_push.cjs', 'push.ps1', 'set_new_repo.bat', 'clean_temp.cjs'];
tempFiles.forEach(file => {
  const fp = path.join(__dirname, file);
  if (fs.existsSync(fp)) {
    try { fs.unlinkSync(fp); } catch(e){}
  }
});

// 3. Initialize fresh git repo
run('git init');
run(`git remote add origin ${NEW_REPO_URL}`);
run('git branch -M main');

// 4. Stage and commit fresh initial state
run('git add -A');
run('git commit -m "Initial commit of Vaastvik Portfolio"');

// 5. Push fresh commit to new repo
console.log(`\nPushing fresh initial commit to ${NEW_REPO_URL}...`);
run('git push -u origin main --force');

// 6. Build and deploy to gh-pages
console.log('\nBuilding production dist bundle...');
run('npm run build');

console.log('\nDeploying to GitHub Pages...');
run('npx gh-pages -d dist');

console.log('\n==================================================');
console.log(' ALL DONE! YOUR FRESH REPOSITORY IS LIVE ON GITHUB!');
console.log('==================================================');
