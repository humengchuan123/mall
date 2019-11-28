<template>
  <div class="wrapper">
    <banner></banner>
  </div>
</template>

<script>
import Banner from '../../components/banner/homeBanner'
export default {
  name: 'Index',
  data () {
    return {}
  },
  components: {
    Banner
  }
}
</script>
<style lang="scss" scoped>
.wrapper{
  overflow: hidden;
  width: 100%;
}
</style>
