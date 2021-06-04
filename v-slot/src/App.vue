<template>
  <AppUserList>
    <template #loading>
      <AppSpinner />
    </template>
    <template #userlist="{ list, remove }">
      <AppUserCardsList :list="list">
        <template #secondrow="{ item: user }">
          <AppButton @click="remove(user)">{{ user.name.first }}</AppButton>
        </template>
      </AppUserCardsList>
    </template>
  </AppUserList>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import AppUserList from "./components/AppUserList.vue";
import AppButton from "./components/AppButton.vue";
import AppSpinner from "./components/AppSpinner.vue";
import AppUserCardsList from "./components/AppUserCardsList.vue";

export default defineComponent({
  name: "App",
  components: {
    AppUserList,
    AppButton,
    AppSpinner,
    AppUserCardsList,
  },
});
</script>

<style>
</style>
