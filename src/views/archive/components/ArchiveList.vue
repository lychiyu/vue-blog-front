<template>
    <div class="archive-list">
      <div class="archive-list-container">
        <archive-item></archive-item>
      </div>
    </div>
</template>

<script>
import ArchiveItem from './ArchiveListItem'

export default {
  name: 'ArchiveList',
  components: {
    ArchiveItem
  }
}
</script>

<style lang="stylus" scoped>
  @import "~styles/mixins.styl"
  .archive-list
    padding 30px 50px 0
    background #f7f7f7
    .archive-list-container
      container()
      padding 0 100px
</style>
