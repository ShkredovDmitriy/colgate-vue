<template lang="pug">
  footer.footer
    .footer-wrapper
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {
  },
})
export default class footer extends Vue {}
</script>

<style lang="scss">
  .footer {
    position: fixed;
    bottom: 0;
    left: 0;
    display: flex;
    justify-content: center;
    width: 100%;
    z-index: 100;
    background-color: black;
  }

  .footer-wrapper {
    display: flex;
    align-items: center;
    width: 100%;
    max-width: 100rem;
    min-height: 3.375rem;
    padding-left: 1rem;
    padding-right: 1rem;
  }
</style>
