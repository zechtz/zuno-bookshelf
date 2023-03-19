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
  </div>
</template>

<style scoped lang="scss">
$button-border-radius: 50px;

.cta-container {
  display: flex;
  justify-content: space-between;
  width: $box-width;
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
  letter-spacing: 0px;
  margin-left: 3px;
  margin-top: 0px;
  font-family: "Gill Sans", sans-serif;
}
</style>
