<template>
    <div>
      <blog-nav></blog-nav>
      <post-list v-if="total" :posts="posts"></post-list>
      <pagination v-if="total" :page="page" :total="total" :limit="limit"></pagination>
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
      limit: 9
    }
  },
  computed: {
    total () {
      return this.posts.length
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
      articleList().then(res => {
        this.posts = res.data.results
      }).catch(err => {
        console.log(err)
      })
    }
  },
  mounted () {
    this.getPosts()
  }
}
</script>

<style lang="stylus" scoped>

</style>
