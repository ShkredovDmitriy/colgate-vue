<template>
  <div id="app">
    <Header></Header>
    <Footer></Footer>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Header from './components/header/header.vue';
import Footer from './components/footer/footer.vue';

@Component({
  components: {
    Header,
    Footer,
  },
})
export default class App extends Vue {}
</script>

<style lang="scss">

</style>
