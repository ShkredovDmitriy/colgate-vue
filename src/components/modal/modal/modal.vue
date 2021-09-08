<template lang="pug">
  .modal-wrapper
    .modal__title {{title}}
    ButtonModalClose(
      @click="$modal.hide(name)"
    )
    .modal-body
      slot
</template>

<script>
import ButtonModalClose from '@/elements/button/buttonModalClose/buttonModalClose.vue';

export default {
  name: 'Modal',
  props: ['title', 'name'],
  components: {
    ButtonModalClose,
  },
};
</script>

<style lang="scss">
  .modal-wrapper {
    position: relative;
    padding: 3rem;
  }
  .modal__title {
    font-size: 1.75rem;
    font-weight: 500;
    color: red;
    text-align: center;
    text-transform: uppercase;
  }
  .modal-body {
    padding-top: 2rem;
  }
</style>
