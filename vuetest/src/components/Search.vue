<template>
<div>
  <div class="input-group mb-3">
    <input type="text" class="form-control" v-model="search">
    <div class="input-group-append">
      <button class="btn btn-outline-secondary" type="button" @click="searched">Button</button>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: "Search",
  props:{
    searchTodo : Function,
  },
  data(){
    return{
      search :'',
    }
  },
  methods:{
    searched(){
      this.searchTodo(this.search);
    }

  }
}
</script>

<style scoped>

</style>
