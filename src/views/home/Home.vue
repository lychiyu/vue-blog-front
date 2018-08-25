<template>
    <div>
      <blog-nav></blog-nav>
      <post-list v-if="total" :posts="posts"></post-list>
      <pagination @pageChange="pageChange" v-if="total" :pageIndex="page" :total="total" :pageSize="limit"></pagination>
      <loading v-if="!total"></loading>
      <copyright></copyright>
    </div>
</template>

<script>
import BlogNav from 'components/Nav'
import PostList from './components/PostList'
import Pagination from 'components/Pagination'
import Copyright from 'components/Copyright'
import Loading from 'components/Loading'

import {articleList} from '../../api'

export default {
  name: 'Home',
  data () {
    return {
      posts: [],
      page: 1,
      limit: 9,
      total: 0
    }
  },
  components: {
    BlogNav,
    PostList,
    Pagination,
    Copyright,
    Loading
  },
  methods: {
    getPosts () {
      let params = {is_about: 0}
      if (this.$route.name === 'SearchPost') {
        params.search = this.$route.params.keywords
      }
      params.limit = this.limit
      params.page = this.page
      articleList({params: params}).then(res => {
        this.total = res.data.count
        this.posts = res.data.results
      }).catch(err => {
        console.log(err)
      })
    },
    // 从page组件传递过来的当前page
    pageChange (page) {
      this.page = page
      this.getPosts()
    }
  },
  mounted () {
    this.getPosts()
  }
}
</script>

<style lang="stylus" scoped>

</style>
