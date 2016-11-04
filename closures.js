'use strict';

////////   Countdown Generator   ////////

var countdownGenerator = function (x) {
  let counter = x

  return function () {
      if (counter > 0){
        return "T-minus " + counter--
      } else if (counter === 0) {
        counter--
        return "Blast Off!"
      } else {
        return "Rockets already gone, bub!"
      }
      return counter--;
  }
};

var countdown = countdownGenerator(4)
console.log(countdown()); // T-minus 3...
console.log(countdown()); // T-minus 2...
console.log(countdown()); // T-minus 1...
console.log(countdown()); // Blast Off!
console.log(countdown()); // Rockets already gone, bub!
console.log(countdown()); // Rockets already gone, bub!

///////  Loaded Die ///////

var loadedDie = (function () {

  var list = [5, 4, 6, 1, 6, 4, 2, 3, 3, 5];
  let diceCount = -1;
  return function () {

    diceCount += 1;

  return list[diceCount]
  }

})();

console.log(loadedDie());  // 5
console.log(loadedDie());  // 4
console.log(loadedDie());  // 6