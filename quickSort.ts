function quickSort(arr: number[]): number[] {
  return quicksortImpl(arr.slice(), 0, arr.length - 1);
}

function quicksortImpl(arr: number[], first: number, last: number): number[] {
  while (first < last) {
    const partitionIndex = partition(arr, first, last);
    if ((partitionIndex - first) < (last - partitionIndex)) {
      quicksortImpl(arr, first, partitionIndex - 1);
      first = partitionIndex;
    } else {
      quicksortImpl(arr, partitionIndex, last);
      last = partitionIndex - 1;
    }
  }
  return arr;
}

// pivotより大きい最初の位置を返す
function partition(arr: number[], first: number, last: number): number {
  const pivot = median3(arr[first], arr[first + Math.floor((last - first) / 2)], arr[last]);

  while (true) {
    while (arr[first] < pivot) {
      first++;
    }
    while (pivot < arr[last]) {
      last--;
    }
    if (first >= last) {
      return last + 1;
    }
    [arr[first], arr[last]] = [arr[last], arr[first]];
    first++;
    last--;
  }
}

// 3つの値の中央値を返す
function median3(a: number, b: number, c: number): number {
  return Math.max(Math.min(a, b), Math.min(Math.max(a, b), c));
}

function main() {
  const array = [5, 3, 8, 1, 2, 7, 5];
  const sortedArray = quickSort(array);
  console.log(sortedArray);
}

main();

// 好きな理由
// クイックソートは、データの状態やpivotの選び方次第で非常に高速に動作する点が好きです。
// 安定性こそマージソートに劣りますが、条件が揃えば最速のパフォーマンスを発揮できる点に魅力を感じています。
