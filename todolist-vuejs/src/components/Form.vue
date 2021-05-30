<template>
  <div>
    <h1 class="text-center">Vue Todolist</h1>
    <!-- Button Add -->
    <button class="btn btn-success mb-4" @click="hidden = !hidden">Add</button>
    <!-- Form add -->
    <div v-if="hidden">
      <form class="d-flex justify-content-between mb-5">
        <div class="form-group">
          <label class="d-block">Name:</label>
          <input type="text" v-model="newData.nameAdd" />
        </div>
        <div class="form-group">
          <label class="d-block">Start time:</label>
          <input type="date" v-model="newData.startAdd" />
        </div>
        <div class="form-group">
          <label class="d-block">Finish time:</label>
          <input type="date" v-model="newData.finishAdd" />
        </div>
        <div class="form-group">
          <label class="d-block">Create by:</label>
          <input type="text" v-model="newData.createAdd" />
        </div>
      </form>
      <button type="submit" class="btn btn-success mb-5" @click="addNew">
        Add New
      </button>
      <button type="submit" class="btn btn-primary mb-5" @click="update">
        Update
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    insertTodo: Function,
    todo: Array,
    oldValue: Object,
    setTodo: Function,
  },
  data() {
    return {
      hidden: false,
      newData: {
        nameAdd: "",
        startAdd: "",
        finishAdd: "",
        createAdd: "",
      },
    };
  },
  computed: {
    maxID() {
      let idNewData = this.todo.map((item) => item.id);
      return this.todo.length ? Math.max.apply(Math, idNewData) : 0;
    },
  },
  methods: {
    addNew() {
      this.insertTodo({
        id: this.maxID + 1,
        workName: this.newData.nameAdd,
        start: this.newData.startAdd,
        finish: this.newData.finishAdd,
        create: this.newData.createAdd,
      });
      this.clearInput();
    },
    update() {
      this.setTodo({
        id: this.oldValue.id,
        workName: this.newData.nameAdd,
        start: this.newData.startAdd,
        finish: this.newData.finishAdd,
        create: this.newData.createAdd,
      });
      this.clearInput();
    },
    clearInput() {
      for (let key in this.newData) {
        this.newData[key] = "";
      }
    },
  },
  watch: {
    oldValue(data) {
        (this.newData.nameAdd = data.workName),
        (this.newData.startAdd = data.start),
        (this.newData.finishAdd = data.finish),
        (this.newData.createAdd = data.create),
        (this.hidden = true);
    },
  },
};
</script>

<style></style>
