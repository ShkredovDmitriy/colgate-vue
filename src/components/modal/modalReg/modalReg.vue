<template lang="pug">
  Modal(
    name='modal-reg'
    title='Registration'
  )
    FormReg
</template>

<script>
import Modal from '@/components/modal/modal/modal.vue';
import FormReg from '@/components/form/formReg/formReg.vue';

export default {
  name: 'ModalReg',
  components: {
    Modal,
    FormReg,
  },
};
</script>

<style lang="scss">
</style>
