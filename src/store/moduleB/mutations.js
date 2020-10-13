const CHANGE_B = 'changeB'
export default {
  [CHANGE_B] (state, data) { // state是局部变量，无法获取到rootState
    const newStateB = data.newStateB
    state.stateB = newStateB
  }
}
