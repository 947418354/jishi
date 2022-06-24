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
 * 输出 ['arr.0.a.a', 'arr.1.b.b', 'obj.a.a', 'obj.b.b', 'a.a']
 */
const jsonObj = {
  arr: [
    { a: 'a' },
    { b: 'b' }
  ],
  obj: {
    a: 'a',
    b: 'b'
  },
  a: 'a'
}
function jsonToPath(jsonObj, pre = '') {
  let arr = []
  if (Object.prototype.toString.call(jsonObj) === '[object Array]') {
    for (const [i, ele] of jsonObj.entries()) {
      if (typeof ele === 'object') {
        arr = arr.concat(jsonToPath(ele, pre + i + '.'))
      } else {
        arr.push(pre + i + '.' + ele)
      }
    }
  } else if (Object.prototype.toString.call(jsonObj) === '[object Object]') {
    for (key in jsonObj) {
      if (typeof jsonObj[key] === 'object') {
        arr = arr.concat(jsonToPath(jsonObj[key], pre + key + '.'))
      } else {
        arr.push(pre + key + '.' + jsonObj[key])
      }
    }
  }
  return arr
}

/* 单向链表反转
    * 思路: while整个链表, 提前申明好一些变量用于存储上一个节点, 当前节点等, 每遍历到一个节点就将其下一个节点先存进当前临时节点变量,
 * 再将next指向上一个结点的变量, 再将前一个节点变量指向当前节点, 当前节点变量指向临时的当前节点变量
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


/**
 * 求两个数组交集
 */
function andArr(arr1, arr2) {
  return arr1.filter(ele => arr2.includes(ele))
}

/* 
嵌套对象的扁平化
const entry = {
  a: {
      b: {
          c: {
              dd: 'abcdd',
          },
      },
      d: {
          xx: 'adxx',
      },
      e: 'ae',
  },
  b: ['b0', 'b1'],
}; */
// When we invoke the "convertObject" method and pass the parameter "entry" object: convertObject(entry)
// The result is:
// {
//   'a.b.c.dd': 'abcdd',
//   'a.d.xx': 'adxx',
//   'a.e': 'ae',
// };
// Please complete the convertObject method
function convertObject(o, prefix = '') {
  let obj = {}
  for (const key in o) {
    if (o.hasOwnProperty.call(o, key)) {
      if (typeof o[key] === 'object') {
        obj = { ...obj, ...convertObject(o[key], prefix + key + '.') }
      } else {
        obj[prefix + key] = o[key]
      }
    }
  }
  return obj
}

/**
 * 扁平化对象列表,嵌套化
 * @param {*} nums 
 * @returns [
     {
         id: 0,
         name: "root",
         parentId: null,
         "children": [...]
     }
 ]
 */
const arr = [
  { id: 1, name: 'child1', parentId: 0 },
  { id: 2, name: 'child2', parentId: 0 },
  { id: 6, name: 'child2_1', parentId: 2 },
  { id: 0, name: 'root', parentId: null },
  { id: 5, name: 'child1_2', parentId: 1 },
  { id: 4, name: 'child1_1', parentId: 1 },
  { id: 3, name: 'child3', parentId: 0 }
]
function platToNest(arr) {
  function find(arr, id) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].id === id) {
        return arr[i]
      } else if (arr[i].children && arr[i].children.length) {
        let parent = find(arr[i].children, id)
        if (parent) return parent
      }
    }
  }
  let i = 0
  while (i < arr.length) {
    let p = find(arr, arr[i].parentId)
    if (p) {
      let curr = arr.splice(i, 1)[0]
      if (p.children) {
        p.children.push(curr)
      } else {
        p.children = [curr]
      }
      i--
    }
    i++
  }
  return arr
}

/*
最长递增子序列长度
动态规划 加 二分查找 时间复杂度 最优O(n) 最坏O(nlog2 n) 平均O(nlog2 n) 
空间复杂度n
*/
function lengthOfLIS(nums) {
  const n = nums.length,
    let d = []	// 抽象数组,抽象出来的最长子序列,并不等于实际的最长子序列
  if (n === 0 || n === 1) return n
  d[0] = nums[0]
  for (let i = 1; i < n; i++) {
    if (nums[i] > d[d.length - 1]) {
      d.push(nums[i])
    } else {
      let l = 0, r = d.length - 1, mid
      while (l < r) {
        mid = Math.floor((l + r) / 2)
        if (nums[i] > d[mid]) {
          l = mid + 1
        } else {
          r = mid
        }
      }
      d[r] = nums[i]
    }
  }
  return d.length
}