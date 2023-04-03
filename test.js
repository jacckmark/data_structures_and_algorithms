// const bubbleSort = array => {
//   for (let i = 0; i < array.length; i++) {
//     for (let j = 0; j < array.length - i - 1; j++) {
//       if (array[j] > array[j + 1]) {
//         const temp = array[j];
//         array[j] = array[j + 1];
//         array[j + 1] = temp;
//       }
//     }
//   }
//   return array;
// };

// const selectionSort = array => {
//   for (let i = 0; i < array.length; i++) {
//     let minIndex = i;

//     for (let j = i + 1; j < array.length; j++) {
//       if (array[j] < array[minIndex]) minIndex = j;
//     }

//     if (i !== minIndex) {
//       const temp = array[i];
//       array[i] = array[minIndex];
//       array[minIndex] = temp;
//     }
//   }
//   return array;
// };

// const insertionSort = array => {
//   for (let i = 0; i < array.length; i++) {
//     const current = array[i];

//     let j = i - 1;

//     while (j > -1 && current < array[j]) {
//       array[j + 1] = array[j];
//       j--;
//     }

//     array[j + 1] = current;
//   }
//   return array;
// };

// const bubbleSort = array => {
//   for (let i = 0; i < array.length - 1; i++) {
//     for (let j = 0; j < array.length; j++) {
//       if (array[j + 1] < array[j]) {
//         const temp = array[j];
//         array[j] = array[j + 1];
//         array[j + 1] = temp;
//       }
//     }
//   }
//   return array;
// };

// const selectionSort = array => {
//   for (let i = 0; i < array.length - 1; i++) {
//     let minIndex = i;

//     for (let j = i + 1; j < array.length; j++) {
//       if (array[minIndex] > array[j]) minIndex = j;
//     }
//     if (i !== minIndex) {
//       const temp = array[i];
//       array[i] = array[minIndex];
//       array[minIndex] = temp;
//     }
//   }
//   return array;
// };

// const insertionSort = array => {
//   for (let i = 1; i < array.length; i++) {
//     const current = array[i];

//     let j = i - 1;

//     while (j > -1 && current < array[j]) {
//       array[j + 1] = array[j];
//       j--;
//     }
//     array[j + 1] = current;
//   }
//   return array;
// };

// const bubbleSort = array => {
//   for (let i = 0; i < array.length; i++) {
//     for (let j = 0; j < array.length - i - 1; j++) {
//       if (array[j + 1] < array[j]) {
//         const temp = array[j];
//         array[j] = array[j + 1];
//         array[j + 1] = temp;
//       }
//     }
//   }
//   return array;
// };

// const selectionSort = array => {
//   for (let i = 0; i < array.length - 1; i++) {
//     let minIndex = i;
//     for (let j = i + 1; j < array.length; j++) {
//       if (array[j] < array[minIndex]) minIndex = j;
//     }

//     if (minIndex !== i) {
//       const temp = array[i];
//       array[i] = array[minIndex];
//       array[minIndex] = temp;
//     }
//   }
//   return array;
// };

// const insertionSort = array => {
//   for (let i = 1; i < array.length; i++) {
//     const current = array[i];
//     let j = i - 1;

//     while (j > -1 && current < array[j]) {
//       array[j + 1] = array[j];
//       j--;
//     }

//     array[j + 1] = current;
//   }
//   return array;
// };

// const bubbleSort = array => {
//   for (let i = 0; i < array.length - 1; i++) {
//     for (let j = 0; j < array.length; j++) {
//       if (array[j + 1] < array[j]) {
//         const temp = array[j];
//         array[j] = array[j + 1];
//         array[j + 1] = temp;
//       }
//     }
//   }
//   return array;
// };

// const selectionSort = array => {
//   for (let i = 0; i < array.length - 1; i++) {
//     let minIndex = i;

//     for (let j = i + 1; j < array.length; j++) {
//       if (array[minIndex] > array[j]) minIndex = j;
//     }

//     if (i !== minIndex) {
//       const temp = array[i];
//       array[i] = array[minIndex];
//       array[minIndex] = temp;
//     }
//   }
//   return array;
// };

// const insertionSort = array => {
//   for (let i = 0; i < array.length; i++) {
//     const current = array[i];

//     let j = i - 1;

//     while (j > -1 && current < array[j]) {
//       array[j + 1] = array[j];
//       j--;
//     }
//     array[j + 1] = current;
//   }
//   return array;
// };

// const merge = (array1, array2) => {
//   let result = [];
//   let index1 = 0;
//   let index2 = 0;

//   while (index1 < array1.length && index2 < array2.length) {
//     if (array1[index1] > array2[index2]) {
//       result.push(array2[index2]);
//       index2++;
//     } else {
//       result.push(array1[index1]);
//       index1++;
//     }
//   }

//   while (index1 < array1.length) {
//     result.push(array1[index1]);
//     index1++;
//   }
//   while (index2 < array2.length) {
//     result.push(array2[index2]);
//     index2++;
//   }

//   return result;
// };

// const mergeSort = array => {
//   if (array.length === 1) return array;

