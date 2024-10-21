<template>
  <div id="app">
    <Navigation/>
    <br><br><br><br><br>
    <router-view></router-view>
    <MyFooter v-show="isFooterVisible"></MyFooter>
  </div>
</template>

<script>
import MyFooter from './components/MyFooter.vue'
import Navigation from './components/Navigation.vue'
export default {
  name: 'App',
  components: {
    MyFooter,
    Navigation
  },
  data(){
    return {
      isFooterVisible: true
    }
  },
  watch: {
    // 监听路由变化
    '$route'(to, from) {
      // 根据路由的meta字段或其他条件来控制组件的显示
      if (to.meta.requiresAuth) {
        this.isFooterVisible = true;
      } else {
        this.isFooterVisible = false;
      }
    }
  },
  mounted() {
    // 初始时也检查一次路由
    this.$watch('$route', () => {
      if (this.$route.meta.requiresAuth) {
        this.isFooterVisible = true;
      } else {
        this.isFooterVisible = false;
      }
    });
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
