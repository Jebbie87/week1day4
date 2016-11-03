function map (array, cb) {
  const wordLength = [];
  array.forEach(function(index){
    wordLength.push(cb(index))
  })

  return wordLength;
}

console.log(map(["ground", "control", "to", "major", "tom"], (elm) => { return elm.length }));
