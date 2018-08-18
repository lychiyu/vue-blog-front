<template>
  <div class="copyright">
    <div class="copyright-social">
      <div class="copyright-container clearfix">
        <div class="social-list"><a
          class="social github" target="blank" href="https://github.com/lychiyu">GITHUB</a>
        </div>
      </div>
    </div>
    <div class="copyright-meta">
      <div class="copyright-container">
        <p>Powered by <a href="https://vuejs.org/" target="_blank" rel="nofollow">Vue.js</a> &
          <a href="https://www.django-rest-framework.org/" target="_blank" rel="nofollow">Django Rest Framework</a></p>
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
    background #ffffff
    padding-bottom 70px
    margin-top 0
    @media screen and (max-width 675px)
      padding-bottom 2000px
    .copyright-social
      border-bottom 1px solid rgba(184, 197, 214, .2)
      .social-list
        padding 20px
        text-align center
        @media screen and (max-width 675px)
          padding 10px
        a
          font-size 13px
          padding 0 25px
          text-decoration none
          color #5f5f5f
    .copyright-container
      max-width 940px
      margin 0 auto
    .copyright-meta
      padding 70px 0 0
      list-style none
      color #5f5f5f
      @media screen and (max-width 675px)
        padding 20px 0 0
      a
        text-decoration none
        color #5f5f5f
      p
        font-family "Microsoft Yahei"
        font-size 16px
        line-height 30px
        text-align center
</style>
