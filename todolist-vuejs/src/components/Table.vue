<template>
  <div>
    <input type="search" class="mx-auto d-block mb-3" v-model="search" />
    <table class="table">
      <thead>
        <tr>
          <th class="text-center">Number</th>
          <th class="text-center">Name</th>
          <th class="text-center">Start</th>
          <th class="text-center">Finish</th>
          <th class="text-center">Create By</th>
          <th class="text-center">Action</th>
        </tr>
      </thead>
      <tbody>
        <Tablebody
          v-for="(item, index) in pagValue"
          :key="item.id"
          :item="item"
          :number="index + 1"
          :clearTodo="clearTodo"
          :showTodo="showTodo"
          :getTodo="getTodo"
        />
      </tbody>
    </table>

    <!-- Modal -->
    <div
      class="modal fade"
      id="exampleModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Work Information</h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <p class="font-weight-bold">
              Work Of Name:
              <span class="font-weight-normal">{{ infoTodo.workName }}</span>
            </p>
            <p class="font-weight-bold">
              Start Time:
              <span class="font-weight-normal">{{ infoTodo.start }}</span>
            </p>
            <p class="font-weight-bold">
              End Time:
              <span class="font-weight-normal">{{ infoTodo.finish }}</span>
            </p>
            <p class="font-weight-bold">
              Create By:
              <span class="font-weight-normal">{{ infoTodo.create }}</span>
            </p>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-dismiss="modal"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>

    <Pagination :todo="todo" :handlePagination="handlePagination" />
  </div>
</template>

<script>
import Tablebody from "./Tablebody";
import Pagination from "./Pagination";

export default {
  components: {
    Tablebody,
    Pagination,
  },
  props: {
    todo: Array,
    clearTodo: Function,
    showTodo: Function,
    infoTodo: Object,
    getTodo: Function,
    searchText: Function,
    handlePagination: Function,
    pagValue: Array,
  },
  data() {
    return {
      search: "",
    };
  },
  watch: {
    search(text) {
      this.searchText(text);
    },
  },
};
</script>
