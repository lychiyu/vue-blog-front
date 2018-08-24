<template>
    <div class="categroy">
      <blog-nav></blog-nav>
      <cate-list v-if="posts.length" :posts="posts"></cate-list>
      <loading v-if="!posts.length"></loading>
      <copyright></copyright>
    </div>
</template>

<script>
import BlogNav from 'components/Nav'
import CateList from './components/CateList'
import Copyright from 'components/Copyright'
import Loading from 'components/Loading'

import {articleList} from '../../api'

export default {
  name: 'Categroy',
  data () {
    return {
      posts: []
    }
  },
  components: {
    BlogNav,
    CateList,
    Copyright,
    Loading
  },
  methods: {
    getPosts () {
      let id = this.$route.params.id
      let params = null
      if (id !== undefined) {
        params = {params: {group: 'cate', id: id}}
      } else {
        params = {params: {group: 'cate'}}
      }
      articleList(params).then(res => {
        this.posts = res.data
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
