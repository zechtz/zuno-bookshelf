<script setup lang="ts">
import TopHeaderContainer from "components/containers/TopHeaderContainer.vue";
import BookListContainer from "components/containers/BookListContainer.vue";
import FooterContainer from "components/containers/FooterContainer.vue";
</script>

<template>
  <div class="wrapper">
    <TopHeaderContainer />
    <BookListContainer />
    <FooterContainer />
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
  width: $box-width;
  position: relative;
}
</style>
