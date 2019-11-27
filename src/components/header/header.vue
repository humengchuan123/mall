<template>
  <div class="wrapper">
    <div @click="handleHome" class="logo">
      logo
    </div>
    <div class="nav-menu">
      <ul>
        <li>HOME</li>
        <li>WOMEN</li>
        <li>MEN</li>
        <li>ACCESSORIES</li>
        <li>PAGES</li>
        <li>LOOKBOOK</li>
        <li>CONTACT</li>
      </ul>
    </div>
    <div class="icon-area">
      <span class="iconfont search">&#xe70a;</span>
      <span class="iconfont cart">&#xe6f1;</span>
      <span class="iconfont menu">&#xe6ed;</span>
      <span class="num">{{ cartNum }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
      menuList: [],
      cartNum: '3'
    }
  },
  watch: {},
  computed: { },
  methods: {
    handleHome () {
      // this.$router.push({
      //   name: ""
      // })
    }
  },
  created () { },
  mounted () { }
}
</script>
<style lang="scss" scoped>
  .wrapper{
    height: 100px;
    line-height: 100px;
    background: #ccc;
    position: relative;
    .logo{
      color: #fff;
      font-size: 24px;
      width: 200px;
      height: 60px;
      line-height: 60px;
      margin-left: 50px;
      margin-top:20px;
      float: left;
      background: #06c;
      cursor: pointer;
    }
    .nav-menu{
      overflow: hidden;
      height: 60px;
      line-height: 60px;
      background: #fff;
      width: 710px;
      position:absolute;
      top:50%;
      left:50%;
      margin-left:-270px;
      margin-top:-30px;
      ul li{
        float: left;
        padding: 0 20px;
      }
      ul li:hover{
        color: #ee3334;
      }
    }
    .icon-area{
      float: right;
      background: #fff;
      // width: 120px;
      height: 60px;
      line-height: 60px;
      margin-top:0.4rem;
      margin-right: 1rem;
      position: relative;
      .iconfont{
        font-size: 0.55rem;
        margin: 0 0.2rem;
        cursor: pointer;
      }
      .search:hover{
        color: #dc3545;
      }
      .num{
        position: absolute;
        top: 0.2rem;
        left: 1.54rem;
        background: red;
        height: 0.36rem;
        line-height: 0.4rem;
        width: 0.36rem;
        border-radius: 50%;
      }
    }
  }
</style>
