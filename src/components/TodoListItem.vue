<template>
  <div v-bind:class="{ starred }">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'TodoListItem',
  props: {
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
