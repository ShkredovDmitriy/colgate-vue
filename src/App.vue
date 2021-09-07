<template lang="pug">
  #app
    Header
    SectionMain
    Footer
</template>

<script>
import { Component, Vue } from 'vue-property-decorator';
import VModal from 'vue-js-modal';
import Vuelidate from 'vuelidate';
import Header from './components/header/header.vue';
import Footer from './components/footer/footer.vue';
import SectionMain from './blocks/main/main.vue';

Vue.use(VModal);
Vue.use(Vuelidate);

@Component({
  components: {
    Header,
    Footer,
    SectionMain,
  },
})

export default class App extends Vue {}
</script>

<style lang="scss">
html, body {
  margin: 0;
  padding: 0;
  font-family: 'Roboto', sans-serif;
  font-size: calc(100vw / 1920 * 16);
  line-height: 1;
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
.vm--container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.modal {
  position: static;
  width: 100%;
  max-width: 28.125rem;
  z-index: 200;
}
</style>
