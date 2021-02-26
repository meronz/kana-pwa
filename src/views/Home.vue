<template>
  <div class="container-fluid min-vh-100 d-flex flex-column">
    <div class="row flex-grow-1">
      <div class="row align-items-center">
        <div class="d-flex justify-content-center align-items-center">
          <router-link
            tag="button"
            to="/play"
            class="btn btn-lg btn-primary big-button p-3"
            v-t="'app.start'"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default { name: "Home" };
</script>

<style scoped>
.big-button {
  min-width: 500px;
  min-width: 50%;
}
</style>
