<template>
    <div>
      <blog-nav></blog-nav>
      <post-list></post-list>
      <pagination></pagination>
      <copyright></copyright>
    </div>
</template>

<script>
import BlogNav from 'components/Nav'
import PostList from './components/PostList'
import Pagination from 'components/Pagination'
import Copyright from 'components/Copyright'

export default {
  name: 'Home',
  components: {
    BlogNav,
    PostList,
    Pagination,
    Copyright
  }
}
</script>

<style lang="stylus" scoped>

</style>
