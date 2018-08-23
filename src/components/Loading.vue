<template>
    <div class="loading" style="padding: 30vh 0; background: #f7f7f7; margin: 0 auto">
      <spring-spinner
        style="margin: 0 auto"
        :animation-duration="3000"
        :size="60"
        color="#ff1d5e"
      />
    </div>
</template>

<script>
import { SpringSpinner } from 'epic-spinners'

export default {
  name: 'Loading',
  components: {
    SpringSpinner
  }
}
</script>

<style lang="stylus" scoped>
</style>
