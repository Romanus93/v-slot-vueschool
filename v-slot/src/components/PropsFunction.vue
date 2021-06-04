<template>
  <h1>hello</h1>
  {{ func("hi") }}
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    func: {
      type: Function,
      default: () => {},
    },
  },
});
</script>

<style scoped>
</style>