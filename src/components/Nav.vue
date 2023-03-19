<script setup lang="ts"></script>

<template>
  <nav class="navigation">
    <div class="left-container">
      <div class="logo">
        <img src="@/assets/images/logo_1.png" alt="Logo" class="logo-image" />
        <h1 class="logo-text">Zuno Library</h1>
      </div>
      <ul class="menu">
        <li class="menu-item active"><a href="#">Home</a></li>
        <li class="menu-item"><a href="#">Category</a></li>
        <li class="menu-item"><a href="#">Popular</a></li>
        <li class="menu-item"><a href="#">My Picks</a></li>
      </ul>
    </div>
    <div class="icons">
      <div class="cart">
        <img src="@/assets/images/cart.svg" alt="Shopping Cart" />
      </div>
      <div class="avatar">
        <img src="@/assets/images/rectangle_5.png" alt="User Avatar" />
      </div>
    </div>
  </nav>
</template>

<style scoped lang="scss">
.navigation {
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  top: 50px;
  height: 80px;
  padding: 0 20px;
  width: $box-width;

  .left-container {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    height: 80px;
    width: $box-width;
  }

  .logo {
    display: flex;
    align-items: center;
    margin-right: 10px;

    .logo-image {
      height: 40px;
      margin-right: 0;
    }

    .logo-text {
      color: #1c3f3a;
      font-size: 24px;
      font-style: italic;
      font-family: "Gill Sans", sans-serif;
      margin-right: 5px;
    }
  }

  .menu {
    display: flex;
    align-items: center;
    margin-right: 20px;
    list-style: none;
    font-family: "Gill Sans", sans-serif;

    .menu-item {
      margin-right: 20px;

      &.active {
        background-color: #fff;
        border-radius: 30px;
        padding: 10px 45px;
      }

      a {
        color: #1c3f3a;
        text-decoration: none;
        font-size: 18px;

        &:hover {
          text-decoration: none;
        }
      }
    }
  }

  .icons {
    display: flex;
    align-items: center;

    .avatar {
      img {
        height: 30px;
        border-radius: 100%;
      }
    }

    .cart {
      margin-right: 10px;

      img {
        height: 30px;
      }
    }
  }
}
</style>
