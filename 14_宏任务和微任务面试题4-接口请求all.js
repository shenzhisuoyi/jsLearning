
// 原题开始
async function async1 () {
  console.log('async1 start');
  await async2()
  console.log('async1 end');
}

async function async2 () {
  console.log('async2');
}

console.log('script start');

setTimeout(() => {
  console.log('timeout');
}, 0);

async1()

new Promise(resolve => {
  console.log('promise1');
  resolve()
}).then(res => {
  console.log('promise2');
})

console.log('script end');
// 原题结束


// script start
// async1 start
// async2
// promise1
// script end
// async1 end
// promise2
// timeout









