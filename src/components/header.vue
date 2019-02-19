<template>
  <div class="haeder">
    <img src="../assets/cnodejs_light.svg" alt="">
    <ul>
      <li><a href="#">首页</a></li>
      <li><a href="#">新手入门</a></li>
      <li><a href="#">API</a></li>
      <li><a href="#">关于</a></li>
      <li><a href="#">注册</a></li>
      <li><a href="#">登录</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

*{
  padding: 0;margin: 0;box-sizing: border-box;
}

.haeder{
  background-color: #5a5555;
  height: 50px;
}

img{
  max-width: 120px;
  margin-left: 50px;
  margin-top: 10px;
}

ul{
  float: right;
  list-style: none;
  margin-top: 15px;
}

a{
  text-decoration: none;
  font-size: 14px;
  color:#ccc;
}

li{
  display: inline-block;
  margin: 0 5px;
}

</style>
