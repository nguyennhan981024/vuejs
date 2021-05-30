<template>
  <div>
    <form class="row">
      <div class="form-group col-3">
        <label>name</label>
        <input type="text" class="form-control" v-model="newData.name">
      </div>
      <div class="form-group col-3">
        <label>description</label>
        <input type="text" class="form-control" v-model="newData.description">
      </div>
      <div class="form-group col-3">
        <label>due date</label>
        <input type="date" class="form-control" v-model="newData.due_date">
      </div>
      <div class="form-group  col-3">
        <label>status</label>
        <input type="text" class="form-control" v-model="newData.status">
      </div>
    </form>
    <button type="submit" class="btn btn-primary" @click="addNew">Submit</button>
  </div>

</template>

<script>
export default {
  name: "Form",
  props:{
    insertTodo :Function,
    todoEdit : Object,
    updateTodo : Function
  },
  data(){
    return {
      newData:{
        id : "",
        name: "",
        description:"",
        due_date: "",
        status:""
      }
    }
  },
  methods:{
    addNew(event){
      event.preventDefault();
      if(!this.newData.id){
        this.insertTodo({...this.newData});
        this.clearInput();
      }else{
        this.updateTodo({...this.newData});
        this.clearInput();
      }


    },
    clearInput(){
      for(let key in this.newData){
        this.newData[key] = '';
      }
    }

  },
  watch: {
    todoEdit(newValue){
      this.newData = {...newValue}
    }
  }
}
</script>

<style scoped>

</style>
