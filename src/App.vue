<template>
  <div id="app">
    <router-view/>
    <footer-guide v-show="$route.meta.showFooter"></footer-guide>
  </div>
</template>
<script>
import FooterGuide from "./components/FooterGuide/FooterGuide.vue"
// 引入ajax请求数据（测试）
import {reqFoodCategorys} from "./api/index"
import {mapActions} from 'vuex'
export default {
  components: {
    FooterGuide
  },
  //  async mounted() {
  //   const result = await reqFoodCategorys();
  //   console.log('result',result)
  // },
  // 测试vuex的异步请求
  mounted() {
    // 获取异步请求的方式一
    // this.$store.dispatch('getAddress')
    /** 
     * 获取异步请求的方式二
     * 1.引入mapActions 映射的方式  import {mapActions} from 'vuex'
     * 2.在methods中定义映射 
     * 3.在生命周期中加载映射函数
    */
   this.getAddress()
   this.getUserinfo()
  },
  methods: {
    ...mapActions(['getAddress','getUserinfo'])
  }
}
</script>

<style lang="stylus">
#app{
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 100%;
  height: 100%;
  background: #f5f5f5;
  position relative
}

</style>
