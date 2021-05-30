<template>
  <div class="container">
    <!--
      b1 : Viết 1 component List riêng và render list kia ra là 1 table
    -->
    <Form :insertTodo="insertTodo" />
    <Table :todolist="todoList" :delete="deleteTodo" />
  </div>
</template>
<script>
import Table from '@/components/Table';
import Form from '@/components/Form';
export default {
  components: { Form, Table },
  data() {
    return {
      todoList: []
    };
  },
  methods: {
    insertTodo(obj) {
      obj['id'] = this.maxId + 1;
      this.todoList.push({ ...obj });
      localStorage.setItem('todolist', JSON.stringify([...this.todoList]));
    },
    deleteTodo(id) {
      let index = this.todoList.findIndex(item => item.id === id);
      this.todoList.splice(index, 1);
      localStorage.setItem('todolist', JSON.stringify(this.todoList));
    }
  },
  computed: {
    maxId() {
      let listids = this.todoList.map(item => item.id);
      return this.todoList.length ? Math.max.apply(Math, listids) : 0;
    }
  },
  mounted() {
    localStorage.getItem('todolist') ? (this.todoList = JSON.parse(localStorage.getItem('todolist'))) : [];
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
