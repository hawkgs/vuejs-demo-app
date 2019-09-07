<template>
  <div class="todo-list">
    <form @submit.prevent="addTodo">
      <input
        type="text"
        placeholder="Add a new to-do here"
        v-model="todo"
      />
    </form>
    <p v-if="!valid" class="error">You can't add an empty to-do</p>
    <div class="todos">
      <TodoListItem
        v-for="(data, idx) in sortedTodos"
        v-bind:key="idx"
        v-bind:starred="data.starred"
        v-bind:markDone="() => markTodoDone(idx)"
        v-bind:toggleStar="() => toggleTodoStar(idx)"
      >
        {{ data.text }}
      </TodoListItem>
    </div>
  </div>
</template>

<script>
import TodoListItem from './TodoListItem.vue';

export default {
  name: 'TodoList',
  components: { TodoListItem },
  data() {
    return {
      valid: true,
      todo: '',
      todos: [
        { text: 'Meeting', starred: false },
        { text: 'Groceries', starred: true },
      ]
    }
  },
  computed: {
    sortedTodos() {
      return this.todos.sort((a, b) => {
        if (a.starred === b.starred) {
          return 0;
        }
        if (a.starred) {
          return -1;
        }
        if (b.starred) {
          return 1;
        }
      })
    }
  },
  methods: {
    addTodo() {
      this.valid = !!this.todo.trim().length;
      if (!this.valid) {
        return;
      }
      this.todos.push({
        text: this.todo,
        starred: false
      });
      this.todo = '';
    },
    markTodoDone(idx) {
      this.todos.splice(idx, 1);
    },
    toggleTodoStar(idx) {
      this.todos[idx].starred = !this.todos[idx].starred;
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

  form {
    width: inherit;
  }

  input {
    width: inherit;
    border: none;
    font-size: 16px;
    padding: 15px 20px;
    box-sizing: border-box;
    color: #666;
  }

  .error {
    text-align: center;
    font-size: 12px;
    color: rgb(209, 75, 75);
    margin: 5px 0;
  }
</style>
