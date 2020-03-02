import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
// 引入reset.css
import "./assets/css/reset.css"
// 引入mint-ui全部组件
import 'mint-ui/lib/style.css'
import { Button } from 'mint-ui';

Vue.component(Button.name, Button);


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
