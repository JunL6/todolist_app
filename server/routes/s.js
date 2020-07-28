function solution(startHeight, stableHeight, partitionNumber) {
  const halfSplit = (number) => {
    const left = Math.floor(number / 2);
    const right = number - left;
    return [left, right];
  };

  let partitions = [startHeight];
  while (partitions.find((h) => h > stableHeight)) {
    const tallerIndex = partitions.findIndex((h) => h > stableHeight);
    const taller = partitions.find((h) => h > stableHeight);

    partitions = [
      ...partitions.filter((p, i) => i !== tallerIndex),
      ...halfSplit(taller),
    ];
  }

  while (partitionNumber > partitions.length) {
    partitions = partitions.sort((a, b) => b - a);
    const tallest = partitions.pop();
    partitions = [...partitions, ...halfSplit(tallest)];
  }
  //   console.log(partitions)
  return partitions.filter(Boolean).length;
}
