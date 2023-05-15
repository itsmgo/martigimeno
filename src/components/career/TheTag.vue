<script setup>
const props = defineProps(["name"]);
</script>

<template>
  <div class="tag">
    {{ props.name }}
  </div>
</template>

<style scoped>
.tag {
  height: fit-content;
  padding: 0.05rem 0.7rem;
  padding-bottom: 0.1rem;
  border-radius: 1rem;
  color: #f0f0f0;
  text-transform: uppercase;
  font-weight: 500;
  font-size: 0.8rem;
  margin: auto 1rem;
  margin-right: 0;
  background-color: var(--color-secondary);
}
</style>
