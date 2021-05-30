<template>
  <tr>
    <td class="text-center">{{ number }}</td>
    <td class="text-center">{{ item.workName }}</td>
    <td class="text-center">{{ item.start }}</td>
    <td class="text-center">{{ item.finish }}</td>
    <td class="text-center">{{ item.create }}</td>
    <td class="text-center">
      <button 
        class = "btn btn-info text-white" 
        data-toggle="modal" data-target="#exampleModal" 
        @click="showTodo(item.id)">Info
      </button>
      <button 
        class = "btn btn-warning text-white" 
        @click="getTodo(item.id)">Edit
      </button>
      <button 
        class = "btn btn-danger text-white" 
        @click="clearTodo(item.id)">Delete
      </button>
      </td>
  </tr>
</template>

<script>
export default {
  props: {
    item: Object,
    number: Number,
    clearTodo: Function,
    showTodo: Function,
    getTodo: Function
  },
};
</script>
