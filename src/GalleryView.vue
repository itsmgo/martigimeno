<script setup>
import { reactive, ref } from "vue";
import GalleryModal from "./components/GalleryModal.vue";
import { sections, videos, about } from "./data/portfolio.js";

const showImage = ref(false);
const currentVideo = ref(videos[0]);

const data = reactive({
  selectedIndex: 0,
  section: "",
});

const methods = {
  enlargeImage: (section, image) => {
    data.section = section;
    data.selectedIndex = data.section.images.indexOf(image);
    showImage.value = true;
  },
  getThumbURL: (image) => {
    return new URL(`/src/assets/animations/${image}`, import.meta.url).href;
  },
  getImageURL: (image) => {
    return new URL(`/src/assets/renders/${image}`, import.meta.url).href;
  },
  setCurrentVideo: (index) => {
    currentVideo.value = videos[index];
    console.log(currentVideo.value);
  },
};
</script>

<template>
  <div class="container">
    <div class="section">
      <h2>Animations</h2>
      <div class="images anim">
        <div v-for="(video, index) in videos" :key="index">
          <img
            :src="methods.getThumbURL(video.thumbnail)"
            @click="methods.setCurrentVideo(index)"
            class="image anim"
          />
        </div>
      </div>
      <iframe
        :src="currentVideo.source"
        frameborder="0"
        allow="autoplay; encrypted-media"
        allowfullscreen
        class="video"
      >
      </iframe>
    </div>
    <div class="section">
      <h2>About the content ownership of this portfolio</h2>
      <p v-for="(item, index) in about" :key="index">{{ item }}</p>
    </div>
    <div v-for="section in sections" :key="section.name" class="section">
      <h2>{{ section.name }}</h2>
      <div class="images">
        <div v-for="image in section.images" :key="image" class="image">
          <img
            @click="methods.enlargeImage(section, image)"
            :src="methods.getImageURL(image)"
          />
        </div>
      </div>
    </div>
  </div>
  <GalleryModal
    v-model="showImage"
    :images="data.section.images"
    :selected="data.selectedIndex"
  />
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  gap: 3rem;
}

.video {
  border-radius: 0.3rem;
  width: 100%;
  aspect-ratio: 16/9;
  height: auto;
  animation: loading 1s infinite;
}

@keyframes loading {
  0% {
    background-color: var(--color-background);
  }
  50% {
    background-color: var(--color-grey);
  }
  100% {
    background-color: var(--color-background);
  }
}

.section {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.images {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 1rem;
  width: 100%;
}

.anim {
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr !important;
  height: 9rem !important;
}

.image {
  border-radius: 0.3rem;
  width: 100%;
  height: 15rem;
  cursor: pointer;
  position: relative;
  object-fit: cover;
  object-position: center center;
  animation: loading 1s infinite;
}
.image img {
  border-radius: 0.3rem;
  transition: all 0.1s;
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center right;
}

.image img:hover {
  opacity: 0.5;
}
</style>
