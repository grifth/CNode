<template>
  <div id="app">
    <Header></Header>
    <div class="main">
        <router-view name="main"></router-view>
    </div>
  </div>
</template>

<script>
import Header from './components/Head'
import Postlist from './components/Postlist'
export default {
  name: 'App',
  components:{
    Header,Postlist
  }
}
</script>

<style>

</style>
