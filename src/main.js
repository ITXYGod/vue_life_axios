import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  // vue实例编译后的模板挂在到index.html的id叫做app的标签上，这就是el配置项的作用
  el: '#app',
  render: h => h(App),
});
