// x = 10;
// console.log(x);
// var x;

// ---> var ,let and const are getting hoisting but in differnce way

let language = "java";
let LANGUAGE = "javascript";
// let language;
// language = javascript;
function getLanguage() {
  if (!language) {
    console.log("helo");
    let language = LANGUAGE;
  }
  return language;
}

console.log(`i love ${getLanguage()}`);
