<template>
  <div id="app">
    <div>
      <img src="../imgs/favicon.png" style="width: 100px">
    </div>
    <div>
      <router-link to="/">首页</router-link>
      <router-link to="/about">关于</router-link>
      <router-link to="/example">用例</router-link>
      <router-link to="/component_demo">组件</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #333;
  margin-top: 60px;
}
  body, html{
    padding: 0;
    margin: 0;
  }
</style>
