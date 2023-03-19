<script setup lang="ts">
import TopHeaderContainer from "@/components/containers/TopHeaderContainer.vue";
</script>

<template>
  <div class="wrapper">
    <TopHeaderContainer />
    <div class="book-container">
      <BookSearch />
      <BookList />
    </div>
    <Footer />
  </div>
</template>

<style scoped lang="scss">
.wrapper {
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
}

.book-container {
  margin-top: 200px;
  width: 80%;
  position: relative;
}
</style>
