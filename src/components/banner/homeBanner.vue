<template>
  <div class="wrapper">
      <div class="banner">
            <swiper :options="swiperOption">
            <!-- slides -->
            <swiper-slide v-for="item of bannerList" :key="item.id">
                <img class="swiper-img" :src="item.imgUrl" alt="">
            </swiper-slide>
            <!-- Optional controls -->
            <div class="swiper-pagination"  slot="pagination"></div>
            <div class="iconfont swiper-button-prev" slot="button-prev">&#xe6ef;</div>
            <div class="iconfont swiper-button-next" slot="button-next">&#xe6ec;</div>
            </swiper>
        </div>
  </div>
</template>

<script>
export default {
  name: '',
  data () {
    return {
      bannerList: [
        {id: '01', imgUrl: require('../../assets/img/banner01.jpg')},
        {id: '02', imgUrl: require('../../assets/img/banner01.jpg')}
      ],
      swiperOption: {
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
        autoplay: {
          delay: 5000,
          disableOnInteraction: false
        },
        loop: true
      }
    }
  },
  computed: {
    showBanner () {
      return this.bannerList.length
    }
  }
}
</script>
<style lang="scss" scoped>
.wrapper{
    .banner{
            padding: 0 0.86rem;
            height: 12rem;
            img{
            width: 100%;
            height: 100%;
        }
        /deep/ .swiper-pagination-bullet {
            width: 0.7rem;
            height: 0.054rem;
            border-radius: 0.02rem;
        }
        /deep/ .swiper-pagination-bullet-active{
            background: #333;
            transform: scaleY(1.2);
        }
        /deep/ .swiper-button-next{
            background: #fff;
            color: #888888a3;
            right: 20px;
            width: 1rem;
            height: 1rem;
            line-height: 1rem;
            font-size: 0.66rem;
            border-radius: 50%;
        }
        /deep/ .swiper-button-next:hover {
            background: #292929;
            color: #fff;
        }
        /deep/ .swiper-button-prev{
            background: #fff;
            color: #888888a3;
            left: 20px;
            width: 1rem;
            height: 1rem;
            line-height: 1rem;
            font-size: 0.66rem;
            border-radius: 50%;
        }
        /deep/ .swiper-button-prev:hover {
            background: #292929;
            color: #fff;
        }
    }
}
</style>