//   const middleIndex = Math.floor(array.length / 2);
//   const leftSide = array.slice(0, middleIndex);
//   const rightSide = array.slice(middleIndex);

//   return merge(mergeSort(leftSide), mergeSort(rightSide));
// };

// const merge = (array1, array2) => {
//   let result = [];
//   let index1 = 0;
//   let index2 = 0;

//   while (index1 < array1.length && index2 < array2.length) {
//     if (array1[index1] > array2[index2]) {
//       result.push(array2[index2]);
//       index2++;
//     } else {
//       result.push(array1[index1]);
//       index1++;
//     }
//   }

//   while (index1 < array1.length) {
//     result.push(array1[index1]);
//     index1++;
//   }

//   while (index2 < array2.length) {
//     result.push(array2[index2]);
//     index2++;
//   }

//   return result;
// };

// const mergeSort = array => {
//   if (array.length === 1) return array;

//   let middleIndex = Math.floor(array.length / 2);
//   let firstPart = array.slice(0, middleIndex);
//   let secondPart = array.slice(middleIndex);

//   return merge(mergeSort(firstPart), mergeSort(secondPart));
// };

// function swap(array, firstIndex, secondIndex) {
//   let temp = array[firstIndex];
//   array[firstIndex] = array[secondIndex];
//   array[secondIndex] = temp;
// }

// function pivot(array, pivotIndex = 0, endIndex = array.length - 1) {
//   let swapIndex = pivotIndex;

//   for (let i = pivotIndex + 1; i <= endIndex; i++) {
//     if (array[i] < array[pivotIndex]) {
//       swapIndex++;
//       swap(array, swapIndex, i);
//     }
//   }

//   swap(array, pivotIndex, swapIndex);
//   return swapIndex;
// }

// function quickSort(array, left = 0, right = array.length - 1) {
//   if (left < right) {
//     let pivotIndex = pivot(array, left, right);
//     quickSort(array, left, pivotIndex - 1);
//     quickSort(array, pivotIndex + 1, right);
//   }
//   return array;
// }

// const swap = (array, firstIndex, secondIndex) => {
//   let temp = array[firstIndex];
//   array[firstIndex] = array[secondIndex];
//   array[secondIndex] = temp;
// };

// const pivot = (array, pivotIndex = 0, endIndex = array.length - 1) => {
//   let swapIndex = pivotIndex;

//   for (let i = pivotIndex + 1; i <= endIndex; i++) {
//     if (array[i] < array[pivotIndex]) {
//       swapIndex++;
//       swap(array, swapIndex, i);
//     }
//   }

//   swap(array, pivotIndex, swapIndex);

//   return swapIndex;
// };

// const quickSort = (array, left = 0, right = array.length - 1) => {
//   if (left < right) {
//     let pivotIndex = pivot(array, left, right);
//     quickSort(array, left, pivotIndex - 1);
//     quickSort(array, pivotIndex + 1, right);
//   }
//   return array;
// };

// const swap = (array, firstIndex, secondIndex) => {
//   const temp = array[firstIndex];
//   array[firstIndex] = array[secondIndex];
//   array[secondIndex] = temp;
// };

// const pivot = (array, pivotIndex = 0, endIndex = array.length - 1) => {
//   let swapIndex = pivotIndex;

//   for (let i = pivotIndex + 1; i < endIndex; i++) {
//     if (array[i] < array[pivotIndex]) {
//       swapIndex++;
//       swap(array, swapIndex, i);
//     }
//   }
//   swap(array, pivotIndex, swapIndex);

//   return swapIndex;
// };

// const quickSort = (array, left = 0, right = array.length - 1) => {
//   if (left < right) {
//     let pivotIndex = pivot(array, left, right);
//     quickSort(array, left, pivotIndex - 1);
//     quickSort(array, pivotIndex + 1, right);
//   }
//   return array;
// };

// const swap = (array, firstIndex, secondIndex) => {
//   const temp = array[firstIndex];
//   array[firstIndex] = array[secondIndex];
//   array[secondIndex] = temp;
// };

// const pivot = (array, pivotIndex = 0, endIndex = array.length - 1) => {
//   let swapIndex = pivotIndex;

//   for (let i = pivotIndex + 1; i < endIndex; i++) {
//     if (array[pivotIndex] > array[i]) {
//       swapIndex++;
//       swap(array, i, swapIndex);
//     }
//   }
//   swap(array, pivotIndex, swapIndex);
//   return swapIndex;
// };

// const quickSort = (array, left = 0, right = array.length - 1) => {
//   if (left < right) {
//     const pivotIndex = pivot(array, left, right);
//     quickSort(array, left, pivotIndex - 1);
//     quickSort(array, pivotIndex + 1, right);
//   }
//   return array;
// };

// const swap = (array, index1, index2) => {
//   const temp = array[index1];
//   array[index1] = array[index2];
//   array[index2] = temp;
// };

// const pivot = (array, pivotIndex = 0, endIndex = array.length - 1) => {
//   let swapIndex = pivotIndex;

//   for (let i = pivotIndex + 1; i <= endIndex; i++) {
//     if (array[i] < array[pivotIndex]) {
//       swapIndex++;
//       swap(array, i, swapIndex);
//     }
//   }
//   swap(array, swapIndex, pivotIndex);

