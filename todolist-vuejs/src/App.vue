<template>
  <div class="container">
    <Form
      :todo="todo"
      :insertTodo="insertTodo"
      :getTodo="getTodo"
      :oldValue="oldValue"
      :setTodo="setTodo"
    />
    <Table
      :todo="todo"
      :clearTodo="clearTodo"
      :showTodo="showTodo"
      :infoTodo="infoTodo"
      :getTodo="getTodo"
      :searchText="searchText"
      :handlePagination="handlePagination"
      :pagValue="pagValue"
    />
  </div>
</template>

<script>
import Form from "./components/Form";
import Table from "./components/Table";

export default {
  components: {
    Form,
    Table,
  },
  data() {
    return {
      todo: [],
      infoTodo: {},
      oldValue: {},
      search: "",
      searchValue: [],
      pagValue: [],
      perPage: 3,
      currentPage: 1,
    };
  },
  methods: {
    insertTodo(obj) {
      this.todo.push(obj);
      localStorage.setItem("data", JSON.stringify(this.todo));
    },
    clearTodo(id) {
      if (confirm("Do you want to delete?")) {
        const index = this.todo.findIndex((item) => item.id === id);
        this.todo.splice(index, 1);
        localStorage.setItem("data", JSON.stringify(this.todo));
      }
    },
    showTodo(id) {
      const info = this.todo.find((item) => item.id === id);
      this.infoTodo = { ...info };
    },
    getTodo(id) {
      const obj = this.todo.find((item) => item.id === id);
      this.oldValue = { ...obj };
    },
    setTodo(obj) {
      const index = this.todo.findIndex((item) => item.id === obj.id);
      const newValue = [...this.todo];
      newValue[index] = { ...obj };
      this.todo = [...newValue];
      localStorage.setItem("data", JSON.stringify(this.todo));
    },
    searchText(text) {
      this.search = text;
    },
    handlePagination(perPage, currentPage) {
      this.perPage = perPage;
      this.currentPage = currentPage;
      this.pagValue = this.todo.slice(this.offset, this.offset + this.perPage);
    },
  },
  computed: {
    offset() { 
      return (this.currentPage - 1) * this.perPage;
    },
  },
  watch: {
    todo(newValue) {
      this.pagValue = [...newValue].slice(
        this.offset,
        this.offset + this.perPage
      );
    },
    search(text) {
      this.todo = this.searchValue.filter((item) => {
        for (let key in item) {
          if (
            item[key]
              .toString()
              .toLowerCase()
              .includes(text.toLowerCase())
          ) {
            return item;
          }
        }
      });
    },
  },
  mounted() {
    this.todo = localStorage.getItem("data")
      ? JSON.parse(localStorage.getItem("data"))
      : [];
    this.searchValue = [...this.todo];
    this.pagValue = [...this.todo];
  },
};
</script>
