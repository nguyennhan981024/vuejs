<template>
  <div>
    <h1>profile page</h1>
  </div>
</template>

<script>
export default {
  name: "profile.vue",
  mounted() {
    console.log(this.$route.params.id)
  }
}
</script>

<style scoped>

</style>
