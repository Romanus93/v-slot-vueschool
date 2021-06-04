<template>
  <AppUserList>
    <template #secondrow="{ item }">
      <a :href="'phone:' + item.email">{{ item.email }}</a> <br />
      <button>remove</button>
    </template>
    <template #loading>
      <AppSpinner />
    </template>
  </AppUserList>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import AppUserList from "./components/AppUserList.vue";

export default defineComponent({
  name: "App",
  components: {
    AppUserList,
  },
});
</script>

<style>
</style>
