<script setup lang="ts">
import { BookType, getCheckoutData } from "@/data/service";
import BookList from "@/components/BookList.vue";
import BookSearch from "@/components/BookSearch.vue";
import { Book, getMedia } from "@/data/service";
import { computed, onMounted, reactive } from "vue";

interface Data {
  books: Array<Book>;
}
const data: Data = reactive({
  books: [] as Array<Book>,
});

onMounted(() => {
  const media = getMedia();
  data.books = media;
});

const filteredData = computed(() => {
  return data.books.splice(0, 15);
});

// NOTE: async this when fetching data from API
/**
 * Assumption is the only way to filter books by type is thorough checkout data
 * @param category: BookType
 * @return Array<Book>
 */
const filterData = (category: BookType) => {
  const checkedData = getCheckoutData();
  const entries = getMedia();

  const checkoutData = checkedData.find(
    (_data) => _data.ItemType === category.Code
  );

  let results: Array<Book> = [];

  if (checkoutData) {
    results = entries.filter(
      (entry) => entry.ItemType === checkoutData.ItemType
    );
  }

  data.books = results;
};
</script>

<template>
  <div class="book-wrapper">
    <div class="book-container">
      <BookSearch @option-selected="filterData" />
      <BookList :entries="filteredData" />
    </div>
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
