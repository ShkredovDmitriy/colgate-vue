<template lang="pug">
  .auth-menu
    button(
      type="button"
      class="button button-auth-menu"
      @click="modalAuthOpen"
    ) Login
    span.auth-menu__border
    button(
      type="button"
      class="button button-auth-menu"
      @click="modalRegOpen"
    ) Registration
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { modalAuthShow, modalRegShow } from '@/components/modal/modal/config';

@Component({
  methods: {
    modalAuthOpen() {
      modalAuthShow(this);
    },
    modalRegOpen() {
      modalRegShow(this);
    },
  },
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
  .button-auth-menu {
    font-size: 1.125rem;
    color: black;
    transition: color 0.3s;
    &:hover {
      color: red;
    }
  }
</style>
