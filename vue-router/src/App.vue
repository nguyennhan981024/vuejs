<template>
  <div>
    <router-link to="/user">User Page</router-link>
    <router-link to="profile">Profile page</router-link>
    <router-view/>

  </div>
</template>

<script>

export default {
  data(){
    return {
      id : 1,
    }
  },
  name: 'App',
  mounted() {
    this.$router.push({name : 'profile',params : {id : 1}})
  }
}
</script>

<style>

</style>
