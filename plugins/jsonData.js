import Vue from 'vue';
import data from '~/data';

const DataJsonPlugin = function(Vue, _options) {
  Vue.prototype.$jsonData = function (_methodOptions) {
    return data;
  }
}

Vue.use(DataJsonPlugin);
