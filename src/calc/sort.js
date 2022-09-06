/**
 * 基数排序(桶排序)
 * 适用场景. 数据范围 1 - 10^6, 保证时间复杂度O(n) // 指数*(n + n)
 * 特点: 非比较排序 稳定
 */
function bucket(arr) {
  const max = Math.max(...arr)
  let wj = 1
  let buckets = Array.from({length: 10}, () => [])
  while (wj <= max) {
    arr.forEach(num => {
      let wjValue = Math.floor((num % (wj * 10)) / wj)
      buckets[wjValue].push(num)
    })
    arr = buckets.flat()
    buckets = Array.from({length: 10}, () => [])
    wj *= 10
  }
  return arr
}