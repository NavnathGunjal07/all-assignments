## Counter without setInterval

Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck.



function counter(callback, n) {
  let count = 0;

  function increaseCount() {
    count++;
    callback(count);
    setTimeout(increaseCount, n);
  }

  increaseCount();

  return function stop() {
    clearTimeout(increaseCount);
  };
}

// Usage example
const stopCounter = counter(count => {
  console.log('Count:', count);
}, 1000);





































































(Hint: setTimeout)