<template lang="pug">
  Modal(
    name='modal-auth'
    title='Login'
  )
    FormAuth
</template>

<script>
import Modal from '@/components/modal/modal/modal.vue';
import FormAuth from '@/components/form/formAuth/formAuth.vue';

export default {
  name: 'ModalAuth',
  components: {
    Modal,
    FormAuth,
  },
};
</script>

<style lang="scss">
</style>
