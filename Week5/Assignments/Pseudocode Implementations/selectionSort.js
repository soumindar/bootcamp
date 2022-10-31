// pseudocode: https://www.tutorialspoint.com/data_structures_algorithms/selection_sort_algorithm.htm

const selectionSort = (list) => {
  const n = list.length;
  for (let i = 0; i <= n - 1; i++) {
    let min = i;

    for (let j = i + 1; j <= n; j++) {
      if (list[j] < list[min]) {
        min = j;
      }
    }

    if (min != i) {
      [list[min], list[i]] = [list[i], list[min]];
    }
  }
}

let data = [2, 5, 4, 1, 6, 3];
selectionSort(data);
console.log(data);