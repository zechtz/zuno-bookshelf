<script setup lang="ts">
import { Book } from "@/data/service";

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
      <img
        class="img"
        src="@/assets/images/heroiconssolidbookopen1388-sgru.svg"
      />
      <h2 class="intro-text">Book Shelf</h2>
    </div>
  </div>
  <div class="card-grid">
    <div class="card" v-for="book in props.entries" :key="book.BibNum">
      <div class="bookmark-container">Bookmark</div>
      <img src="@/assets/images/book-cover.png" alt="Image description" />
      <div class="card-info">
        <h2>{{ book.Title }}</h2>
        <div class="card-footer">
          <span class="book-author">{{ book.Author }}</span>
          <div class="rating">
            <img
              src="@/assets/images/heroiconssolidstar1344-r5uc.svg"
              alt="book.Title"
            />
            <span>5.0</span>
          </div>
        </div>
      </div>
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

    .bookmark-container {
      display: flex;
      justify-content: end;
      align-items: end;
      position: absolute;
    }

    .card-info {
      width: 100%;
      text-align: left;
      color: #000;
      font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS",
        sans-serif;

      h2 {
        font-size: 25px;
        color: #1e1e1e;
        text-align: left;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        font-style: normal;
        font-weight: 600;
        line-height: 30px;
      }

      .book-author {
        font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS",
          sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 23px;

        color: rgba(0, 0, 0, 0.68);
      }

      .card-footer {
        position: relative;
        width: 216px;
        height: 92px;
        top: -15px;
        font-size: 18px;
        font-weight: bold;
        color: #595858;

        .rating {
          display: flex;
          align-items: center;
          position: relative;
          top: 10px;

          img {
            width: 25px;
            height: 25px;
            cursor: pointer;
          }

          span {
            margin-left: 8px;
            font-size: 20px;
            font-weight: 400;
          }
        }
      }
    }
  }
}
</style>
