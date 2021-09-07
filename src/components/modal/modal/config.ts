import ModalAuth from '@/components/modal/modalAuth/modalAuth.vue';
import ModalReg from '@/components/modal/modalReg/modalReg.vue';

const modalAuthShow = (cont: any) => {
  cont.$modal.show(
    ModalAuth,
    {},
    {
      name: 'modal-auth',
      height: 'auto',
      adaptive: true,
      classes: 'modal',
    },
  );
};

const modalRegShow = (cont: any) => {
  cont.$modal.show(
    ModalReg,
    {},
    {
      name: 'modal-reg',
      height: 'auto',
      adaptive: true,
      classes: 'modal',
    },
  );
};

export {
  modalAuthShow,
  modalRegShow,
};
