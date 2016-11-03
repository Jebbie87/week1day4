function findWaldo(arr, found) {
    arr.forEach(function(item, index){
      if (item === "Bob"){
        found(index);
      }
    })
}

function actionWhenFound(index) {
  console.log("Found him at index " + index +"!");
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);