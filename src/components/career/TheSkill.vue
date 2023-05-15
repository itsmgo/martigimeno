<script setup>
const props = defineProps(["name", "value"]);
</script>

<template>
  <div class="skill">
    <p>{{ props.name }}</p>
    <div class="bar" :style="{ backgroundColor: '#7DAF9C' + '33' }">
      <div class="value" :style="{ width: props.value + '%' }" />
    </div>
  </div>
</template>

<style scoped>
.skill {
  text-transform: uppercase;
  display: grid;
  grid-template-columns: 1.4fr 2fr;
  margin: 0.5rem 0;
}

.bar {
  height: 0.4rem;
  width: 100%;
  border-radius: 1rem;
  margin: auto;
}

.value {
  height: 100%;
  border-radius: 1rem;
  background-color: var(--color-secondary);
}
</style>
