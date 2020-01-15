import Vue from 'vue'
import App from './App'
import MpvueRouterPatch from 'mpvue-router-patch'
import * as funs from './funs' // 全局函数


Vue.use(MpvueRouterPatch)

Vue.prototype.funs = funs
Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue(App)
app.$mount()
