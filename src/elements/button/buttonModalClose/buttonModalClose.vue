<template lang="pug">
  Button(
    variant="button-modal-close"
    type="button"
    :customEvent='customEvent'
  )
    svg
      use(href="#icon-modal-close")
</template>

<script>
import Button from '@/elements/button/button/button.vue';

export default {
  name: 'ButtonModalClose',
  components: {
    Button,
  },
  props: ['customEvent'],
};
</script>

<style lang="scss">
  .button-modal-close {
    position: absolute;
    top: 1.25rem;
    right: 1.25rem;
    width: 1.875rem;
    height: 1.875rem;
    transition: 0.3s;
    svg {
      display: block;
      width: 100%;
      height: 100%;
    }
    &:hover {
      opacity: 0.7;
      transform: rotateZ(90deg);
    }
  }
</style>
