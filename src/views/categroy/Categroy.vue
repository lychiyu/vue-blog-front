<template>
    <div class="categroy">
      <blog-nav></blog-nav>
      <cate-list :posts="posts"></cate-list>
      <copyright></copyright>
    </div>
</template>

<script>
import BlogNav from 'components/Nav'
import CateList from './components/CateList'
import Copyright from 'components/Copyright'

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
    Copyright
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
