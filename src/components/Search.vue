<template>
  <div class="search">
    <div class="search-container">
      <span class="search-box">
        <input type="text" v-model="input" id="input" class="input" name="s" required="true" placeholder="Search..."
               maxlength="30" autocomplete="off" @keyup.enter="search">
        <button style="cursor: pointer" type="submit" class="spsubmit" @click="searchPosts">
          <i class="iconfont icon-search">&#xe6cc;</i>
        </button></span>
      <div class="search-tags" v-if="show">
        <p style="display: inline-block" v-for="item in tagLsit" :key="item.id">
          <router-link :to="{path:'/tags/'+item.id}"># {{item.name}} ({{item.amount}})</router-link>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Search',
  data () {
    return {
      input: ''
    }
  },
  props: ['tags', 'total'],
  computed: {
    tagLsit () {
      return this.tags
    },
    show () {
      return this.total
    }
  },
  methods: {
    searchPosts () {
      if (this.input === '') {
        return
      }
      this.$router.push({name: 'SearchPost', params: {keywords: this.input}})
    }
  }
}
</script>

<style lang="stylus" scoped>
  .search
    background #f7f7f7
    padding 130px 25px 20px
    .search-container
      max-width 700px
      text-align center
      margin 0 auto
      position relative
      .search-box
        .input
          text-indent 18px
          font-size 14px
          line-height 34px
          position absolute
          top 0
          left 0
          width 100%
          height 34px
          color #313131
          border 1px solid rgba(184, 197, 214, .2)
          border-radius 20px
          outline 0
          background-color #fff
          box-shadow 0 1px 4px rgba(0, 0, 0, .04)
          -webkit-appearance none
        .spsubmit
          line-height 22px
          float right
          margin-right 10px
          margin-top 1px
          outline 0
          background-color transparent
          .icon-search
            z-index 1
            display inline-block
            margin 6px 0 0 3px
            transform rotate(4deg)
            &:hover
              color #eb5055
      .search-tags
        margin 0
        padding 80px 0 110px 0
        text-align center
        a
          font-size 13px
          display inline-block
          margin 10px 8px 0 0
          padding 6px 15px
          transition-duration .4s
          letter-spacing 0
          border-radius 15px
          box-shadow 0 1px 4px rgba(0, 0, 0, .04)
          text-decoration none
          color #fff
          background-color #f68e5f
          transition .5s
          &:hover
            transform scale(1.02)
</style>
