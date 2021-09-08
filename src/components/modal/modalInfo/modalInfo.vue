<template lang="pug">
  Modal(
    name='modal-info'
    title='xxx'
  )
    .modal-info__message yyy
</template>

<script>
import Modal from '@/components/modal/modal/modal.vue';

export default {
  name: 'ModalAuth',
  components: {
    Modal,
  },
};
</script>

<style lang="scss">
  .modal-info__message {
    font-size: 1.125rem;
    color: black;
    text-align: center;
  }
</style>
