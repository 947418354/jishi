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

/**
 * 一个字符串 找出其中出现次数最多的字符串以及次数
 */


/**
 * 将json对象的叶子结点以路径输出
 * 输出 ['arr.list.a.a', 'arr.list.b.b', 'obj.a.a', 'obj.b.b', 'a.a']
 */
const jsonObj = {
  arr: [
    {a: 'a'},
    {b: 'b'}
  ],
  obj: {
    a: 'a',
    b: 'b'
  },
  a: 'a'
}

function jsonToPath(jsonObj) {

}