<template lang="pug">
  header.header
    .header-wrapper
      logoMain
      navMain
      authMenu
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import logoMain from '../logo/logo-main/logo-main.vue';
import navMain from '../nav/nav-header/nav-header.vue';
import authMenu from '../auth/auth-menu/auth-menu.vue';

@Component({
  components: {
    logoMain,
    navMain,
    authMenu,
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
    background-color: white;
  }
  .header-wrapper {
    display: flex;
    width: 100%;
    height: 5rem;
    max-width: 109.5rem;
    padding-left: 1rem;
    padding-right: 1rem;
    border-bottom: 2px solid red;
  }
</style>
