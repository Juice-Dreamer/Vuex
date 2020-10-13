<template>
  <div class='home'>
    <img alt='Vue logo' src='../assets/logo.png' />

    <h2>vuex分模块使用</h2>
    <p>读取各模块的state</p>
    <p>stateA={{ stateA }},stateB={{ stateB }}</p>
    <p>gettersA={{ getStateA }},gettersB={{ getStateB }}</p>
    <p>
      <span>
      <button @click="changeStateB()">ChangeB</button>
      <button @click="changeStateBB()">ChangeBB</button>
      <button @click="changeStateAB()">ChangeAB</button>
      </span>
    </p>
  </div>
</template>
<script>
import { mapState, mapGetters, mapActions } from 'vuex'
export default {
  name: 'Home',
  computed: {
    // state的两种获取方法
    ...mapState({
      stateB: (rootState) => rootState.b.stateB
    }),
    stateA: function () {
      return this.$store.state.a.stateA
    },
    // getters的两种获取方法
    ...mapGetters('b', {
      getStateB: 'getStateB' // 调用b模块下的getStateB并映射为getStateB计算属性
    }),
    getStateA: function () {
      return this.$store.getters['b/getStateA'] // 也可通过this.$store.getters方法调用计算属性，同时映射计算属性
    }
  },
  methods: {
    // actions的两种获取方法
    ...mapActions('b', {
      changeStateB: 'changeStateB', // 把b模块下的该方法映射为changeStateB()，可以用个this.$store.
      changeStateAB: 'changeStateAB'
    }),
    changeStateBB () {
      return this.$store.dispatch('b/changeStateB')
    }

  }
}
</script>
