<script setup>
const props = defineProps(["name", "value"]);
</script>

<template>
  <div class="detail">
    <p class="detail_name">{{ props.name }}</p>
    <p class="detail_value">{{ props.value }}</p>
  </div>
</template>

<style scoped>
.detail {
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  gap: 1rem;
}

.detail_name {
  text-align: end;
  text-transform: uppercase;
  opacity: 0.6;
}
</style>
