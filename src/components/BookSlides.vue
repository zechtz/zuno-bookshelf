<script setup lang="ts"></script>

<template>
  <div class="carousel">
    <div class="book-list-intro">
      <div class="icon">
        <img class="img" src="@/assets/images/heroiconssolidbookopen1388-sgru.svg" />
        <h2 class="intro-text">Hot Reads</h2>
      </div>
    </div>
    <div class="carousel__container">
      <!-- <button class="carousel__prev"> -->
      <!--   <img src="@/assets/images/heroiconsoutlinearrowsmallright1404-ew0u.svg" alt="Previous" /> -->
      <!-- </button> -->
      <div class="carousel__items">
        <div class="carousel__item">
          <img src="@/assets/images/book-cover.png" alt="Image 1" />
        </div>
        <div class="carousel__item">
          <img src="@/assets/images/book-cover.png" alt="Image 1" />
        </div>
        <div class="carousel__item">
          <img src="@/assets/images/book-cover.png" alt="Image 1" />
        </div>
        <div class="carousel__item">
          <img src="@/assets/images/book-cover.png" alt="Image 1" />
        </div>
        <div class="carousel__item">
          <img src="@/assets/images/book-cover.png" alt="Image 1" />
        </div>
        <div class="carousel__item">
          <img src="@/assets/images/book-cover.png" alt="Image 1" />
        </div>
        <div class="carousel__item">
          <img src="@/assets/images/book-cover.png" alt="Image 1" />
        </div>
        <div class="carousel__item">
          <img src="@/assets/images/book-cover.png" alt="Image 1" />
        </div>
        <div class="carousel__item">
          <img src="@/assets/images/book-cover.png" alt="Image 1" />
        </div>
      </div>
      <button class="carousel__next">
        <img src="@/assets/images/heroiconsoutlinearrowsmallright1404-ew0u.svg" alt="Next" />
      </button>
    </div>
  </div>
</template>

<style scoped lang="scss">
.carousel {
  width: $box-width;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  padding: 0;
  top: 100px;
  left: -12px;

  &__container {
    display: flex;
    flex-direction: row;
    align-items: center;
    overflow-x: hidden;
    scrollbar-width: none;
    /* hide scrollbar in Firefox */
    -ms-overflow-style: none;

    /* hide scrollbar in IE and Edge */
    ::-webkit-scrollbar {
      width: 0;
      /* hide scrollbar in Chrome and Safari */
    }
  }

  &__items {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    padding: 10px;
    width: 100%;
    flex-shrink: 0;
  }

  &__item {
    flex-shrink: 0;
    margin-right: 10px;
    width: calc(100% / 5);
    /* adjust to the number of visible items */
    max-width: 240px;
    /* adjust to the size of your thumbnails */
    height: auto;

    img {
      border: 1px solid #dfdfdf;
      display: block;
      width: 100%;
      height: auto;
    }
  }

  &__prev,
  &__next {
    display: flex;
    justify-content: center;
    align-items: center;
    background: transparent;
    border: none;
    outline: none;
    cursor: pointer;
    margin: 10px;
    padding: 0;
    width: 20px;
    height: 20px;

    img {
      display: block;
      width: 100%;
      height: auto;
    }
  }

  &__next {
    transform: rotate(180deg);
  }

  .book-list-intro {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: $box-width;
    font-family: $primary-font;
    margin-left: 20px;

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
}
</style>
