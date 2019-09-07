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
    border: 1px solid red;
  }
</style>
