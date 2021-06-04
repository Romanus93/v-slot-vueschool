<template>
  <AppUserList>
    <template #userlist="{ list, count }">
      {{ count }}
      <AppUserCardsList :list="list" />
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
import AppUserCardsList from "./components/AppUserCardsList.vue";

export default defineComponent({
  name: "App",
  components: {
    AppUserList,
    AppSpinner,
    AppUserCardsList,
  },
});
</script>

<style>
</style>
