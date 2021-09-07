<template lang="pug">
  #app
    Header
    SectionMain
    Footer
    modals-container
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import VModal from 'vue-js-modal';
import Header from './components/header/header.vue';
import Footer from './components/footer/footer.vue';
import SectionMain from './blocks/main/main.vue';
import ModalAuth from './components/modal/modalAuth/modalAuth.vue';

Vue.use(VModal, { dynamic: true, injectModalsContainer: true });
@Component({
  components: {
    Header,
    Footer,
    SectionMain,
    ModalAuth,
  },
  methods: {
    openModal() {
      const options = {};
      const style = { width: "60%", height: "auto" };
      const events = {
        opened: () => console.log("Opened"),
        closed: () => console.log("Closed"),
      };
      this.$modal.show(ModalAuth, options, style, events);
    },
  },
})

export default class App extends Vue {}
</script>

<style lang="scss">
html, body {
  margin: 0;
  padding: 0;
  font-size: calc(100vw / 1920 * 16);
}
* {
  box-sizing: border-box;
}
ul {
  margin: 0;
  padding: 0;
  list-style-type: none;
}
#app {
  font-family: 'Roboto', sans-serif;
}

</style>
