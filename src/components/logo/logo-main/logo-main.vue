<template lang="pug">
 a(href="/").logo.logo-main
  img(src="@/assets/logo-main-header.svg")
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {
  },
})
export default class logoMain extends Vue {}
</script>

<style lang="scss">
  .logo {
    display: block;

    svg, img {
      display: block;
      width: 100%;
      height: 100%;
    }
  }

  .logo-main {
    width: 16.25rem;
    height: 12.6875rem;
  }
</style>
