<template lang="pug">
  section.section-main
    .section-main__wrapper
      .section-main__title Lorem ipsum dolor sit amet
      .section-main__product-item
        picture
          source(src-set="@/assets/img-product-item-desktop.png" media="min-width: 1200px")
          img(src="@/assets/img-product-item-desktop.png")
      .section-main__super-prize
        picture
          source(src-set="@/assets/img-super-prize-desktop.png" media="min-width: 1200px")
          img(src="@/assets/img-super-prize-desktop.png")
        span Super Prize

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
    min-height: 34.125rem;
    padding-top: 5rem;
    padding-bottom: 4.375rem;
  }
  .section-main__wrapper {
    position: relative;
    width: 100%;
    max-width: 109.5rem;
    padding-top: 5.9375rem;
    background-image: url("../../assets/bg-main-desktop.jpg");
    background-size: 120% auto;
    background-position: 0 0;
    background-repeat: no-repeat;
  }
  .section-main__title {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin-left: auto;
    width: 52rem;
    height: 5rem;
    padding-right: 1.5rem;
    border-top-left-radius: 2.5rem;
    border-bottom-left-radius: 2.5rem;
    background-color: white;
    font-size: 3.125rem;
    font-weight: 800;
    color: red;
    text-transform: uppercase;
  }
  .section-main__product-item {
    position: absolute;
    bottom: 1.25rem;
    width: 13.5rem;
    left: 2.1875rem;
    img {
      display: block;
      width: 100%;
      height: auto;
    }
  }
  .section-main__super-prize {
    position: absolute;
    bottom: 1.25rem;
    right: 1.875rem;
    width: 23rem;
    img {
      display: block;
      width: 100%;
      height: auto;
    }
    span {
      display: block;
      font-size: 3.125rem;
      color: red;
      font-weight: 700;
      text-align: right;
      text-transform: uppercase;
    }
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
    .section-main__product-item {
      width: 11.5rem;
    }
  }
  @media (min-aspect-ratio: 1376/650) {
    .section-main__wrapper {
      background-position: 0 -6rem;
    }
  }
</style>
