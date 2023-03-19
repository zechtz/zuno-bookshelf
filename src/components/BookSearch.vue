<script setup lang="ts">
const handleChange = (event: Event) => {
  console.log("event", event);
};
</script>
<template>
  <div class="search-container">
    <select class="zuno-select" @change="handleChange($event)">
      <option value="all">All Categories</option>
      <option value="books">Books</option>
      <option value="magazines">Magazines</option>
      <option value="newspapers">Newspapers</option>
    </select>
    <div class="vertical-divider"></div>
    <div class="search-input-container">
      <input type="text" class="search-input" placeholder="Find a book you like..." />
      <button class="search-button">
        <span class="search-label">Search</span>
        <i class="fas fa-search"></i>
      </button>
    </div>
  </div>
</template>

<style scoped lang="scss">
$button-border-radius: 10px;
$input-bg-color: #faf8f8;

.search-container {
  display: flex;
  align-items: center;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  width: 100%;
  margin: 20px auto;
  background-color: $input-bg-color;

  select {
    font-size: 1.5rem;
    border: none;
    width: 20%;
    border-radius: 4px;
    height: 60px;
    background-color: $input-bg-color;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    margin-right: 1rem;
    display: inline-block;
    line-height: 1.5em;
    padding: 0.5em 3.5em 0.5em 1em;

    margin: 0;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;

    :-moz-focusring {
      color: transparent;
      text-shadow: 0 0 0 #000;
    }
  }

  .zuno-select {
    background-image: linear-gradient(45deg, transparent 50%, gray 50%),
      linear-gradient(135deg, gray 50%, transparent 50%),
      linear-gradient(to right, #ccc, #ccc);
    background-position: calc(100% - 20px) calc(1em + 2px),
      calc(100% - 15px) calc(1em + 2px), calc(100% - 2.5em) 0.5em;
    background-size: 5px 5px, 5px 5px, 1px 1.5em;
    background-repeat: no-repeat;

    :focus {
      background-image: linear-gradient(45deg, gray 50%, transparent 50%),
        linear-gradient(135deg, transparent 50%, gray 50%),
        linear-gradient(to right, #ccc, #ccc);
      background-position: calc(100% - 15px) 1em, calc(100% - 20px) 1em,
        calc(100% - 2.5em) 0.5em;
      background-size: 5px 5px, 5px 5px, 1px 1.5em;
      background-repeat: no-repeat;
      outline: 0;
    }
  }

  .vertical-divider {
    height: 100%;
    border-left: 2px solid #000;
  }

  .search-input-container {
    display: flex;
    align-items: center;
    flex: 1;
    height: 45px;
    border: none;
    border-radius: 4px;
    background-color: #fff;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

    .search-input {
      flex-grow: 1;
      padding: 0.5rem 0.5rem 0.5rem 2rem;
      height: 100%;
      font-size: 1.5rem;
      border: none;
      border-radius: 4px;
      box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
      background-color: $input-bg-color;
      outline: none;

      ::placeholder {
        color: $primary-color;
      }
    }

    .search-button {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
      padding: 0.5rem;
      border: none;
      border-radius: 4px;
      background-color: #1c3f3a;
      color: #fff;
      cursor: pointer;
      height: 60px;
      width: 200px;
      border-radius: $button-border-radius;
      transition: background-color 0.2s ease-in-out;

      &:hover {
        background-color: #0e2724;
      }

      .search-label {
        margin-right: 0.5rem;
      }

      i {
        font-size: 1rem;
        color: #fff;
      }
    }
  }
}
</style>
