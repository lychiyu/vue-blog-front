<template>
    <div class="archive-list">
      <div class="archive-list-container">
        <archive-item :archiveList="archiveList"></archive-item>
      </div>
    </div>
</template>

<script>
import ArchiveItem from './ArchiveListItem'

export default {
  name: 'ArchiveList',
  props: ['archiveList'],
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
    @media screen and (max-width: 675px)
      padding 10px 5px
    .archive-list-container
      container()
      padding 0 100px
      @media screen and (max-width: 675px)
        padding 0 10px
</style>
