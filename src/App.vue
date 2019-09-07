<template>
  <div id="app">
    <ToDo text="first" starred="true" />
    <ToDo text="second" />
  </div>
</template>

<script>
import ToDo from './components/ToDo.vue'

export default {
  name: 'app',
  components: {
    ToDo
  }
}
</script>
