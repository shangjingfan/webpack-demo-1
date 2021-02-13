import x from './x.js'
import png from './assets/123.png'

const div = document.getElementById("app")

div.innerHTML = ` <img src="${png}"> `

const button = document.createElement("button")
button.innerText = "懒加载"
div.append(button)
button.onclick = () => {
  const promise = import('./lazy') // 异步的，返回promise
  console.log(promise)
  promise.then((module) => {
    const fn = module.default
    fn()
  }, () => { })
}