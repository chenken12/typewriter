//typewriter.js

const sentence = "hello there from lighthouse labs";
let delay = 0;
//process.stdout.write
for (const char of sentence) {
  
  setTimeout(() => {
    // print the char here
    process.stdout.write(char);
  }, delay) // <= 1s delay to make it noticeable. Can dial it down later.
  delay += 50;
}

setTimeout(() => {
  process.stdout.write('\n');
}, delay+100) 
