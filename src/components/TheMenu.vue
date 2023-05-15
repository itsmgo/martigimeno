<script setup>
import { reactive } from "vue";
import { useRouter, useRoute } from "vue-router";
import { routes } from "./../router";

const router = useRouter();
const route = useRoute();

const emits = defineEmits(["scroll-menu"]);

const methods = {
  changeTab: (name) => {
    router.push({ name: name });
    emits("scroll-menu");
  },
};

const compute = reactive({
  isActive: (name) => {
    return route.fullPath.split("/").at(1) == name;
  },

  getClass: (name) => {
    return { active: compute.isActive(name) };
  },
});
</script>

<template>
  <div class="container" ref="casa">
    <div class="buttons">
      <button
        v-for="button in routes.slice(1, 4)"
        @click="methods.changeTab(button.name)"
        :class="compute.getClass(button.name)"
        :key="button.name"
      >
        {{ button.text }}
      </button>
    </div>
  </div>
</template>

<style scoped>
.container {
  position: sticky;
  top: 0;
  z-index: 2;
}

.buttons {
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 6.6rem;
  margin: 0 auto;
  padding-top: 1.8rem;
  border-bottom: 2px solid var(--color-grey);
  background-color: var(--color-background);
}

button {
  border: none;
  font-size: 1.2rem;
  padding-bottom: 2.2rem;
}

button:hover {
  border: none;
  font-size: 1.2rem;
}

button:active {
  border: none;
  font-size: 1.2rem;
}

.active {
  font-weight: 500;
  color: var(--color-primary);
  border-radius: 0;
  border-bottom: 2px solid var(--color-primary) !important;
}
</style>
