<script setup lang="ts">
import TopHeaderContainer from "@/components/containers/TopHeaderContainer.vue";
import BookListContainer from "@/components/containers/BookListContainer.vue";
import FooterContainer from "@/components/containers/FooterContainer.vue";
import { onMounted, reactive } from "vue";
import { getMedia } from "@/data/service";

interface Data {
  books: Array<Book>;
}
const data: Data = reactive({
  books: [],
});

onMounted(() => {
  const media = getMedia();
  console.log("media", media.default);
  data.books = media;
});
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
