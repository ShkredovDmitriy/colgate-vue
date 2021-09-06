<template lang="pug">
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
export default class navMain extends Vue {}
</script>

<style lang="scss">
  .nav-header{
    margin-left: 3.125rem;
    height: 100%;
  }

  .nav-header__list {
    display: flex;
    align-items: center;
    height: 100%;
    padding: 0;
  }

  .nav-header__item {
    &:nth-child(n + 2) {
      margin-left: 1.875rem;
    }
  }

  .nav-header__link {
    font-size: 1.125rem;
    color: black;
    text-decoration: none;
    transition: color 0.3s;

    &:hover {
      color: red;
    }
  }
</style>
