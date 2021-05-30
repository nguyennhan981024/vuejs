<template>
  <div class="text-center d-block btn-group mb-5">
    <button class="btn btn-secondary border" @click="prevPage" :disabled="prev">
      Prev
    </button>
    <button class="btn btn-secondary border">{{ pageNumber }}</button>
    <button class="btn btn-secondary border" @click="nextPage" :disabled="next">
      Next
    </button>
  </div>
</template>

<script>
export default {
  props: {
    todo: Array,
    handlePagination: Function,
  },
  data() {
    return {
      prev: true,
      next: false,
      pageNumber: 1,
      currentPage: 1,
      perPage: 3,
    };
  },
  methods: {
    prevPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
        this.changePage(this.currentPage);
      }
    },
    nextPage() {
      if (this.currentPage < this.numberPage()) {
        this.currentPage++;
        this.changePage(this.currentPage);
      }
    },
    changePage(page) {
      if (page < 1) page = 1;
      if (page > this.numberPage()) page = this.numberPage();
      this.pageNumber = page;
      this.handlePagination(this.perPage, this.currentPage);
      this.prev = page === 1 ? true : false;
      this.next = page === this.numberPage() ? true : false;
    },
    numberPage() {
      return Math.ceil(this.todo.length / this.perPage);
    },
  },
};
</script>
