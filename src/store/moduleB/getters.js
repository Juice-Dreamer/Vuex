export default {
  getStateB (state, getters, rootState) { // state是局部，rootState是全部，getters一般没有用
    return state.stateB * 2
  },
  getStateA (state, getters, rootState) { // 在b模块获取a模块的stateA
    return rootState.a.stateA
  }
}
