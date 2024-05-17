## Write to a file
Using the fs library again, try to write to the contents of a file.
You can use the fs library to as a black box, the goal is to understand async tasks.



const fs = require("fs");

// Function to write to a file asynchronously
function writeToFile(filename, data) {
    fs.writeFile(filename, data, (err) => {
        if (err) {
            console.error("Error writing to file:", err);
        } else {
            console.log("Data has been written to file successfully.");
        }
    });
}

// Example usage
const filename = "example.txt";
const data =
    "This is some data that we are writing to the file asynchronously.";

writeToFile(filename, data);