<script setup lang="ts">
import BookList from "../BookList.vue";
import BookSearch from "../BookSearch.vue";
</script>

<template>
  <div class="book-wrapper">
    <TopHeaderContainer />
    <div class="book-container">
      <BookSearch />
      <BookList />
    </div>
    <Footer />
  </div>
</template>

<style scoped lang="scss">
.book-wrapper {
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
