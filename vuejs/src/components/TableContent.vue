<template>
  <tr>
    <td>{{ number }}</td>
    <td>{{ todo.name }}</td>
    <td>{{ todo.description }}</td>
    <td>{{ todo.due_date }}</td>
    <td>{{ todo.status }}</td>
    <td><button class="btn btn-warning" @click="editTodo">Edit</button></td>
    <td><button class="btn btn-danger" @click="deleteItem">Delete</button></td>
    <td></td>
  </tr>
</template>

<script>
export default {
  name: 'TableContent',
  props: {
    todo: Object,
    number: Number,
    deleteTodo: Function
  },
  methods: {
    editTodo() {},
    deleteItem() {
      this.deleteTodo(this.todo.id);
    }
  }
};
</script>

<style scoped></style>
