export default {
  changeStateA (context) {
    context.commit('')
  },
  changeStateAA ({ commit }) {
    commit('')
  },
  changeStateAAA ({ state, commit, rootState }) {

  }
}
