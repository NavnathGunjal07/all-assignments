/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 */

function busyWait(milliseconds) {
    const start = Date.now();
    while (Date.now() - start < milliseconds) {
      
    }
}

console.log('Start');
busyWait(3000)
console.log('End');