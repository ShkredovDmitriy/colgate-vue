<template lang="pug">
  ul.social
    li.losial__item
      a(href="https://google.com" target="_blank").losial__link
        img(src='@/assets/icon-instagram.svg')
    li.losial__item
      a(href="https://google.com" target="_blank").losial__link
        img(src='@/assets/icon-youtube.svg')
    li.losial__item
      a(href="https://google.com" target="_blank").losial__link
        img(src='@/assets/icon-vk.svg')
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {
  },
})
export default class social extends Vue {}
</script>

<style lang="scss">
  .social {
    display: flex;
    margin-left: auto;
  }
  .losial__item {
    &:nth-child(n + 2) {
      margin-left: 1rem;
    }
  }
  .losial__link {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 1.875rem;
    height: 1.875rem;
    background-color: red;
    border-radius: 50%;
    transition: background-color 0.3s;
    &:hover {
      background-color: darken(red, 20%);
    }
    img {
      display: block;
      width: 1rem;
      height: 1rem;
    }
  }
</style>
