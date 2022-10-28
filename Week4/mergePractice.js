const merge = (A) => {
  const p = 0;              
  const r = A.length - 1;  // 4
  const q = Math.floor((p + r) / 2);  // 2

  const n1 = q - p; // 2
  const n2 = r - q + 1; // 3

  let L = [];
  let R = [];
  let sorted = [...A];
  for (let i = 0; i < n1; i++) {
    L[i] = A[p + i];
  }

  for (let i = 0; i < n2; i++) {
    R[i] = A[q + i];
  }

  L[n1] = Infinity;
  R[n2] = Infinity;

  let i = 0;
  let j = 0;
  for (let k = p; k <= r; k++) {
    if (L[i] <= R[j]) {
      sorted[k] = L[i];
      i++;
    } else {
      sorted[k] = R[j];
      j++;
    }
  }

  return sorted;
}

let A = [2, 5, 1, 4, 3]
let B = merge(A);

console.log(A, B);