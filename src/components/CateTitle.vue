<template>
    <div class="title">
      <p>{{name}} : {{title}}</p>
    </div>
</template>

<script>
export default {
  name: 'CateTitle',
  data () {
    return {
      name: 'Category',
      title: 'Tutorials'
    }
  }
}
</script>

<style lang="stylus" scoped>
  .title p
    font-family "Microsoft Yahei"
    padding 20px 0 30px
    &::before
      content "#"
      color #eb5055
      padding-right 10px
</style>
