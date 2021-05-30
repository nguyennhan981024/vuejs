<template>
  <div>
    <table class="table table-stripped">
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Description</th>
          <th>due_date</th>
          <th>status</th>
        </tr>
      </thead>
      <tbody>
        <TableContent v-for="(item, key) in todolist" :number="key + 1" :key="key" :todo="item" :deleteTodo="deleteTodo" />
      </tbody>
    </table>
  </div>
</template>

<script>
import TableContent from '@/components/TableContent';
export default {
  name: 'Table',
  props: {
    todolist: Array,
    delete: Function
  },
  methods: {
    deleteTodo(id) {
      this.delete(id);
    }
  },
  components: { TableContent },
  mounted() {}
};
</script>

<style scoped></style>