//   return swapIndex;
// };

// const quickSort = (array, left = 0, right = array.length - 1) => {
//   if (left < right) {
//     const pivotIndex = pivot(array, left, right);
//     quickSort(array, left, pivotIndex - 1);
//     quickSort(array, pivotIndex + 1, right);
//   }

//   return array;
// };

// const merge = (array1, array2) => {
//   let index1 = 0;
//   let index2 = 0;
//   let result = [];

//   while (index1 < array1.length && index2 < array2.length) {
//     if (array1[index1] < array2[index2]) {
//       result.push(array1[index1]);
//       index1++;
//     } else {
//       result.push(array2[index2]);
//       index2++;
//     }
//   }

//   while (index1 < array1.length) {
//     result.push(array1[index1]);
//     index1++;
//   }
//   while (index2 < array2.length) {
//     result.push(array2[index2]);
//     index2++;
//   }

//   return result;
// };

// const mergeSort = array => {
//   if (array.length === 1) return array;

//   const middleIndex = Math.floor(array.length / 2);
//   const left = array.slice(0, middleIndex);
//   const right = array.slice(middleIndex);
//   return merge(mergeSort(left), mergeSort(right));
// };

// const swap = (array, index1, index2) => {
//   const temp = array[index1];
//   array[index1] = array[index2];
//   array[index2] = temp;
// };

// const pivot = (array, pivotIndex = 0, endIndex = array.length - 1) => {
//   let swapIndex = pivotIndex;

//   for (let i = pivotIndex + 1; i <= endIndex; i++) {
//     if (array[i] < array[pivotIndex]) {
//       swapIndex++;
//       swap(array, i, swapIndex);
//     }
//   }
//   swap(array, pivotIndex, swapIndex);
//   return swapIndex;
// };

// const quickSort = (array, left = 0, right = array.length - 1) => {
//   if (left < right) {
//     const pivotIndex = pivot(array, left, right);
//     quickSort(array, left, pivotIndex - 1);
//     quickSort(array, pivotIndex + 1, right);
//   }
//   return array;
// };

const bubbleSort = array => {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (array[j] > array[j + 1]) {
        const temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }
  return array;
};

const selectionSort = array => {
  for (let i = 0; i < array.length; i++) {
    let minIndex = i;

    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[minIndex]) minIndex = j;
    }

    if (i !== minIndex) {
      const temp = array[i];
      array[i] = array[minIndex];
      array[minIndex] = temp;
    }
  }
  return array;
};

const insertionSort = array => {
  for (let i = 0; i < array.length; i++) {
    const current = array[i];
    let j = i - 1;

    while (j > -1 && current < array[j]) {
      array[j + 1] = array[j];
      j--;
    }
    array[j + 1] = current;
  }
  return array;
};

const swap = (array, index1, index2) => {
  const temp = array[index1];
  array[index1] = array[index2];
  array[index2] = temp;
};

const merge = (array1, array2) => {
  let i = 0;
  let j = 0;
  let result = [];

  while (i < array1.length && j < array2.length) {
    if (array1[i] < array2[j]) {
      result.push(array1[i]);
      i++;
    } else {
      result.push(array2[j]);
      j++;
    }
  }

  while (i < array1.length) {
    result.push(array1[i]);
    i++;
  }
  while (j < array2.length) {
    result.push(array2[j]);
    j++;
  }

  return result;
};

const mergeSort = array => {
  if (array.length === 1) return array;

  let middleIndex = Math.floor(array.length / 2);
  let left = array.slice(0, middleIndex);
  let right = array.slice(middleIndex);
  return merge(mergeSort(left), mergeSort(right));
};

const pivot = (array, pivotIndex = 0, endIndex = array.length - 1) => {
  let swapIndex = pivotIndex;

  for (let i = pivotIndex; i <= endIndex; i++) {
    if (array[pivotIndex] > array[i]) {
      swapIndex++;
      swap(array, swapIndex, i);
    }
  }
  swap(array, swapIndex, pivotIndex);
  return swapIndex;
};

const quickSort = (array, left = 0, right = array.length - 1) => {
  if (left < right) {
    const pivotIndex = pivot(array, left, right);
    quickSort(array, left, pivotIndex - 1);
    quickSort(array, pivotIndex + 1, right);
    return array;
  }
};

const testArr = [22, 45, 3, 0, 1, 2, 4, 6, 88, 9, 5];
console.log(bubbleSort([...testArr]));
console.log(selectionSort([...testArr]));
console.log(insertionSort([...testArr]));

console.log("\nMERGESORT");
let myArray1 = [1, 3, 7, 8];
let myArray2 = [2, 4, 5, 6];
console.log(merge(myArray1, myArray2));
console.log(mergeSort([...testArr]));

console.log("\nQUICKSORT");
let myArray3 = [4, 6, 1, 7, 3, 2, 5];
pivot(myArray3);
console.log(myArray3);
let myArray4 = [4, 6, 1, 7, 3, 2, 5];
quickSort(myArray4);
console.log(myArray4);
