<template>
    <div class="archive">
      <blog-nav></blog-nav>
      <div class="list">
        <archive-list></archive-list>
        <archive-list></archive-list>
        <archive-list></archive-list>
        <archive-list></archive-list>
      </div>
      <copyright></copyright>
    </div>
</template>

<script>
import BlogNav from 'components/Nav'
import ArchiveList from './components/ArchiveList'
import Copyright from 'components/Copyright'

export default {
  name: 'Archive',
  components: {
    BlogNav,
    ArchiveList,
    Copyright
  }
}
</script>

<style lang="stylus" scoped>
</style>
