<template>
  <AppUserList>
    <template #secondrow="{ remove, item: user }">
      <a :href="'phone:' + user.email">{{ user.email }}</a> <br />
      <AppButton @click="remove(user)">{{ user.name.first }}</AppButton>
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
});
</script>

<style>
</style>
