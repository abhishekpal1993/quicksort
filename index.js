const uuidv4 = require('uuid/v4');
const originalArray = [17, 25, 99, 8, 14, 6, 63, 37, 52, 2]
const randomLength = 100000;

for(let k = 0; k < randomLength; k++) {
  originalArray.push(Math.floor(Math.random() * randomLength) + 1);
}

function quickSort(array, left, right, uuid = uuidv4()) {
  if (left < right) {
    let leftIncremental = left + 1;
    let rightIncremental = right;
    let pivot = left;
    let loop = true;
    console.log("[" + uuid + "]*********** pivot:", array[pivot]);

    while (loop) {
      /**
       * only for console 
       **/
      let tempArray = [];
      for (let i = left; i <= right; i++) {
        tempArray.push(array[i]);
      }
      console.log("[" + uuid + "]## Array:", tempArray.toLocaleString());
      /**
       * end console 
       **/

      /* increment left till larger than pivot is found */
      while ((array[leftIncremental] <= array[pivot]) && (leftIncremental < right)) {
        console.log("[" + uuid + "]left skip:", array[leftIncremental]);
        leftIncremental++;
      }
      console.log("[" + uuid + "]left skip paused:", array[leftIncremental]);

      /* decrement right till smaller than pivot is found or end of array */
      while ((array[rightIncremental] >= array[pivot]) && (rightIncremental > left)) {
        console.log("[" + uuid + "]right skip:", array[rightIncremental]);
        rightIncremental--;
      }
      console.log("[" + uuid + "]right skip paused:", array[rightIncremental]);

      /* swap if larger element found on left side and smaller element found on right side */
      if (leftIncremental < rightIncremental) {
        console.log("[" + uuid + "]swap:", array[rightIncremental], array[leftIncremental]);
        let temp = array[leftIncremental];
        array[leftIncremental] = array[rightIncremental];
        array[rightIncremental] = temp;
      } else {
        loop = false;
      }
    }

    /* swap the pivot with the position of first smaller element */
    console.log("[" + uuid + "]pivot swap:", array[rightIncremental], array[pivot]);
    let temp = array[rightIncremental];
    array[rightIncremental] = array[pivot];
    array[pivot] = temp;
    console.log("[" + uuid + "]## placing pivot in its right position:", array);

    /* find the split position and start quicksort on either side of pivot element */
    const splitPosition = rightIncremental;
    quickSort(array, left, (splitPosition - 1));
    quickSort(array, (splitPosition + 1), right);
  }
}

quickSort(originalArray, 0, originalArray.length - 1);
console.log("########### Final Result:", originalArray.toLocaleString());