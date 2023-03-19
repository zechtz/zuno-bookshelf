<script setup lang="ts"></script>

<template>
  <div class="footer-wrapper">
    <nav class="footer">
      <div class="logo">
        <img src="@/assets/images/logo_1.png" alt="Logo" class="logo-image" />
        <h1 class="logo-text">Zuno Library</h1>
      </div>
      <div class="copyright">
        <p>All rights reserved. Copyright Zuno Library. 2023</p>
      </div>
    </nav>
  </div>
</template>

<style scoped lang="scss">
.footer-wrapper {
  margin-top: 100px;
  width: 100%;
  background-color: $primary-color;
  display: flex;
  align-items: center;
  justify-content: center;

  .footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    height: 80px;
    padding: 0 20px;
    width: $box-width;
    font-family: "Gill Sans", sans-serif;

    .logo {
      display: flex;
      align-items: center;
      margin-right: 10px;

      .logo-image {
        height: 40px;
        margin-right: 0;
      }

      .logo-text {
        color: #fff;
        font-size: 20px;
        font-weight: 100;
        font-style: italic; // Make logo text italic
        margin-right: 5px;
      }
    }

    .copyright {
      color: #fff;
    }
  }
}
</style>
