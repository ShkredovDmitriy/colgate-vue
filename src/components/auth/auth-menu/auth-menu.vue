<template lang="pug">
  .auth-menu
    button(type="button" v-on:click="modalAuthOpen").button.button-auth-menu Login
    span.auth-menu__border
    button(type="button").button.button-auth-menu Registration
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {
  },
  props: [
    'modalAuthOpen',
  ],
})
export default class authMenu extends Vue {}
</script>

<style lang="scss">
  .auth-menu {
    display: flex;
    align-items: center;
    margin-left: auto;
  }
  .auth-menu__border {
    display: block;
    margin-left: 0.5rem;
    margin-right: 0.5rem;
    width: 0.125rem;
    height: 0.875rem;
    background-color: black;
  }
  .button {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;
    border: 0;
    background-color: transparent;
    cursor: pointer;
  }
  .button-auth-menu {
    font-size: 1.125rem;
    color: black;
    transition: color 0.3s;
    &:hover {
      color: red;
    }
  }
</style>
