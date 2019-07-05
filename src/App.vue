<template>
  <div id="app">
    <Mrrgl/>
    <div>
      Tooltips by <a href="https://www.wowhead.com/tooltips">wowhead</a>
    </div>
  </div>
</template>

<script>
import Mrrgl from './components/Mrrl.vue'

export default {
  name: 'app',
  components: {
    Mrrgl
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
