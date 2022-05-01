<template>
  <div id="app">
    <Header/>
    <Nav/>
    <keep-alive>
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
  import Header from './components/header/Header'
  import Nav from './components/nav/Nav'

export default {
  name: 'App',
  components: {
    Header,
    Nav
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
