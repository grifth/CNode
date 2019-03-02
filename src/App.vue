<template>
  <div id="app">
    <Header></Header>
    <div class="main">
      <router-view name="slidebar"></router-view>
      <router-view name="main"></router-view>
    </div>
    
  </div>
</template>

<script>
import Header from './components/header'

export default {
  name: 'App',
  components:{
    Header,
  }
}
</script>

<style>
*{padding: 0;margin: 0;}
#app {
    background-color: #e1e1e1;
}
.main{
  width: 80%;
  margin: 0 auto;
}
</style>
