<template>
  <AppUserList>
    <template #listItem="user">
      <pre>
        {{ user }}
      </pre>
    </template>
    <template #loading>
      <AppSpinner />
    </template>
    <template #footer> hhhhhhhhhh </template>
  </AppUserList>
  <h2>ex</h2>
  <props-function :func="(par) => par + 'k'" :type="ask"></props-function>
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
  data() {
    return {
      ask: "hi",
    };
  },
  methods: {
    ad: (par: any): void => console.log(par),
  },
});
</script>

<style>
</style>
