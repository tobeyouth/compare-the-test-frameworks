export default function promiseSum(a, b) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve(a + b)
    }, 1000)
  })
}
