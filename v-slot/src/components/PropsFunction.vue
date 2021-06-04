<template>
  <h1>hello</h1>
  {{ func("hi") }}
  <a :href="url">{{ type }}</a>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    func: {
      type: Function,
      default: () => {},
    },
    type: {
      type: String,
    },
  },
  data() {
    return {
      url: "https://www.naver.com",
    };
  },
});
</script>

<style scoped>
</style>