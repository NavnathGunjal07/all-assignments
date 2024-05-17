## File cleaner
Read a file, remove all the extra spaces and write it back to the same file.

For example, if the file input was
```
hello     world    my    name   is       raman
```

After the program runs, the output should be

```
hello world my name is raman
```


const fs = require('fs');

fs.readFile('example.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading file:', err);
    return;
  }

  console.log('File contents:');
  console.log(data);

    const trimmedStr = data.replace(/\s+/g, ' ');
    fs.writeFile('example.txt', trimmedStr, (err) => {
            if (err) {
                console.error("Error writing to file:", err);
            } else {
                console.log("Data has been written to file successfully.");
            }
        });
    });