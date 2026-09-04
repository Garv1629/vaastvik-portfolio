const { execSync } = require('child_process');

try {
  console.log('Staging all files...');
  execSync('git add -A', { stdio: 'inherit' });

  console.log('Committing changes...');
  execSync('git commit -m "feat: update partner galleries with real project photography and sanitize svg assets"', { stdio: 'inherit' });

  console.log('Pushing to remote origin main...');
  const output = execSync('git push origin main', { encoding: 'utf-8' });
  console.log(output);

  console.log('Git commit and push completed successfully.');
} catch (e) {
  console.error('Git operation error:', e.message);
  if (e.stdout) console.log('STDOUT:', e.stdout);
  if (e.stderr) console.log('STDERR:', e.stderr);
  process.exit(1);
}
