<script setup lang="ts"></script>

<template>
  <div class="cta-container">
    <div>
      <h1>
        Get your <strong class="favourite">favourite</strong><br />
        <span class="books"><strong>books</strong></span> all in
        <span class="one-place"><strong>one place</strong></span>
      </h1>
      <a href="#" class="button">View Categories</a>
    </div>
    <div class="hero-image">
      <img src="../../assets/images/man_on-chair.png" />
    </div>
  </div>
</template>

<style scoped lang="scss">
$primary-color: #1c3f3a;
$button-border-radius: 50px;

.cta-container {
  display: flex;
  justify-content: space-between;
  padding: 0 20px 0 60px;
  width: 80%;
  text-align: left;
}

h1 {
  font-family: "Gill Sans", sans-serif;
  color: $primary-color;
  font-size: 4rem;
  text-align: left;
  line-height: 1;
  font-weight: normal;

  strong {
    font-weight: bold;
  }
}

.button {
  display: inline-block;
  padding: 12px 30px;
  border-radius: $button-border-radius;
  background-color: $primary-color;
  color: #fff;
  text-decoration: none;
  font-size: 20px;
  letter-spacing: 2px;
  margin-top: 5px;
  font-family: "Gill Sans", sans-serif;
}

.hero-image {
  position: relative;

  img {
    position: absolute;
    top: -100px;
    right: -65px;
  }
}
</style>
