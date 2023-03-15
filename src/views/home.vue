<script setup lang="ts">
import { AppContainer, AppButton, DesignItem, AppLoader } from "../components";
import { onMounted } from "vue";
import { useDesingsStore } from "../store/designsStore";

const designsStore = useDesingsStore();

onMounted(() => {
  designsStore.getInitDesigns();
});
</script>

<template>
  <app-loader v-show="designsStore.isLoading" />
  <div class="bg-primary w-full h-full">
    <app-container>
      <div class="py-6 px-8">
        <div class="flex justify-between align-middle">
          <h2 class="text-2xl font-normal text-white">Всі дизайни</h2>
          <router-link :to="{ name: 'new-design' }">
            <app-button label="Додати дизайн" />
          </router-link>
        </div>

        <div
          class="grid h-full grid-cols-[repeat(auto-fill,_300px)] py-6 justify-between gap-y-14"
        >
          <design-item
            v-for="design in designsStore.list"
            :key="design.id"
            :item="design"
          />
        </div>
      </div>
    </app-container>
  </div>
</template>
