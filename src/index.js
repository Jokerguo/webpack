import './x.scss'
import './y.less'
import './z.styl'
import x from './x.js'
import png from './assets/1.png'
console.log(png)

const div = document.getElementById('app')

div.innerHTML = `
    <img src="${png}"></img>
`

const button = document.createElement('button')
button.innerText = '懒加载'
button.onclick =()=>{
    const promise = import('./lazy.js')
    promise.then((module)=>{
        const fn = module.default
        fn()
    },()=>{})
}
div.appendChild(button)