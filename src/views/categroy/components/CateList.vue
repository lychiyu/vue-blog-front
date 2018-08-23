<template>
    <div class="cate-list">
      <div class="cate-list-container"  v-for="item in postList" :key="item.id">
        <cate-title :type="type" :name="item.name"></cate-title>
        <div class="list-container">
          <cate-item v-for="post in item.posts" class="item" :key="post.id" :postItem="post"></cate-item>
        </div>
      </div>
    </div>
</template>

<script>
import CateItem from 'components/CateItem'
import CateTitle from 'components/CateTitle'
export default {
  name: 'CateList',
  props: ['posts'],
  data () {
    return {
      type: 'Categroy'
    }
  },
  computed: {
    postList () {
      return this.posts
    }
  },
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
