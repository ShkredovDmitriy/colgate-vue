<template lang="pug">
  button.button(
    :type="type"
    :class="variant"
  )
    slot
</template>

<script>
export default {
  name: 'Button',
  props: ['variant', 'type'],
};
</script>

<style lang="scss">
  .button {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;
    border: 0;
    background-color: transparent;
    cursor: pointer;
  }
</style>
