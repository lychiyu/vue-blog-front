<template>
    <div class="categroy">
      <blog-nav></blog-nav>
      <cate-list></cate-list>
      <copyright></copyright>
    </div>
</template>

<script>
import BlogNav from 'components/Nav'
import CateList from './components/CateList'
import Copyright from 'components/Copyright'

export default {
  name: 'Categroy',
  components: {
    BlogNav,
    CateList,
    Copyright
  }
}
</script>

<style lang="stylus" scoped>

</style>
