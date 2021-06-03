<template>
  <AppUserList>
    <template #secondrow="{ item }">
      <a :href="'tel:' + item.phone"> {{ item.phone }}</a>
      <a :href="'mailto:' + item.email"> {{ item.email }}</a>
    </template>
    <template #loading>
      <AppSpinner />
    </template>
  </AppUserList>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import AppUserList from "./components/AppUserList.vue";
import AppSpinner from "./components/AppSpinner.vue";

export default defineComponent({
  name: "App",
  components: {
    AppUserList,
    AppSpinner,
  },
});
</script>

<style>
</style>
