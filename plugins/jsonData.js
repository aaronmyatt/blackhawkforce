import Vue from 'vue'
import data from '~/data'

const DataJsonPlugin = function(Vue, _options) {
  Vue.observable(data);
  Vue.prototype.$jsonData = function(moduleName, _methodOptions) {
    document.addEventListener('DOMNodeInserted', function(el) {
      if (el.target.id && el.target.id === moduleName) {
        data[el.target.id] = JSON.parse(el.target.innerHTML)
      }
    })
    return data[moduleName]
  }
}

Vue.use(DataJsonPlugin)
