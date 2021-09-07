<template lang="pug">
  .modal-wrapper
    .modal__title Login
    .modal-body
      FormAuth
</template>

<script>
import FormAuth from '@/components/form/formAuth/formAuth.vue';

export default {
  name: 'ModalAuth',
  components: {
    FormAuth,
  },
};
</script>

<style lang="scss">
  .modal-wrapper {
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
