<template>
  <div class="tag-list">
    <div class="tag-list-container">
      <tag-title></tag-title>
      <div class="list-container">
        <tag-item class="item"></tag-item>
        <tag-item class="item"></tag-item>
        <tag-item class="item"></tag-item>
        <tag-item class="item"></tag-item>
        <tag-item class="item"></tag-item>
      </div>
    </div>
  </div>
</template>

<script>
import TagItem from 'components/CateItem'
import TagTitle from 'components/CateTitle'

export default {
  name: 'TagList',
  components: {
    TagItem,
    TagTitle
  }
}
</script>

<style lang="stylus" scoped>
  @import "~styles/mixins.styl"
  .tag-list
    padding 30px 50px
    background #f7f7f7
    .tag-list-container
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
