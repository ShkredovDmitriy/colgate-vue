<template lang="pug">
  .input-container(
    :class="error"
  )
    input(
      class="input-field"
      v-model.trim="name"
      :placeholder='placeholder'
      @input='onInput'
    )
    //.error(v-if="!$v.login.required&&$v.login.$error") {{messages.required}}
    //.error(v-if="!$v.login.email&&$v.login.$error") {{messages.email}}
</template>

<script>
export default {
  name: 'InputText',
  props: ['error', 'name', 'placeholder', 'onInput'],
};
</script>

<style lang="scss">
  .input-container {
    width: 100%;
    &.error {
      .input-field {
        border: 1px solid red;
      }
    }
    .error {
      margin-top: 0.25rem;
      font-size: 0.875rem;
      color: red;
    }
  }
  .input-field {
    width: 100%;
    height: 2.5rem;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    border: 1px solid grey;
    border-radius: 0.3125rem;
    font-size: 1rem;
    font-weight: 500;
    color: black;
  }
</style>
