<template>
  <table class="table">
    <thead>
    <tr>
      <th>#</th>
      <th>name</th>
      <th>description</th>
      <th>due date</th>
      <th>status</th>
      <th>action</th>
      <th></th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="(item,key) in todolist" :key="key">
      <th>{{key+1}}</th>
      <td>{{item.name}}</td>
      <td>{{item.description}}</td>
      <td>{{item.due_date}}</td>
      <td>{{item.status}}</td>
      <td><button class="btn btn-warning" @click="editTodo(item.id)">edit</button></td>
      <td><button class="btn btn-danger" @click="deleteTodo(item.id)">delete</button></td>
    </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: "Table",

  props:{
    todolist:Array,
    deleteTodo:Function,
    editTodo: Function,
  },
}
</script>

<style scoped>

</style>
