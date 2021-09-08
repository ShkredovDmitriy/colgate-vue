import ModalAuth from '@/components/modal/modalAuth/modalAuth.vue';
import ModalReg from '@/components/modal/modalReg/modalReg.vue';
import ModalInfo from '@/components/modal/modalInfo/modalInfo.vue';

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

const modalAuthHide = (cont: any) => {
  cont.$modal.hide('modal-auth');
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

const modalInfoShow = (cont: any, title: string, message: string) => {
  cont.$modal.show(
    ModalInfo,
    {
      title,
      message,
    },
    {
      name: 'modal-info',
      height: 'auto',
      adaptive: true,
      classes: 'modal',
    },
  );
};

export {
  modalAuthShow,
  modalAuthHide,
  modalRegShow,
  modalInfoShow,
};
