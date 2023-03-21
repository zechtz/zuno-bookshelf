<script setup lang="ts">
import { onMounted, reactive, ref } from "vue";

// NOTE: this component should probably be accepting slide props and just slide
const carousel = ref<HTMLDivElement>();

const data = reactive({
  slides: [1, 2, 3, 4, 5, 6, 7, 8],
  carouselStyles: {},
  step: "",
  transitioning: false,
});

onMounted(() => {
  setStep();
  resetTranslate();
});

const setStep = () => {
  const carouselWidth = carousel?.value?.scrollWidth;
  const totalCards = data.slides.length;
  if (carouselWidth) {
    data.step = `${carouselWidth / totalCards}px`;
  }
};

const nextSlide = () => {
  if (data.transitioning) return;

  data.transitioning = true;

  moveLeft();

  afterTransition(() => {
    const slide: number = data.slides.shift();
    data.slides.push(slide);
    resetTranslate();
    data.transitioning = false;
  });
};

const prevSlide = () => {
  if (data.transitioning) return;

  data.transitioning = true;

  moveRight();

  afterTransition(() => {
    const slide = data.slides.pop();
    data.slides.unshift(slide);
    resetTranslate();
    data.transitioning = false;
  });
};

const moveLeft = () => {
  data.carouselStyles = {
    transform: `translateX(-${data.step}) translateX(-${data.step})`,
  };
};

const moveRight = () => {
  data.carouselStyles = {
    transform: `translateX(${data.step}) translateX(-${data.step})`,
  };
};

const afterTransition = (callback: Function) => {
  const listener = () => {
    callback();
    carousel?.value?.removeEventListener("transitionend", listener);
  };
  carousel?.value?.addEventListener("transitionend", listener);
};

const resetTranslate = () => {
  data.carouselStyles = {
    transition: "none",
    transform: `translateX(-${data.step})`,
  };
};
</script>

<template>
  <div class="carousel-wrapper">
    <div class="book-list-intro">
      <div class="icon">
        <img
          class="img"
          src="@/assets/images/heroiconssolidbookopen1388-sgru.svg"
        />
        <h2 class="intro-text">Hot Reads</h2>
      </div>
    </div>
    <div class="carousel" ref="carousel" :style="data.carouselStyles">
      <div class="card" v-for="slide in data.slides" :key="slide">
        <img src="@/assets/images/book-cover.png" alt="Image 1" />
      </div>
    </div>
    <div class="navigation-container">
      <div class="prev" @click="prevSlide"></div>
      <div class="next" @click="nextSlide">
        <img
          src="@/assets/images/heroiconsoutlinearrowsmallright1404-ew0u.svg"
        />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.carousel-wrapper {
  width: $box-width;
  overflow: hidden;
  position: relative;
  top: 145px;
  margin-bottom: -20px;
  display: flex;
  flex-direction: column;

  .carousel {
    transition: transform 0.2s;
    white-space: nowrap;

    .card {
      width: 240px;
      margin-right: 10px;
      display: inline-flex;
      height: 280px;
      background-color: #39b1bd;
      color: white;
      align-items: center;
      justify-content: center;

      img {
        border: 1px solid #dfdfdf;
        display: block;
        width: 100%;
        height: auto;
      }
    }
  }

  .navigation-container {
    display: flex;
    position: relative;
    top: -180px;
    justify-content: space-between;

    .next,
    .prev {
      cursor: pointer;

      img {
        background: #fff;
        height: 60px;
        border-radius: 100%;
        padding: 10px;
        border: 1px solid #dfdfdf;
      }
    }
  }

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
}
</style>
