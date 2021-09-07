<template lang="pug">
  .modal-wrapper
    .modal__title {{title}}
    button(
      type="button"
      class="button button-modal-close"
      @click="$modal.hide(name)"
    )
    .modal-body
      slot
</template>

<script>
export default {
  name: 'Modal',
  props: ['title', 'name'],
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
  .button-modal-close {
    position: absolute;
    top: 1.25rem;
    right: 1.25rem;
    width: 1.25rem;
    height: 1.25rem;
    background-color: red;
    svg {
      display: block;
      width: 1rem;
      height: 1rem;
    }
  }
</style>
