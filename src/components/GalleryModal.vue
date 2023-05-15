<script setup>
import { reactive } from "vue";
import { VueFinalModal } from "vue-final-modal";

const props = defineProps(["images", "selected"]);

const data = reactive({
  currentIndex: props.selected,
});

const methods = {
  changeImage: (direction) => {
    data.currentIndex = (data.currentIndex + direction) % props.images.length;
  },
  getImageURL: (image) => {
    return new URL(`/src/assets/renders/HD/${image}`, import.meta.url).href;
  },
  isVideo: (image) => {
    const extension = image.split(".").pop();
    return extension.toLowerCase() === "mp4";
  },
};
</script>

<template>
  <VueFinalModal
    class="modal"
    content-class="modal-content"
    overlay-transition="vfm-fade"
    content-transition="vfm-fade"
    @before-open="data.currentIndex = props.selected"
  >
    <button
      class="modal-button"
      style="left: -100px"
      @click="methods.changeImage(-1)"
    >
      {{ "Back" }}
    </button>
    <img
      class="modal-image"
      :src="methods.getImageURL(props.images.at(data.currentIndex))"
      v-show="!methods.isVideo(props.images.at(data.currentIndex))"
    />
    <video
      controls
      class="modal-image"
      v-show="methods.isVideo(props.images.at(data.currentIndex))"
    >
      <source
        :src="methods.getImageURL(props.images.at(data.currentIndex))"
        type="video/mp4"
      />
      Your browser does not support the video tag.
    </video>

    <button
      class="modal-button"
      style="right: -100px"
      @click="methods.changeImage(1)"
    >
      {{ "Next" }}
    </button>
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
  position: relative;
  padding: 2rem;
  background: var(--color-background);
  border-radius: 1rem;
}
.modal-content > * + * {
  margin: 0;
}
.modal-content h1 {
  font-size: 1.375rem;
}
.modal-content button {
  margin: 0.25rem 0 0 auto;
  padding: 0 8px;
  border: 1px solid;
  border-radius: 0.5rem;
}
.dark .modal-content {
  background: #000;
}

.modal-image {
  width: 70rem;
  height: 39.4rem;
  border-radius: 0.3rem;
  background-color: var(--color-grey);
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
}

.modal-button {
  position: absolute;
  top: 45%;
  border: none !important;
  background-color: var(--color-background);
  font-size: 1.1rem;
  width: 8rem;
  height: 3rem;
  border-radius: 2rem !important;
}
</style>
