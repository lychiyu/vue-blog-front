<template>
  <div class="nav">
    <div class="nav-container">
      <div class="logo">
        <a href="">
          <img :src=logo alt="lychiyu">
        </a>
      </div>
      <div class="nav-contents">
        <div class="links">
          <router-link active-class="active" to="/archive">Archives</router-link>
          <router-link active-class="active" to="/cate">Categories</router-link>
          <router-link active-class="active" to="/about">About</router-link>
        </div>
        <div class="links m-links" v-show="show">
          <router-link active-class="active" to="/archive">Archives</router-link>
          <router-link active-class="active" to="/cate">Categories</router-link>
          <router-link active-class="active" to="/about">About</router-link>
        </div>
        <router-link tag="span" class="nav-search iconfont" to="/search">&#xe6cc;</router-link>
        <div class="navbar-mobile-menu" @click="show=!show">
          <span class="icon-menu iconfont">&#xe7e9;</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Nav',
  data () {
    return {
      logo: 'https://img.lychiyu.com/logo.png',
      show: false
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import "~styles/mixins.styl"
  .nav
    padding 0 20px
    height 68px
    line-height 68px
    margin-bottom 2px
    box-shadow 0 2px 2px #d3d3d3
    @media screen and (max-width: 675px)
      height 60px
      line-height 60px
      .links
        display none
      .m-links
        position absolute
        display flex
        left 0
        top: 61px
        width 100%
        z-index 1000
        background #fff
        justify-content space-around
        overflow-x auto
    .nav-container
      container()
      display flex
      justify-content space-between
      .logo
        img
          vertical-align center
          width: auto;
          height: 28px;
          outline: 0;
      .nav-contents
        display flex
        .links
          a
            margin 0 20px
            text-decoration none
            color #313131
            &:hover
              color #eb5055
          .active
            color #eb5055
        .nav-search
          padding 0 10px
          font-weight 700
          cursor pointer
      .icon-menu
        display none
        font-size 22px
        @media screen and (max-width: 675px)
          display inline-block
</style>
