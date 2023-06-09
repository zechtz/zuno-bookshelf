<script setup lang="ts">
import { defineProps, ref } from "vue";

const emit = defineEmits(["optionSelected"]);

const props = defineProps({
  entries: {
    type: Array as () => Array<any>,
    required: true,
  },
  value: {
    type: Object as () => any,
    required: false,
  },
  label: {
    type: String,
    required: false,
  },
});

const selectedEntry = ref(props.value);

const handleSelectionChange = (event: Event) => {
  const selectedValue = (event.target as HTMLSelectElement).value;
  emit("optionSelected", JSON.parse(selectedValue));
  const selectedEntry = props.entries.find(
    (entry) => entry.value === selectedValue
  );
  if (selectedEntry) {
    selectedEntry.value = selectedValue;
  }
};
</script>

<template>
  <select
    class="custom-select"
    v-model="selectedEntry"
    @change="handleSelectionChange"
  >
    <option v-for="entry in entries" :value="JSON.stringify(entry)">
      {{ entry.label }}
    </option>
  </select>
</template>

<style scoped lang="scss">
$button-border-radius: 10px;
$input-bg-color: #faf8f8;

select {
  font-size: 1.5rem;
  border: none;
  width: 30%;
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

.custom-select {
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
</style>
