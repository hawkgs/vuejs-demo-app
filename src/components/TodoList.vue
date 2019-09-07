<template>
  <div class="todo-list">
    <TodoListItem
      v-for="(data, idx) in todos"
      v-bind:key="idx"
      v-bind:starred="data.starred"
    >
      {{ data.text }}
    </TodoListItem>
  </div>
</template>

<script>
import TodoListItem from './TodoListItem.vue';

export default {
  name: 'TodoList',
  components: { TodoListItem },
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

<style scoped>
  .todo-list {
    width: 600px;
    margin: 50px auto 0 auto;
    background: white;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  }
</style>
