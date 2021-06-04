<template>
  <AppUserList>
    <template #secondrow="{ item, remove }">
      <a :href="'phone:' + item.email">{{ item.email }}</a> <br />
      <AppButton @click="log(item.name.first)">remove</AppButton>
      <AppButton @click="remove(item)">{{ item.name.first }}</AppButton>
    </template>
    <template #loading>
      <AppSpinner />
    </template>
  </AppUserList>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import AppUserList from "./components/AppUserList.vue";
import AppButton from "./components/AppButton.vue";
import AppSpinner from "./components/AppSpinner.vue";

export default defineComponent({
  name: "App",
  components: {
    AppUserList,
    AppButton,
    AppSpinner,
  },
  methods: {
    log(text: string): void {
      console.log(text);
    },
  },
});
</script>

<style>
</style>
