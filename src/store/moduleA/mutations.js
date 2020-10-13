const CHANGE_A = 'changeA'
export default {
  [CHANGE_A] (state, data) {
    state.stateA = data.newStateA
  }
}
