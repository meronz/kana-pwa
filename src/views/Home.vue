<template>
  <div class="container">
    <div class="d-flex justify-content-center align-items-center my-3">
      <router-link
        tag="button"
        to="/play"
        class="btn btn-lg btn-primary"
        v-t="'app.start'"
      />
    </div>
  </div>
</template>

<script>
export default { name: "Home" };
</script>
