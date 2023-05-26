
// 原题开始
console.log('script start');

function requestData (url) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('setTimeout');
      resolve(url)
    }, 2000)
  })
}

async function getData () {
  console.log('getData start');
  const res = await requestData('why')
  console.log('then1-res:', res);
  console.log('getData end');
}

getData()

console.log('script start');
// 原题结束

// script start
// getData start
// script start'
// setTimeout
// then1-res:why
// getData end






