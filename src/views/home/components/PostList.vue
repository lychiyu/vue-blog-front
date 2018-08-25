<template>
    <div class="post-list">
      <div class="post-list-container">
        <post-item class="item" v-for="item in postList" :key="item.id" :postItem="item"></post-item>
      </div>
    </div>
</template>

<script>
import PostItem from 'components/PostItem'
export default {
  name: 'PostList',
  props: ['posts'],
  computed: {
    postList () {
      return this.posts
    }
  },
  components: {
    PostItem
  }
}
</script>

<style lang="stylus" scoped>
  @import "~styles/mixins.styl"
  .post-list
    padding 30px 50px
    @media screen and (max-width: 1100px)
      padding 10px 10px
    @media screen and (max-width: 675px)
      padding 0px 0px
    background #f7f7f7
    .post-list-container
      container()
      display flex
      flex-wrap wrap
      justify-content start
      padding 0 40px
      @media screen and (max-width: 1100px)
        padding 0
      @media screen and (max-width: 675px)
        padding 0
      .item
        width 33.33%
        @media screen and (max-width: 1100px)
          width 50%
        @media screen and (max-width: 675px)
          width 100%
</style>
