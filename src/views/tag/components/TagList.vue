<template>
  <div class="tag-list">
    <div class="tag-list-container" v-for="item in postList" :key="item.id">
      <tag-title :type="type" :name="item.name"></tag-title>
      <div class="list-container">
        <tag-item v-for="post in item.posts" class="item" :key="post.id" :postItem="post"></tag-item>
      </div>
    </div>
  </div>
</template>

<script>
import TagItem from 'components/CateItem'
import TagTitle from 'components/CateTitle'

export default {
  name: 'TagList',
  props: ['posts'],
  data () {
    return {
      type: 'Tag'
    }
  },
  computed: {
    postList () {
      return this.posts
    }
  },
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
    @media screen and (max-width: 675px)
      padding 10px 5px
    .tag-list-container
      container()
      display flex
      flex-direction column
      padding 0 100px
      @media screen and (max-width: 675px)
        padding 0
      .list-container
        width 100%
        display flex
        flex-wrap wrap
        justify-content space-between
        flex-direction row
</style>
