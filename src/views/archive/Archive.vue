<template>
    <div class="archive">
      <blog-nav></blog-nav>
      <div class="list">
        <archive-list v-for="item in archiveData" :archiveList="item" :key="item.date"></archive-list>
      </div>
      <copyright></copyright>
    </div>
</template>

<script>
import BlogNav from 'components/Nav'
import ArchiveList from './components/ArchiveList'
import Copyright from 'components/Copyright'

import {archive} from '../../api'

export default {
  name: 'Archive',
  data () {
    return {
      archiveData: []
    }
  },
  components: {
    BlogNav,
    ArchiveList,
    Copyright
  },
  methods: {
    getArchive () {
      archive({params: {limit: 1000}}).then(res => {
        this.archiveData = res.data.results
      }).catch(err => {
        console.log(err)
      })
    }
  },
  mounted () {
    this.getArchive()
  }
}
</script>

<style lang="stylus" scoped>
</style>
