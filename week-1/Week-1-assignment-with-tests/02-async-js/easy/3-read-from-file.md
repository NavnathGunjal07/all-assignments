## Reading the contents of a file

Write code to read contents of a file and print it to the console. 
You can use the fs library to as a black box, the goal is to understand async tasks. 
Try to do an expensive operation below the file read and see how it affects the output. 
Make the expensive operation more and more expensive and see how it affects the output. 


const fs = require('fs');

fs.readFile('example.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading file:', err);
    return;
  }

  console.log('File contents:');
  console.log(data);

  console.log('Starting expensive operation...');
  performExpensiveOperation();
});


function performExpensiveOperation() {
 
  let result = 0;
  for (let i = 0; i < 100000000; i++) {
    result += Math.random();
  }
  console.log('Expensive operation completed.');
}
