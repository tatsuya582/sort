function mergeSort(arr: number[]): number[] {
  return mergeSortInternal(arr.slice());
}

function mergeSortInternal(arr: number[]): number[] {
  if (arr.length <= 1) {
    return arr;
  }
  const mid = Math.floor(arr.length / 2);
  const left = mergeSortInternal(arr.splice(0, mid));
  const right = mergeSortInternal(arr);
  return merge(left, right);
}

function merge(left: number[], right: number[]): number[] {
  const result: number[] = [];
  let i = 0;
  let j = 0;
  while (i < left.length && j < right.length) {
    if (left[i] <= right[j]) {
      result.push(left[i++]);
    } else {
      result.push(right[j++]);
    }
  }
  while (i < left.length) {
    result.push(left[i++]);
  }
  while (j < right.length) {
    result.push(right[j++]);
  }
  return result;
}

const array = [5, 3, 8, 1, 2, 7, 5];
const sortedArray = mergeSort(array);
console.log(sortedArray);

// 好きな理由
// マージソートは、データ量が多くなっても計算量が安定してO(n log n)に抑えられる点が好きです。
// また、同じ値同士の順番を守る「安定ソート」であるため、信頼して使いやすいと感じています。