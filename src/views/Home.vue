<template>
  <div class="flex h-screen justify-center items-center">
    <router-link to="/play">
      <big-button :msg="t('home.play')" />
    </router-link>
  </div>
</template>

<script setup>
import BigButton from "../components/BigButton.vue";
import { useI18n } from "vue-i18n";
const { t } = useI18n({ useScope: "global" });
</script>
