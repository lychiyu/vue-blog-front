<template>
  <div class="tag">
    <blog-nav></blog-nav>
    <tag-list></tag-list>
    <copyright></copyright>
  </div>
</template>

<script>
import BlogNav from 'components/Nav'
import TagList from 'views/categroy/components/CateList'
import Copyright from 'components/Copyright'

export default {
  name: 'Tag',
  components: {
    BlogNav,
    TagList,
    Copyright
  }
}
</script>

<style lang="stylus" scoped>

</style>
