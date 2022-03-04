<template>
  <div id="app">
    <div class="div-inline">
        <HelloWorld  msg="Welcome to hello world"/>
    </div>
    <div class="div-inline">
        <Hello2 class="div-inline" msg="Welcome to hello2"/>
    </div>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Hello2 from './components/Hello2.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,Hello2
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

.div-inline{ float: left; padding-right: 50px; } 
</style>
