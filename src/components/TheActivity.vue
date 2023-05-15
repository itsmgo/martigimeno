<script setup>
import { useRouter } from "vue-router";

const router = useRouter();
const props = defineProps(["title", "image", "text", "route"]);
</script>

<template>
  <div class="activity">
    <h2 @click="router.push({ name: props.route })">{{ props.title }}</h2>
    <div @click="router.push({ name: props.route })" class="image" />
    <p>{{ props.text }}</p>
  </div>
</template>

<style scoped>
.activity {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.image {
  background-color: var(--color-grey);
  border-radius: 8px;
  width: 100%;
  height: 15rem;
}

h2,
img {
  cursor: pointer;
  transition: color 0.1s;
}

h2:hover {
  color: var(--color-primary);
}
</style>
