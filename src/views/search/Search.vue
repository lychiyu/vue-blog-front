<template>
    <div class="search-page">
      <blog-nav></blog-nav>
      <search :tags="tags" :total="total"></search>
      <copyright></copyright>
    </div>
</template>

<script>
import {tagList} from '../../api'

import BlogNav from 'components/Nav'
import Search from 'components/Search'
import Copyright from 'components/Copyright'

export default {
  name: 'SearchPage',
  data () {
    return {
      tags: []
    }
  },
  computed: {
    total () {
      return this.tags.length
    }
  },
  components: {
    BlogNav,
    Search,
    Copyright
  },
  methods: {
    getTags () {
      tagList().then(res => {
        this.tags = res.data.results
      })
    }
  },
  mounted () {
    this.getTags()
  }
}
</script>

<style lang="stylus" scoped>

</style>
