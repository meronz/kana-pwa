<template>
  <div class="">
    <div class="flex justify-start justify-items-end">
      <nav id="nav" class="pt-1 mx-8">
        <router-link
          :to="{ name: 'Home' }"
          class="px-4 py-2 mx-2 rounded-3xl bg-white bg-opacity-30"
          href="#"
          v-t="'nav.home'"
        >
        </router-link>
      </nav>
    </div>
    <main class="">
      <router-view />
    </main>
  </div>
</template>

<script setup>
</script>