const fs = require('fs');
const path = require('path');

fs.writeFile(path.join(__dirname, 'posts', 'blogPost.txt'), 'Hello! I am Manuel Joshy', (err) => {
  if (err) {
    throw err;
  }
  console.log('file created');
});
