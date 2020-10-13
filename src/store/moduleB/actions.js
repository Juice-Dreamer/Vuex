export default {
  changeStateB (context) {
    const newStateB = context.state.stateB + 1
    context.commit('changeB', { newStateB })
  },
  changeStateAB ({ state, commit, rootState }) { // context可以解析出state，commit，rootState
    const newStateB = state.stateB + 1000
    commit('changeB', { newStateB })
    const newStateA = rootState.a.stateA + 'aaaaaa' // 一般不直接改变state，而是通过action->mutaion去改变
    commit('a/changeA', { newStateA }, { root: true }) // 可以设置root=true，即可访问到其他模块的action
  }
}
