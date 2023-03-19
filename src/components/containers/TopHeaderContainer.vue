<script setup lang="ts">
import Nav from "@/components/Nav.vue";
import Cta from "@/components/Cta.vue";
import BookSlides from "@/components/BookSlides.vue";
</script>

<template>
  <div class="container-wrapper">
    <Nav />
    <Cta />
    <BookSlides />
  </div>
</template>

<style scoped lang="scss">
.container-wrapper {
  height: 70vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #eae6d7;
  background-image: url("@/assets/images/man_on-chair.png");
  background-repeat: no-repeat;
  background-position: 83% 5%;
}
</style>
