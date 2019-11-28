<template>
  <div>
      <home-header></home-header>
      <home-index></home-index>
      <home-footer></home-footer>
  </div>
</template>

<script>
import homeHeader from '../components/header/header'
import homeFooter from '../components/footer/footer'
import homeIndex from '../pages/index/index'
export default {
  name: 'HomePage',
  data () {
    return {
    }
  },
  components: {
    homeHeader: homeHeader,
    homeIndex: homeIndex,
    homeFooter: homeFooter
  }
}
</script>
<style lang="scss" scoped>
</style>
