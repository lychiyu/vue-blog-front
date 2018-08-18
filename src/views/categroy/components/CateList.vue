<template>
    <div class="cate-list">
      <div class="cate-list-container">
        <cate-title></cate-title>
        <div class="list-container">
          <cate-item class="item"></cate-item>
          <cate-item class="item"></cate-item>
          <cate-item class="item"></cate-item>
          <cate-item class="item"></cate-item>
          <cate-item class="item"></cate-item>
        </div>
      </div>
    </div>
</template>

<script>
import CateItem from 'components/CateItem'
import CateTitle from 'components/CateTitle'
export default {
  name: 'CateList',
  components: {
    CateTitle,
    CateItem
  }
}
</script>

<style lang="stylus" scoped>
  @import "~styles/mixins.styl"
  .cate-list
    padding 30px 50px
    background #f7f7f7
    .cate-list-container
      container()
      display flex
      flex-direction column
      padding 0 100px
      .list-container
        width 100%
        display flex
        flex-wrap wrap
        justify-content space-between
        flex-direction row
</style>
