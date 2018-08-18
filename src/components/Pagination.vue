<template>
  <ul class="pagination">
    <!-- prev -->
    <li>←</li>
    <!-- first -->
    <li>first</li>
    <li>...</li>
    <li>{{page}}</li>
    <li>...</li>
    <!-- last -->
    <li>last</li>
    <!-- next -->
    <li>→</li>
  </ul>
</template>

<script>
export default {
  name: 'Pagination',
  data () {
    return {
      page: 1
    }
  }
}
</script>

<style lang="stylus" scoped>
  .pagination
    background #f7f7f7
    display flex
    font-size 0
    list-style none
    user-select none
    justify-content center
    padding 20px 0
    li
      font-size 14px
      padding 6px 12px
      line-height 1.42857143
      text-decoration none
      background-color transparent
      margin-left -1px
      cursor pointer
      &:first-child
        margin-left 0
      &:hover
        background-color transparent
        color #eb5055
      &.paging-item--disabled,
      &.paging-item--more
        background-color transparent
        color #505050
      //禁用
      &.paging-item--disabled
        cursor not-allowed
        opacity .75
      &.paging-item--more,
      &.paging-item--current
        cursor default
      //选中
      &.paging-item--current
        background-color transparent
        color #eb5055
        position relative
        z-index 1
        border-color transparent
</style>
