<template lang="pug">
  footer.footer
    .footer-wrapper
      a(href="/documents/rules.pdf").footer__rules-link Rules
      a(href="/documents/rules.pdf").footer__rules-link Agreement
      social
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import social from '../social/social.vue';

@Component({
  components: {
    social,
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
    background-color: white;
  }
  .footer-wrapper {
    display: flex;
    align-items: center;
    width: 100%;
    max-width: 109.5rem;
    height: 4.375rem;
    padding-left: 1rem;
    padding-right: 1rem;
    border-top: 2px solid red;
  }
  .footer__rules-link {
    font-size: 0.875rem;
    color: grey;
    text-decoration: none;
    transition: color 0.3s;
    &:nth-child(n + 2) {
      margin-left: 1rem;
    }
    &:hover {
      color: red;
    }
  }
</style>
