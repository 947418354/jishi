/**
 * 数值千分位
 */
function numQ(num) {
  num = Number(num).toString()
  const numArr = num.split('.')
  const int = numArr[0]
  const f = numArr[1]
  const intQ = int.split('').reverse().reduceRight((s, ele, i) => {
    return s += i % 3 === 0 ? ele + ',' : ele
  }, '').replace(/,$/, '')
  let fQ
  f && (fQ = f.split('').reduce((s, ele, i) => {
    return s += i % 3 === 0 ? ',' + ele : ele
  }, '').replace(/^,/, ''))
  return f ? intQ + '.' + fQ : intQ
}
console.log('输入123.456789', numQ(123.456789))
console.log('输入123456', numQ(123456))