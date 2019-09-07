<template>
  <div id="app">
    <ToDo
      v-for="(data, idx) in todos"
      v-bind:key="idx"
      v-bind:starred="data.starred"
    >
      {{ data.text }}
    </Todo>
  </div>
</template>

<script>
import ToDo from './components/ToDo.vue'

export default {
  name: 'app',
  components: {
    ToDo
  },
  data() {
    return {
      todos: [
        { text: 'Groceries', starred: true },
        { text: 'Meeting', starred: false },
      ]
    }
  }
}
</script>
