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
          <router-link to="/archive">Archives</router-link>
          <router-link to="/cate">Categories</router-link>
          <router-link to="/about">About</router-link>
        </div>
        <router-link tag="span" class="nav-search iconfont" to="/search">&#xe6cc;</router-link>
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
        .nav-search
          padding 0 10px
          font-weight 700
          cursor pointer
</style>
