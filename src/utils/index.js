// 防抖函数
const debounce = (fun, time) => {
  let timer
  return function () {
    clearTimeout(timer)
    let args = arguments
    timer = setTimeout(() => {
      fun.apply(this, args)
    }, time)
  }
}

export { debounce }
