<template>
  <div class="header">
    <img src="../assets/cnodejs_light.svg" alt="">
    <ul>
      <li><a href="#">首页</a></li>
      <li><a href="#">新手入门</a></li>
      <li><a href="#">api</a></li>
      <li><a href="#">设置</a></li>
      <li><a href="#">退出</a></li>
    </ul>
  </div>
</template>

<script>
export default {
    name: 'h',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .header{
    background: #000;
  }
  img{
    max-width: 120px;
    margin-left: 50px;
    margin-top: 10px;
  }
  ul{
    float: right;
    list-style:none;
  }
  ul>li{
    display: inline-block;
    padding:  0 10px;

  }
  ul>li>a{
    text-decoration: none;
    color:#ccc;
    font-size:14px;
    text-shadow: nonr;
  }
</style>
