<template>
    <div class="list-item">
      <div class="item-title">{{date}}</div>
      <div class="item-container">
        <archive-item></archive-item>
        <archive-item></archive-item>
        <archive-item></archive-item>
        <archive-item></archive-item>
        <archive-item></archive-item>
      </div>
    </div>
</template>

<script>
import ArchiveItem from 'components/ArchiveItem'

export default {
  name: 'ArchiveListItem',
  data () {
    return {
      date: 'Apr 2018'
    }
  },
  components: {
    ArchiveItem
  }
}
</script>

<style lang="stylus" scoped>
  .list-item
    display flex
    flex-direction column
    font-family "Microsoft Yahei"
    .item-title
      color #5f5f5f
      padding 20px 0
      &::before
        content '#'
        color #eb5055
        padding-right 5px
    .item-container
      width 100%
      display flex
      flex-direction row
      flex-wrap wrap
</style>
