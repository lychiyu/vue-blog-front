<template>
    <div class="archive">
      <blog-nav></blog-nav>
      <div class="list" v-if="archiveData.length">
        <archive-list v-for="item in archiveData" :archiveList="item" :key="item.date"></archive-list>
      </div>
      <loading v-if="!archiveData.length"></loading>
      <copyright></copyright>
    </div>
</template>

<script>
import BlogNav from 'components/Nav'
import ArchiveList from './components/ArchiveList'
import Copyright from 'components/Copyright'
import Loading from 'components/Loading'

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
    Copyright,
    Loading
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
