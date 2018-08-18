<template>
    <div class="search-page">
      <blog-nav></blog-nav>
      <search></search>
      <copyright></copyright>
    </div>
</template>

<script>
import BlogNav from 'components/Nav'
import Search from 'components/Search'
import Copyright from 'components/Copyright'

export default {
  name: 'SearchPage',
  components: {
    BlogNav,
    Search,
    Copyright
  }
}
</script>

<style lang="stylus" scoped>

</style>
