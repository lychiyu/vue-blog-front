<template>
    <div class="title">
      <p>{{showName}} : {{title}}</p>
    </div>
</template>

<script>
export default {
  name: 'CateTitle',
  props: ['name', 'type'],
  computed: {
    title () {
      return this.name
    },
    showName () {
      return this.type
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
