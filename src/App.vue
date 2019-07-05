<template>
  <div id="app">
    <Mrrgl/>
    <div>
      Tooltips by <a href="https://www.wowhead.com/tooltips">wowhead</a><br />
      View on <a href="https://github.com/mszkb/mrrl" target="_blank">github <b-icon
      icon="github-circle"
      size="is-medium">
    </b-icon></a>
    
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
  padding-top: 60px;
  position: relative;
}
</style>
