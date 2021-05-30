<template>
  <form>
    <div class="form-group">
      <label>name to do</label>
      <input type="text" class="form-control" v-model="newData.name" />
    </div>
    <div class="form-group">
      <label>Description</label>
      <input type="text" class="form-control" v-model="newData.description" />
    </div>
    <div class="form-group">
      <label>Due date</label>
      <input type="date" class="form-control" v-model="newData.due_date" />
    </div>
    <div class="form-group">
      <label>Status</label>
      <input type="text" class="form-control" v-model="newData.status" />
    </div>
    <button type="submit" class="btn btn-primary" @click="addNew">Add</button>
  </form>
</template>

<script>
export default {
  props: {
    insertTodo: Function
  },
  name: 'Form',
  data() {
    return {
      newData: {
        name: '',
        description: '',
        due_date: '',
        status: ''
      }
    };
  },
  methods: {
    addNew(event) {
      event.preventDefault();
      this.insertTodo(this.newData);
    }
  }
};
</script>

<style scoped></style>
