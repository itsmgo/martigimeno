<script setup>
import { VueFinalModal } from "vue-final-modal";

const props = defineProps(["achievements", "knowledge", "links"]);
</script>

<template>
  <VueFinalModal
    class="modal"
    content-class="modal-content"
    overlay-transition="vfm-fade"
    content-transition="vfm-fade"
  >
    <div>
      <h2>Achievements</h2>
      <ul>
        <li v-for="(item, index) in props.achievements" :key="index">
          {{ item }}
        </li>
      </ul>
    </div>
    <div>
      <h2>Technical knowledge</h2>
      <ul>
        <li v-for="(item, index) in props.knowledge" :key="index">
          {{ item }}
        </li>
      </ul>
    </div>
    <div v-if="props.links">
      <h2>References</h2>
      <ol>
        <li v-for="(item, index) in props.links" :key="index">
          <a :href="item.url" target="_blank">{{ item.text }}</a>
        </li>
      </ol>
    </div>
    <slot />
  </VueFinalModal>
</template>

<style>
.modal {
  display: flex;
  justify-content: center;
  align-items: center;
}
.modal-content {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 2rem;
  position: relative;
  background: var(--color-background);
  border-radius: 1rem;
}
.modal-content > * + * {
  margin: 0;
}
.modal-content h1 {
  font-size: 1.375rem;
}
.dark .modal-content {
  background: #000;
}
</style>
