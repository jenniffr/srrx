import Vue from 'vue'
import App from './index'

// add this to handle exception
Vue.config.errorHandler = function (err) {
    if (console && console.error) {
      console.error(err)
    }
  }

function getRandomColor() {
  let rgb = []
  for (let i = 0; i < 3; ++i) {
    let color = Math.floor(Math.random() * 256).toString(16)
    color = (color.length == 1) ? '0' + color : color
    rgb.push(color)
  }
  return '#' + rgb.join('')
}


  



const app = new Vue(App)
app.$mount()