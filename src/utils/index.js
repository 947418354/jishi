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
 * 单向链表反转
 * 思路: while整个链表,提前申明好一些变量用于存储上一个节点,当前节点等,每遍历到一个节点就将其下一个节点先存进当前临时节点变量,
 * 再将next指向上一个结点的变量,再将前一个节点变量指向当前节点,当前节点变量指向临时的当前节点变量
 * 
 */
function reverse(lian) {
  let cur = lian[0]
  let prev = null
  let lCur = null
  while (cur) {
    lCur = cur.next
    cur.next = prev
    prev = lCur
    cur = lCur
  }
}

/**
 * 手写promise
 * https://blog.csdn.net/qq_32644987/article/details/117842230
 */