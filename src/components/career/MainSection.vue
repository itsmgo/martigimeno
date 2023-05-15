<script setup>
import { ref } from "vue";
import TheSkill from "./TheSkill.vue";
import TheTag from "./TheTag.vue";
import SectionModal from "./SectionModal.vue";

const props = defineProps(["section", "index"]);

const showSection = ref(false);

const showImage = (index) => {
  return index % 2 == 0;
};
const getImageURL = (image) => {
  return new URL(`/src/assets/${image}`, import.meta.url).href;
};

const methods = {
  enlargeSection: () => {
    showSection.value = true;
  },
};
</script>

<template>
  <div class="wrapper">
    <div class="image-container">
      <img class="image" :src="getImageURL(props.section.images[0])" />
    </div>
    <div class="content">
      <div class="header">
        <h2 class="title">{{ props.section.title }}</h2>
        <TheTag v-for="item in props.section.tags" :name="item" :key="item" />
        <div class="date">
          {{ props.section.date[0] }}
          <div class="dash" />
          {{ props.section.date[1] }}
        </div>
      </div>
      <h3 class="location">at {{ props.section.location }}</h3>
      <div class="body">
        <p class="description">
          {{ props.section.description }}
        </p>
        <div class="bottom">
          <div>
            <h3 class="skills">Technologies involved</h3>
            <TheSkill
              v-for="item in props.section.skills"
              :name="item.name"
              :value="item.value"
              :key="item.name"
            />
          </div>
          <button class="button" @click="methods.enlargeSection">
            See more
          </button>
        </div>
      </div>
    </div>
    <div class="image-container" v-if="false">
      <img class="image" :src="getImageURL(props.section.images[0])" />
    </div>
  </div>
  <SectionModal
    v-model="showSection"
    :achievements="props.section.achievements"
    :knowledge="props.section.knowledge"
    :links="props.section.links"
  />
</template>

<style scoped>
.wrapper {
  display: grid;
  grid-template-columns: auto auto;
  gap: 4rem;
}

.header {
  display: flex;
}

.date {
  display: flex;
  gap: 1rem;
  margin: auto 0;
  margin-left: auto;
  text-transform: capitalize;
}
.dash {
  height: 0;
  min-width: 3rem;
  border: 1px solid var(--color-grey);
  margin: auto 0;
}
.location {
  padding-bottom: 1.4rem;
  margin-top: -0.2rem;
  font-size: 1rem;
  opacity: 0.5;
}

.skills {
  padding-bottom: 0.3rem;
  font-size: 1rem;
  opacity: 0.5;
}

.description {
  padding: 0 1rem;
  padding-bottom: 1.4rem;
}

.bottom {
  display: grid;
  grid-template-columns: 2.5fr 1fr;
  gap: 4rem;
}

.image-container {
  background-color: #555;
  width: 15rem;
  height: 100%;
  border-radius: 0.3rem;
  margin: auto;
  position: relative;
  padding-bottom: 75%; /* 4:3 aspect ratio */
}

.image-container img {
  border-radius: 0.3rem;
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center center;
}

button {
  align-self: self-end;
}
</style>
