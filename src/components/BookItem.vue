<script setup lang="ts">
import { Book } from "@/data/service";

const props = defineProps({
  book: {
    type: Object as () => Book,
    required: true,
  },
});
</script>

<template>
  <div class="bookmark-container">
    <img src="@/assets/images/heroiconssolidbookmark1284-sll.svg" />
  </div>
  <img src="@/assets/images/book-cover.png" alt="Image description" />
  <div class="card-info">
    <h2>
      <a href="#">{{ props.book.Title }}</a>
    </h2>
    <div class="card-footer">
      <span class="book-author">{{ props.book.Author }}</span>
      <div class="rating">
        <img
          src="@/assets/images/heroiconssolidstar1344-r5uc.svg"
          alt="props.book.Title"
        />
        <span>5.0</span>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
$star-color: #f3d23e;

.card {
  display: flex;
  flex-direction: column;

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
    position: relative;

    img {
      width: 30px;
      height: 30px;
      position: relative;
      top: 45px;
      left: 90px;
      cursor: pointer;
    }
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

      a {
        text-decoration: none;
        @extend h2;
      }
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
</style>
