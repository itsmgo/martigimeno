<script setup>
import HeaderDetail from "./HeaderDetail.vue";

const details = [
  { name: "location", value: "Barcelona, Spain" },
  { name: "mobile", value: "+34 644 501 573" },
  { name: "email", value: "marti@merceorti.com" },
];
</script>

<template>
  <div class="container">
    <h1 class="name">Marti Gimeno Orti</h1>
    <div class="header">
      <h3 class="quote">
        <div class="dash" />
        Driven by a passion for computer graphics, physics and 3D animation, I
        thrive on solving complex problems that require mathematical modeling
        and programming expertise. Whether I'm building virtual 3D scenarios or
        creating software to solve real-world challenges, my focus is always on
        using my scientific reasoning to make a difference.
      </h3>
      <div class="details">
        <HeaderDetail
          v-for="item in details"
          :name="item.name"
          :value="item.value"
          :key="item.name"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 15rem;
}
.header {
  display: grid;
  grid-template-columns: 0.9fr 1fr;
}

.quote {
  display: flex;
  gap: 1rem;
}
.dash {
  border: 1px solid var(--color-text);
  opacity: 0.2;
}

.name {
  margin-bottom: 1rem;
  font-weight: 500;
  font-size: 3rem;
  text-transform: uppercase;
  color: var(--color-heading);
  word-spacing: 0.7rem;
}

h3 {
  font-size: 1.3rem;
}

.details {
  height: 60%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: auto 0;
}
</style>
