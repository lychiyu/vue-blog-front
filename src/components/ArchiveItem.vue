<template>
    <div class="item">
      <div class="item-container">
        <div class="title">
          <router-link :to="{path:'/post/'+post.id}">{{post.title}}</router-link>
        </div>
        <div class="desc">{{post.create_time | formatDate}}</div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'ArchiveItem',
  props: ['post'],
  data () {
    return {
      title: '',
      date: ''
    }
  }
}
</script>

<style lang="stylus" scoped>
  .item
    font-family "Microsoft Yahei"
    padding 20px 20px 20px 0
    box-sizing border-box
    width 33.33%
    @media screen and (max-width: 675px)
      width 100%
      padding 5px 10px
    .item-container
      border-radius 3px
      height 100px
      background #ffffff
      transition .5s
      box-shadow 1px 1px 2px #d3d3d3
      &:hover
        transform scale(1.03)
      .title
        padding 20px
        a
          color #313131
      .desc
        padding 15px 20px
        font-size 10px
        color #5f5f5f
</style>
