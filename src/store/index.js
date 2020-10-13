import Vue from 'vue'
import Vuex from 'vuex'

import moduleA from './moduleA/index'
import moduleB from './moduleB/index'
Vue.use(Vuex) // 注册插件

export default new Vuex.Store({
  modules: {
    a: moduleA,
    b: moduleB
  }
})
