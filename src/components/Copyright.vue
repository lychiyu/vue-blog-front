<template>
  <div class="copyright">
    <div class="copyright-container">
      <div class="copyright-social">
          <a class="social github" target="blank" href="https://github.com/lychiyu">GITHUB</a>
      </div>
      <div class="copyright-meta">
        <p>Powered by <a href="https://vuejs.org/" target="_blank" rel="nofollow">Vue.js</a> &
          <a href="https://www.django-rest-framework.org/" target="_blank" rel="nofollow">Django Rest Framework</a>
        </p>
        <p>© 2018 <a href="https://github.com/lychiyu">lychiyu</a></p>
        <p>赣ICP备17014125号1</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Copyright'
}
</script>

<style lang="stylus" scoped>
  .copyright
    background #f7f7f7
    padding-top 60px
    @media screen and (max-width: 1100px)
      padding-top 20px
    .copyright-container
      height 100%
      font-family "Microsoft Yahei"
      background #ffffff
      display flex
      flex-direction column
      text-align center
      color: #5f5f5f
      a
        color #5f5f5f
        @media screen and (max-width: 1100px)
          font-size 14px
        &:hover
          color #eb5055
      .copyright-social
        padding 20px
        border-bottom 1px solid rgba(184,197,214,.2)
        @media screen and (max-width: 1100px)
          padding 10px
          font-size 14px
      .copyright-meta
        padding 50px
        font-size 16px
        @media screen and (max-width: 1100px)
          padding 20px
          font-size 14px
        p
          line-height 30px
</style>
