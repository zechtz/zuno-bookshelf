<script setup lang="ts">
import Select from "components/form/Select.vue";
import Input from "components/form/Input.vue";
import { BookType } from "@/data/service";
import { reactive } from "vue";

const props = defineProps({
  entries: {
    type: Array as () => Array<BookType>,
    required: true,
  },
});

// make this generic?
interface Data<T> {
  selectedCategory: T;
}

const emit = defineEmits(["optionSelected", "onSearch"]);

const data: Data<BookType> = reactive({
  selectedCategory: {} as BookType,
});

const filterBooksByCategory = (category: BookType) => {
  emit("optionSelected", category);
};

const filterBooksByTitle = (value: string) => {
  emit("onSearch", value);
};
</script>

<template>
  <div class="search-container">
    <Select
      :entries="props.entries"
      v-model="data.selectedCategory"
      @optionSelected="filterBooksByCategory"
    />
    <div class="vertical-divider"></div>
    <Input label="Find the book you like..." @on-submit="filterBooksByTitle" />
  </div>
</template>

<style scoped lang="scss">
$input-bg-color: #faf8f8;

.search-container {
  display: flex;
  align-items: center;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  width: 100%;
  position: relative;
  top: -30px;
  background-color: $input-bg-color;

  .vertical-divider {
    height: 100%;
    border-left: 2px solid #000;
  }
}
</style>
