<script setup lang="ts">
import { BookType, getCheckoutData, getMediaTypes } from "@/data/service";
import BookList from "components/BookList.vue";
import BookSearch from "components/BookSearch.vue";
import { Book, getMedia } from "@/data/service";
import { computed, onMounted, reactive } from "vue";

interface Data {
  books: Array<Book>;
  categories: Array<BookType>;
  selectedCategory: BookType;
}
const data: Data = reactive({
  books: [] as Array<Book>,
  categories: [] as Array<BookType>,
  selectedCategory: {} as BookType,
});

onMounted(() => {
  const media = getMedia();
  const categories = getMediaTypes();
  data.books = media;
  data.categories = categories;
});

// just return 15 books
// TODO: maybe add pagination?
const filteredData = computed(() => {
  return data.books.splice(0, 15);
});

const mappedCategories = computed(() => {
  return data.categories.map((category) => ({
    ...category,
    label: `${category.Description} (${category.FormatGroup})`,
  }));
});

// NOTE: async this when fetching data from API
/**
 * Assumption is the only way to filter books by type is thorough checkout data
 * @param category: BookType
 * @return Array<Book>
 */
const filterBooksByType = (category: BookType) => {
  data.selectedCategory = category;
  const checkedData = getCheckoutData();
  const books = getMedia();

  const checkoutData = checkedData.find(
    (_data) => _data.ItemType === category.Code
  );

  let results: Array<Book> = [];

  if (checkoutData) {
    results = books.filter((entry) => entry.ItemType === checkoutData.ItemType);
  }

  data.books = results;
};

// filter from already filtered books if selected category is present?
const filterBooksByTitlte = (title: string) => {
  const books = getMedia();

  const results = books.filter((book: Book) =>
    book.Title.toLowerCase().includes(title.toLowerCase())
  );

  data.books = results;
};
</script>

<template>
  <div class="book-wrapper">
    <div class="book-components-wrapper">
      <BookSearch
        :entries="mappedCategories"
        @option-selected="filterBooksByType"
        @on-search="filterBooksByTitlte"
      />
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

.book-components-wrapper {
  margin-top: 150px;
  width: $box-width;
  position: relative;
}
</style>
