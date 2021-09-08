<template lang="pug">
  button.button(
    :type="type"
    :class="variant"
    @click="clickHandler"
  )
    slot
</template>

<script>
export default {
  name: 'Button',
  props: ['variant', 'type', 'customEvent'],
  methods: {
    clickHandler() {
      console.log(`button ${this.variant} click`);
      if (this.customEvent) this.customEvent();
    },
  },
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
