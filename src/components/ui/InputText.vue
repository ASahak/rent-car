
<template>
  <InputText v-model="value"/>
</template>

<script setup>
  import InputText from 'primevue/inputtext';
  import { ref } from 'vue';

  const value = ref(null);
</script>

<style scoped>
</style>
