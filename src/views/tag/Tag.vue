<template>
  <div class="tag">
    <blog-nav></blog-nav>
    <tag-list v-if="posts.length" :posts="posts"></tag-list>
    <loading v-if="!posts.length"></loading>
    <copyright></copyright>
  </div>
</template>

<script>
import {articleList} from '../../api'
import BlogNav from 'components/Nav'
import TagList from 'views/tag/components/TagList'
import Copyright from 'components/Copyright'
import Loading from 'components/Loading'

export default {
  name: 'Tag',
  data () {
    return {
      posts: []
    }
  },
  components: {
    BlogNav,
    TagList,
    Copyright,
    Loading
  },
  methods: {
    getPosts () {
      let id = this.$route.params.id
      let params = null
      if (id !== undefined) {
        params = {params: {group: 'tags', id: id}}
      } else {
        params = {params: {group: 'tags'}}
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
