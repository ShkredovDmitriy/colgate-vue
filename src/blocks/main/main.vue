<template lang="pug">
  section.section-main
    .section-main__wrapper
      .section-main__title Lorem ipsum dolor sit amet.

</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {
  },
})
export default class sectionMain extends Vue {}
</script>

<style lang="scss">
  .section-main {
    display: flex;
    justify-content: center;
    width: 100%;
    height: 100vh;
    padding-top: 5rem;
    padding-bottom: 4.375rem;
  }
  .section-main__wrapper {
    width: 100%;
    max-width: 109.5rem;
    padding-top: 5.9375rem;
    background-image: url("../../assets/bg-main-desktop.jpg");
    background-size: 120% auto;
    background-position: center 0;
    background-repeat: no-repeat;
  }
  .section-main__title {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin-left: auto;
    width: 43.25rem;
    height: 5rem;
    padding-right: 1.5rem;
    border-top-left-radius: 2.5rem;
    border-bottom-left-radius: 2.5rem;
    background-color: white;
    font-size: 3.125rem;
    font-weight: 800;
    color: red;
  }
  @media (min-aspect-ratio: 1376/820) {
    .section-main__wrapper {
      background-size: 110% auto;
    }
  }
  @media (min-aspect-ratio: 1376/750) {
    .section-main__wrapper {
      background-size: 100% auto;
    }
  }
  @media (min-aspect-ratio: 1376/690) {
    .section-main__wrapper {
      background-position: 0 -3rem;
    }
  }
  @media (min-aspect-ratio: 1376/650) {
    .section-main__wrapper {
      background-position: 0 -6rem;
    }
  }
</style>
