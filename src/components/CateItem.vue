<template>
    <div class="item">
      <div class="item-container">
        <div class="item-title">
          <router-link :to="{path:'/post/'+post.id}">{{post.title}}</router-link>
        </div>
        <div class="item-other">
          <p class="item-date">{{post.create_time | formatDate}}</p>
          <p class="item-pic"><img style="border-radius: 50%" :src=post.small_img alt=""></p>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'CateItem',
  props: ['postItem'],
  computed: {
    post () {
      return this.postItem
    }
  }
}
</script>

<style lang="stylus" scoped>
  .item
    margin-bottom 30px
    width 50%
    box-sizing border-box
    height 130px
    padding 15px 20px 15px 0
    .item-container
      border-radius 3px
      background #ffffff
      font-family "Microsoft Yahei"
      box-shadow 1px 1px 2px #dcdcdc
      transition transform box-shadow .5s ease,filter .5s ease
      &:hover
        transform scale(1.02)
        box-shadow 2px 2px 3px #dcdcdc
        .item-pic
          transform rotate(360deg) translate(0px,0)
      .item-title
        padding 20px
        line-height 20px
        a
          color #333333
          &:hover
            color #eb5055
      .item-other
        display flex
        justify-content space-between
        padding 10px 20px 10px
        .item-date
          font-size 10px
          line-height 40px
          color #5f5f5f
        .item-pic
          width 42px
          height 42px
          padding 1px
          border 1px solid #eaeaea
          border-radius 50%
          transition transform 1s
          img
            height 40px
            width 40px
</style>
