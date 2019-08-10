<template>
  <div id="app">
    <div class="logo">
        <img id="logo" src="../imgs/favicon.png">
    </div>
    <div>
      <router-link to="/">首页</router-link>
      <router-link to="/about">关于</router-link>
      <router-link to="/example">用例</router-link>
      <router-link to="/component_demo">组件</router-link>
      <router-link to="/menu_demo">菜单</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="less">

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #333;
  padding-top: 30px;
}
  body, html{
    padding: 0;
    margin: 0;
  }
  #logo{
    animation: que 4s linear infinite;
    position: absolute;
    top: 0;
    left:20px;
    width: 50px;
  }
  @keyframes que {
    0%{
      transform: rotateY(0deg);
    }
    100%{
      transform: rotateY(360deg);
    }
  }

</style>
