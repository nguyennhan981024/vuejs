<template>
  <div id="app" class="container">
    <Form :insertTodo="insertTodo" :todoEdit="todoEdit" :updateTodo="updateTodo"/>
    <Search :searchTodo="searchTodo" />
    <Table :todolist="todoList" :deleteTodo="deleteTodo" :editTodo="editTodo"/>
  </div>
</template>
<script>
import Table from "@/components/Table";
import Form from "@/components/Form";
import Search from "@/components/Search";
export default {
  name: 'App',
  components: {Search, Form, Table},
  data(){
    return{
      todoList : [],
      searchValue: [],
      todoEdit : null,
    }
  },
  methods:{
    insertTodo(obj){
      obj['id'] = this.maxId + 1;
      this.todoList.push(obj);
      localStorage.setItem('todolist',JSON.stringify(this.todoList));
    },
    deleteTodo(id){
      let index = this.todoList.findIndex(item=>item.id === id);
      this.todoList.splice(index,1);
      localStorage.setItem('todolist',JSON.stringify(this.todoList));
    },

    searchTodo(str){
      this.searchValue = [...this.todoList].filter(item => item.name.toLowerCase().includes(str.toLowerCase()));
    },
    editTodo(id){
      let editItem = this.todoList.find(item => item.id === id);
      this.todoEdit = {...editItem}
    },
    updateTodo(obj){
      this.todoList = [...this.todoList].map(item=>{
        return item.id === obj.id ? obj : item
      });
      localStorage.setItem('todolist',JSON.stringify(this.todoList))
    }
  },
  computed:{
    maxId(){
      let listid = this.todoList.map(item=>item.id);
      return this.todoList.length ? Math.max.apply(Math,listid):0;
    }
  },
  watch:{
    searchValue(newValue){
      this.todoList = [...newValue];
    }
  },
  mounted() {

    localStorage.getItem('todolist')?(this.todoList = JSON.parse(localStorage.getItem('todolist'))):[];
  }
}
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
