<template>
    <div class="post-item">
      <div class="item-container">
        <div class="item-thumb" :style="{backgroundImage:'url(' + post_img + ')'}"></div>
        <a href="">
          <div class="item-summary">
            <p>文章摘要</p>
          </div>
        </a>
        <div class="item-slant reverse-slant"></div>
        <div class="item-slant"></div>
        <div class="item-label">
          <div class="item-title">
            <router-link to="/">TensorFlow 的核心概念</router-link>
          </div>
          <div class="item-cate">
            <router-link to="/">Vue</router-link>
            <div class="icon-wrapper">
              <img class="cate-icon" :src=cat_icon alt="">
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      'post_img': 'https://img.lychiyu.com/post-img.jpg',
      'cat_icon': 'https://img.lychiyu.com/cat-icon.png'
    }
  },
  name: 'PostItem'
}
</script>

<style lang="stylus" scoped>
  @import "~styles/mixins.styl"
  .post-item
    box-sizing border-box
    padding 15px
    .item-container
        position relative
        border-radius 4px
        overflow hidden
        background #ffffff
        box-shadow 0 2px 2px #d3d3d3
        &:hover
          .item-thumb
            transform scale(1.2)
            &::after
              content ""
              position absolute
              display block
              height 100%
              width 100%
              background-color rgba(0,0,0,.5)!important
          .item-summary
            top 0
            & p
              opacity 1
        .item-thumb
          height 260px
          background-position 50% 50%
          background-size: cover;
          background-image url("https://o243f9mnq.qnssl.com/2018/04/390293497.jpg")
          transition transform .5s ease,filter .5s ease
          &::after
            content ""
            position absolute
            display block
            height 100%
            width 100%
            transition background-color .6s
        .item-slant
          position absolute
          z-index 0
          right 0
          bottom 50px
          left 0
          width 110%
          min-height 100px
          transform rotate(7deg) translate(-10px,0)
          background-color #fff
        .reverse-slant
          transform: rotate(-10deg) translate(10px,-10px);
          opacity: .7;
          background-color: rgba(0,0,0,.5)!important;
          box-shadow: none;
        .item-summary
          box-sizing border-box
          position absolute
          top 50px
          overflow hidden
          width 100%
          height 100%
          padding 40px 28px
          transition top .5s
          p
            font-family "Microsoft Yahei"
            font-size 12px
            margin 0
            padding 0
            word-break break-all
            opacity 0
            color #fff
            transition opacity .5s
        .item-label
          box-sizing border-box
          background #ffffff
          position relative
          height 130px
          padding 10px 20px 20px
          & a
            color #000
            font-family "Microsoft Yahei"
          .item-title a
              font-size 16px
              text-align center
              line-height 24px
          .item-cate
            position absolute
            right 0
            bottom 0
            padding 0 15px 15px
            display flex
            justify-content flex-end
            &:hover
              .icon-wrapper
                transform rotate(360deg) translate(0px,0)
            a
              line-height 43px
              margin-right 10px
              color #5f5f5f
            .icon-wrapper
              width 42px
              height 42px
              padding 1px
              border 1px solid #eaeaea
              border-radius 50%
              transition transform 1s
              img
                width 40px
                height 40px
</style>
