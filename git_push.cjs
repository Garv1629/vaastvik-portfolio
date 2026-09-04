const { execSync } = require('child_process');

try {
  console.log('Committing changes...');
  const commitOutput = execSync('git commit -m "feat: update partner galleries with real project photography suite"', { encoding: 'utf-8' });
  console.log(commitOutput);

  console.log('Pushing to GitHub...');
  const pushOutput = execSync('git push origin main', { encoding: 'utf-8' });
  console.log(pushOutput);
} catch (err) {
  console.error('Error during git operation:', err.message);
  if (err.stdout) console.log('STDOUT:', err.stdout);
  if (err.stderr) console.log('STDERR:', err.stderr);
}
