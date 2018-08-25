<template>
    <div class="detail">
      <article class="container">
        <div class="post-header">
          <h1 class="post-title"> {{detail.title}} </h1>
          <div class="pub-desc" v-if="!detail.is_about">
            Published on {{detail.create_time | formatDate}} in
            <router-link :to="{path:'/cate/'+cate.id}"> {{cate.name}}</router-link>
          </div>
          <p class="post-tags">
            <router-link v-if="!detail.is_about" :class="bg[tag.id % 3]" v-for="tag in tags" :key="tag.id" :to="{path:'/tags/'+tag.id}">{{tag.name}}</router-link>
          </p>
        </div>
        <div class="post-contents" v-html="detail.html_content" v-highlight>
        </div>
        <p v-if="!detail.is_about" class="post-copyright"> 本文由 <a href="">lychiyu</a> 创作，采用 <a
          href="https://creativecommons.org/licenses/by/4.0/" target="_blank" rel="external nofollow">知识共享署名4.0</a>
          国际许可协议进行许可<br>本站文章除注明转载/出处外，均为本站原创或翻译，转载前请务必署名<br>最后编辑时间为: {{detail.update_time | formatDate('other')}} </p>
        <vue-comment class="comments" :options="options" v-if="options"></vue-comment>
      </article>
    </div>
</template>

<script>
export default {
  name: 'Detail',
  props: ['detail', 'cate', 'tags'],
  data () {
    return {
      options: {
        id: this.detail.id, // 评论页唯一标识符
        owner: 'lychiyu', // github用户名
        repo: 'blog_comments', // 用于存放评论的仓库
        oauth: {
          client_id: '',
          client_secret: ''
        }
      }
    }
  },
  computed: {
    bg () {
      const bgList = ['bg1', 'bg2', 'bg3']
      return bgList
    }
  }
}
</script>

<style lang="stylus">
  .detail
    min-height 40vh
    .container
      max-width 700px
      padding 100px 25px 20px
      position relative
      margin 0 auto
      animation fade-in
      animation-duration .5s
      font-family "Microsoft Yahei"
      .post-header
        padding 5px 0 15px
        border-bottom 1px solid #e0e0e0
        .post-title
          padding-bottom 16px
          font-size 24px
          color #222padding-bottom font-weight 400px
        .pub-desc
          font-size 12px
          padding-bottom 10px
          a
            color #5f5f5f
            &:hover
              color #eb5055
        .post-tags
          a
            font-size 13px
            text-align center
            font-weight 600
            display inline-block
            margin 4px 8px 0 0
            padding 4px 15px
            transition-duration .4s
            letter-spacing 0
            color #fff
            border 1px solid #ff9800
            border-radius 15px
            background #ff9800
            text-decoration: none
            &::before
              content '#'
              padding-right 2px
            &:hover
              border 1px solid #f7f7f7
              background #f7f7f7
              color #5f5f5f
          .bg1
            border 1px solid #6fa3ef
            background #6fa3ef
          .bg2
            border 1px solid #ff9800
            background #ff9800
          .bg3
            border 1px solid #46c47c
            background #46c47c
      .post-copyright
        overflow hidden
        margin 25px -20px 0
        padding 25px 20px 20px
        white-space nowrap
        text-overflow ellipsis
        border-top 1px solid #e0e0e0
        vertical-align baseline
        text-align left
        line-height 24px
        a
          color #313131;
          border-bottom 1px solid #ccc;
          text-decoration none
      .post-contents
        .list
          display none
          position fixed
          top 180px
          right 160px
          h3
            display none
          ul
            li a
              color #ffffff
            ul
              padding-left  12px
              border-left 1px solid #ddd
              ul
                border-left none
                padding-left 10px
                li a
                  color #5f5f5f
              li
                padding 5px 0
                a
                  color #31313
        h1,h2,h3,h4,h5,h6
          position relative
          font-weight 500
          margin 20px 0
          font-size 1.2em
          color #555
        h1::before,h2::before,h3::before,h4::before,h5::before,h6::before
          font-weight 600
          position absolute
          top 0
          left -18px
          content '#'
          color #eb5055
        p
          font-family -apple-system,SF UI Text,Arial,PingFang SC,Hiragino Sans GB,Microsoft YaHei,WenQuanYi Micro Hei,sans-serif
          font-size 14px!important
          word-wrap break-word
          word-break break-all
          color #313131
          line-height 1.8
          margin 20px 0
        ul li
          list-style disc
        ol li
          list-style decimal
        li
          font-size 14px!important
          color #313131
          line-height 26px
        a
          text-decoration none
          color #313131
          border-bottom 1px solid #ccc
          &hover
            color #eb5055
            border-bottom 1px solid #eb5055
        ol, ul
          padding-left 10px
        table
          max-width: 700px
          overflow-x auto
          margin-bottom 20px
          border-left 1px solid #ddd
          border-radius 4px
          background-color transparent
          border-spacing 0
          color #313131
          tr
            border-top 1px solid #ddd
          th
            padding 10px
            font-weight 600
            border 1px solid #ddd
            border-left none
            text-align center!important
          td
            padding 10px
            border 1px solid #ddd
            border-top none
            border-left none
            text-align center!important
        blockquote
          padding 0 10px 0 20px
          border-left 4px solid #eb5055
          margin 20px 0
          dl, ol, pre, table, ul
            margin: 20px 0
            vertical-align: baseline
        img
          max-width 700px
          width 300px
          height 300px
          text-align center
        .hljs
          display block
          code, pre
            font-family: Menlo,Bitstream Vera Sans Mono,DejaVu Sans Mono,Monaco,Consolas,monospace;
            font-size 13px
            background #f7f7f7
            line-height 20px
            margin 0
            padding 1em
            color #313131
            border-radius 3px
      .comments
        .gitment-comment-main, gitment-editor-main
          border-radius 10px
        .gitment-editor-avatar-img,.gitment-comment-avatar-img,.gitment-github-icon
          border-radius 50%
        .gitment-editor-submit
          color #ffffff
          background #eb5055
        .gitment-footer-container
          display none
        .gitment-comment-body
          color #333333
        background transparent
</style>
