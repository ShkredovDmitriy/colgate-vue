<template lang="pug">
  header.header
    .header-wrapper
      nav.nav-header
        ul.nav-header__list
          li.nav-header__item
            a(href="#").nav-header__link Main
          li.nav-header__item
            a(href="#").nav-header__link Products
          li.nav-header__item
            a(href="#").nav-header__link About
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {
  },
})
export default class header extends Vue {}
</script>

<style lang="scss">
  .header {
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    width: 100%;
    z-index: 100;
    background-color: black;
  }

  .header-wrapper {
    display: flex;
    align-items: center;
    width: 100%;
    max-width: 100rem;
    padding-left: 1rem;
    padding-right: 1rem;
  }

  .nav-header{
    margin-left: auto;
  }

  .nav-header__list {
    display: flex;
    align-items: center;
    list-style-type: none;
  }

  .nav-header__item {
    &:nth-child(n + 2) {
      margin-left: 1.875rem;
    }
  }

  .nav-header__link {
    font-size: 1.125rem;
    color: white;
    text-decoration: none;
  }
</style>
