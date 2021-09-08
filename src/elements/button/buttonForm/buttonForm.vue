<template lang="pug">
  Button(
    variant="button-form"
    type="submit"
  )
    slot
</template>

<script>
import Button from '@/elements/button/button/button.vue';

export default {
  name: 'ButtonForm',
  components: {
    Button,
  },
};
</script>

<style lang="scss">
  .button-form {
    width: 100%;
    height: 2.5rem;
    border: 2px solid red;
    border-radius: 0.3125rem;
    background-color: red;
    font-size: 1rem;
    font-weight: 700;
    color: white;
    transition: 0.3s;
    text-transform: uppercase;
    &:hover {
      background-color: white;
      color: red;
    }
  }
</style>
