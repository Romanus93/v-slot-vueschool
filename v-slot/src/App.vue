<template>
  <AppUserList>
    <template :secondrow="(user) => user.email"> </template>
    <template #loading>
      <AppSpinner />
    </template>
  </AppUserList>
  <h2>ex</h2>
  <props-function :func="(par) => par + 'k'"></props-function>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import AppUserList from "./components/AppUserList.vue";
import AppSpinner from "./components/AppSpinner.vue";
import PropsFunction from "./components/PropsFunction.vue";

export default defineComponent({
  name: "App",
  components: {
    AppUserList,
    AppSpinner,
    PropsFunction,
  },
});
</script>

<style>
</style>
