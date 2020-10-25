<template>
<main>
  <px-header />
  <home />
  <px-assets-table />
  </main>
</template>

<script>
import PxHeader from './components/PxHeader.vue';
import Home from './views/Home.vue';
import PxAssetsTable from './components/PxAssetsTable.vue';

export default {
  name: 'App',
  components: {
    PxHeader,
    Home,
    PxAssetsTable
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
