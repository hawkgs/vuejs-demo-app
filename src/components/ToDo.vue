<template>
  <li v-bind:class="{ starred }">
    {{ text }}
  </li>
</template>

<script>
export default {
  name: 'ToDo',
  props: {
    text: String,
    starred: Boolean
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .starred {
    color: goldenrod;
  }
</style>
