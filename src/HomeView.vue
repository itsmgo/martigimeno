<script setup>
import sections from "./data/career";
import MainSection from "./components/career/MainSection.vue";
</script>

<template>
  <div class="sections">
    <MainSection
      v-for="(section, index) in sections"
      :section="section"
      :index="index"
      :key="index"
    />
  </div>
</template>

<style scoped>
.sections {
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  gap: 8rem;
}
</style>
