/**
 * 实现：new LazyMan('Tony').sleep(2).eat('breakfast').sleep(3).eat('lunch').eat('');
结果：
// 等待2秒
// 吃 breakfast
// 等待3秒
// 吃 lunch
参考: https://blog.csdn.net/yesz12358/article/details/123652968
 */
class LazyMan {
  callbacks = []
  isExeing = false
  constructor(name) {
    this.name = name
    this.exe()
  }
  exe() {
    if (this.isExeing) return
    this.isExeing = true
    Promise.resolve().then(async () => {
      while (this.callbacks.length) {
        await this.callbacks.shift()()
        if (!this.callbacks.length) this.isExeing = false
      }
    })
  }
  wait(t) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve()
      }, t * 1000)
    })
  }
  sleep(t) {
    this.callbacks.push(() => {
      return this.wait(t)
    })
  }
  eat(food) {
    this.callbacks.push(() => {
      console.log('吃' + food)
      return Promise.resolve()
    })
  }
}