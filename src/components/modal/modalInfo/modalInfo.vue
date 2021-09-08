<template lang="pug">
  Modal(
    name='modal-info'
    :title='title'
  )
    .modal-info__message {{message}}
</template>

<script>
import Modal from '@/components/modal/modal/modal.vue';

export default {
  name: 'ModalAuth',
  components: {
    Modal,
  },
  props: ['title', 'message'],
};
</script>

<style lang="scss">
  .modal-info__message {
    font-size: 1.125rem;
    color: black;
    text-align: center;
  }
</style>
