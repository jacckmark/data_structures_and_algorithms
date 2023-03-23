function bubbleSort(array) {
  // we do loop for only n-1 elements because we are comparing 2 elements so no
  // need to do additional loop here (also we are decrementing the i because we
  // know that after each loop one more element gets sorted, so no need to go and
  // compare last already sorted elements)
  for (let i = array.length - 1; i > 0; i--) {
    // additional loop which goes over every element to find the biggest one and
    // after that the second biggest and so on, until we reach the end of our list
    // (there will be no more elements to compare to and order)
    for (let j = 0; j < i; j++) {
      // we compare two elements (that live next to each other) to check if one
      // of them is bigger then the other
      if (array[j] > array[j + 1]) {
        // we swap elements in an array when first element is bigger then the
        // second one (this way the biggest element will be moved to the end)
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }
  return array;
}

const unsortedArr = [1, 4, 55, 890, 2, 3, 9, 0];
console.log("*BUBBLE SORT");
console.log("array before bubble sort");
console.log(unsortedArr);
console.log("array after bubble sort");
console.log(bubbleSort(unsortedArr));
