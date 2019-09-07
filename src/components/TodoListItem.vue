<template>
  <div class="todo-list-item">
    <p v-bind:class="{ 'text': true, starred }">
      <span v-if="starred">⭐</span>
      <slot></slot>
    </p>
    <div class="actions">
      <span>{{ starred ? 'Unstar' : 'Star' }}</span>
      <span>Done</span>
    </div>
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
  .todo-list-item {
    border-top: 1px solid #eee;
    padding: 15px 20px;
    box-sizing: border-box;
    cursor: pointer;
    display: flex;
    align-items: center;
  }

  .todo-list-item:hover {
    background-color: rgb(245, 245, 245);
  }

  .text {
    flex: 1;
  }

  .text.starred {
    color: goldenrod;
  }

  .actions {
    font-size: 14px;
    color: #999;
    cursor: pointer;
  }

  .actions > span {
    margin-left: 10px;
  }

  .actions > span:hover {
    text-decoration: underline;
  }
</style>
