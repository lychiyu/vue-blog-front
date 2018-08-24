<template>
    <div>
      <blog-nav></blog-nav>
      <detail v-if='detail' :detail="detail" :cate="detail.cate" :tags="detail.tags"></detail>
      <loading v-if="!detail"></loading>
      <copyright></copyright>
    </div>
</template>

<script>
import BlogNav from 'components/Nav'
import Copyright from 'components/Copyright'
import Loading from 'components/Loading'
import Detail from './components/Detail'
import {articleDetail, articleList} from '../../api'

export default {
  name: 'PostDetail',
  data () {
    return {
      detail: null
    }
  },
  components: {
    BlogNav,
    Copyright,
    Loading,
    Detail
  },
  methods: {
    getPost () {
      if (this.$route.name === 'About') {
        articleList({params: {is_about: 1}}).then(res => {
          let id = res.data.results[0].id
          articleDetail(id).then(res => {
            this.detail = res.data
          })
        }).catch(err => {
          console.log(err)
        })
      } else {
        let id = this.$route.params.id
        articleDetail(id).then(res => {
          this.detail = res.data
        })
      }
    }
  },
  mounted () {
    this.getPost()
  }
}
</script>

<style lang="stylus" scoped>
  .copyright
    background #ffffff !important
</style>
