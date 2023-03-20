<script setup lang="ts">
import { defineProps, ref } from "vue";

const emit = defineEmits(["onSubmit"]);

const props = defineProps({
  label: {
    type: String,
    required: false,
  },
});

let value = ref<string>(null);

const submitData = () => {
  emit("onSubmit", value.value);
};
</script>

<template>
  <div class="search-input-container">
    <input
      type="text"
      v-model="value"
      class="search-input"
      :placeholder="props.label"
    />
    <button class="search-button" type="submit" @click="submitData">
      <span class="search-label">Search</span>
      <i class="fas fa-search"></i>
    </button>
  </div>
</template>

<style scoped lang="scss">
$button-border-radius: 10px;
$input-bg-color: #faf8f8;

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
</style>
