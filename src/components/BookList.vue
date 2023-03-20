<script setup lang="ts">
import { Book } from "@/data/service";
import BookItem from "components/BookItem.vue";

const props = defineProps({
  entries: {
    type: Array as () => Array<Book>,
    required: true,
  },
});
</script>

<template>
  <div class="book-list-intro">
    <div class="icon">
      <img class="img" src="@/assets/images/heroiconssolidbookopen1388-sgru.svg" />
      <h2 class="intro-text">Book Shelf</h2>
    </div>
  </div>
  <div class="card-grid">
    <div class="card" v-for="book in props.entries" :key="book.BibNum">
      <BookItem :book="book" />
    </div>
  </div>
</template>

<style scoped lang="scss">
$star-color: #f3d23e;

.book-list-intro {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: $box-width;
  font-family: $primary-font;

  .icon {
    display: flex;
    align-items: center;
    margin-right: 10px;

    .img {
      height: 24px;
      width: 24px;
      margin-right: 0;
    }

    .intro-text {
      margin-left: 5px;
      font-style: normal;
      font-weight: 400;
      font-size: 28px;
      line-height: 32px;
      color: #1e1e1e;
    }
  }
}

.card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(16%, 1fr));
  gap: 1rem;
  position: relative;
  width: $box-width;
  margin-bottom: 100px;

  .card {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    box-sizing: border-box;

    img {
      max-width: 100%;
      border: 1px solid #dfdfdf;
      width: 240px;
      height: 283px;
    }
  }
}
</style>
