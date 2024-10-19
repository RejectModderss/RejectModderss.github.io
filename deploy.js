const ghpages = require('gh-pages');

ghpages.publish('.output/public', {
  branch: 'gh-pages',
  repo: 'https://github.com/RejectModderss/RejectModderss.github.io.git'
}, (err) => {
  if (err) {
    console.error('Deployment failed:', err);
  } else {
    console.log('Deployment successful!');
  }
});