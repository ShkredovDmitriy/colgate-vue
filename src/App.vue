<template lang="pug">
  #app
    Header
    SectionMain
    Footer
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Header from './components/header/header.vue';
import Footer from './components/footer/footer.vue';
import SectionMain from './blocks/main/main.vue';

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
