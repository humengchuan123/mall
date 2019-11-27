<template>
  <div class="wrapper">
    <div class="foot-content">
      <div class="logo-area">
        <div class="logo">
          <img src="../../assets/img/trends-ft-logo.png" alt="" />
        </div>
        <div class="copyRight">
          Copyright © 2018 by trends. All Rights Reserved.
        </div>
        <div class="company">
          Website designed & Developed by NCode Technologies, Inc.
        </div>
      </div>
      <div class="links-area">
        <div class="links-title">Quick Links</div>
        <div class="links-item">
          <ul>
            <li v-for="(item,index) in linkList" :key="index">{{ item.name }}</li>
          </ul>
        </div>
      </div>
      <div class="information-area">
        <div class="info-title">Information</div>
        <div class="info-item">
          <ul>
            <li v-for="(item,index) in infoList" :key="index">{{ item.name }}</li>
          </ul>
        </div>
      </div>
      <div class="news-letters">
        <div class="letter-title">Newsletter</div>
        <div class="letter-area">
          <!-- <input type="text" placeholder="Newsletter Signup"> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Footer',
  data () {
    return {
      linkList: [
        { name: 'About Us' },
        { name: 'Our Office' },
        { name: 'Deliver' },
        { name: 'Store' },
        { name: 'Guarantee' },
        { name: 'Buy Gift card' }
      ],
      infoList: [
        { name: 'Track your order' },
        { name: 'Term' },
        { name: 'Conditions' },
        { name: 'Contact Us' },
        { name: 'Manufactures' },
        { name: 'New brands' }
      ]
    }
  },
  created () {
    console.log(this.infoList)
  }
}
</script>
<style lang="scss" scoped>
.wrapper {
  bottom: 0;
  padding: 0 0.86rem;
  .foot-content {
    background: rgb(41, 41, 41);
    height: 8rem;
    width: 100%;
    .logo-area {
      width: 5rem;
      height: 6rem;
      float: left;
      margin: 1rem 0rem 1rem 1.5rem;
      position: relative;
      .logo {
        margin-top: 0.4rem;
        margin-left: 0.8rem;
        width: 3.6rem;
        height: 1rem;
        overflow: hidden;
        cursor: pointer;
        img {
          width: 100%;
        }
      }
      .copyRight {
        color: #888888;
        margin-left: 0.8rem;
        margin-top: 0.42rem;
        width: 3.6rem;
        height: 1rem;
        line-height: 0.46rem;
        text-align: left;
      }
      .company {
        color: #888888;
        margin-left: 0.8rem;
        // margin-top: 0.42rem;
        width: 4.6rem;
        height: 1rem;
        line-height: 0.46rem;
        text-align: left;
        position: absolute;
        bottom: 0;
      }
    }
    .links-area {
      // background: #fff;
      width: 3.6rem;
      height: 6rem;
      float: left;
      margin: 1rem 0rem 1rem 1.5rem;
      .links-title {
        font-size: 20px;
        color: #ffffff;
        font-weight: 700;
        letter-spacing: 0.5px;
        position: relative;
        float: left;
        margin: 30px 0px 22px;
        &:before {
          content: "";
          position: absolute;
          bottom: 0px;
          right: -11px;
          width: 8px;
          height: 8px;
          background: #ee3334;
          margin: auto;
          border-radius: 100%;
        }
      }
      .links-item{
        color: #888888;
        font-size: 16px;
        text-align: left;
        ul{
          width: 100%;
          float: left;
        }
        ul li{
          padding: 0px 0px 16px;
          cursor: pointer;
        }
        ul li:hover{
          color: #ffffff;
        }
      }
    }
    .information-area {
      // background: #fff;
      width: 3.6rem;
      height: 6rem;
      float: left;
      margin: 1rem 0rem 1rem 1.5rem;
      .info-title {
        font-size: 20px;
        color: #ffffff;
        font-weight: 700;
        letter-spacing: 0.5px;
        position: relative;
        float: left;
        margin: 30px 0px 22px;
        &:before {
          content: "";
          position: absolute;
          bottom: 0px;
          right: -11px;
          width: 8px;
          height: 8px;
          background: #ee3334;
          margin: auto;
          border-radius: 100%;
        }
      }
      .info-item {
        color: #888888;
        font-size: 16px;
        text-align: left;
        ul{
          width: 100%;
          float: left;
        }
        ul li{
          padding: 0px 0px 16px;
          cursor: pointer;
        }
        ul li:hover{
          color: #ffffff;
        }
      }
    }
    .news-letters {
      // background: #fff;
      width: 8rem;
      height: 6rem;
      float: left;
      margin: 1rem 0rem 1rem 1.5rem;
      .letter-title{
        font-size: 20px;
        color: #ffffff;
        font-weight: 700;
        letter-spacing: 0.5px;
        position: relative;
        float: left;
        margin: 30px 0px 22px;
        &:before {
          content: "";
          position: absolute;
          bottom: 0px;
          right: -11px;
          width: 8px;
          height: 8px;
          background: #ee3334;
          margin: auto;
          border-radius: 100%;
        }
      }
    }
  }
}
</style>
