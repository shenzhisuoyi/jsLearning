// 原题开始
console.log('script start')

setTimeout(function () {
  console.log('setTimeout1')
  new Promise((resolve, reject) => {
    resolve()
  }).then(res => {
    console.log('then4')
  })
  console.log('then2')
})

new Promise((resolve, reject) => {
  console.log('promise1')
  resolve()
}).then(res => {
  console.log('then1');
})

setTimeout(() => {
  console.log('setTimeout2');
})

console.log(2);

queueMicrotask(() => {
  console.log('queueMicrotask');
})

new Promise((resolve, reject) => {
  resolve()
}).then(res => {
  console.log('then3');
})

console.log('script end');
// 原题结束


// 开始
// // console.log('script start')

// setTimeout(function () {
//   // console.log('setTimeout1')
//   new Promise((resolve, reject) => {
//     resolve()
//   }).then(res => {
//     // console.log('then4')
//   })
//   // console.log('then2')
// })

// new Promise((resolve, reject) => {
//   // console.log('promise1')
//   resolve()
// }).then(res => {
//   // console.log('then1');
// })

// setTimeout(() => {
//   // console.log('setTimeout2');
// })

// // console.log(2);

// queueMicrotask(() => {
//   // console.log('queueMicrotask');
// })

// new Promise((resolve, reject) => {
//   resolve()
// }).then(res => {
//   // console.log('then3');
// })

// // console.log('script end');
// 结束

// script start
// promise1
// 2
// script end
// then1
// queueMicrotask
// then3
// setTimeout1
// then2
// then4
// setTimeout2
