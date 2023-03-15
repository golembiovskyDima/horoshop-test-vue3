<script setup lang="ts">
import { onMounted, onUnmounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import { AppContainer, DesignForm, AppLoader, AppButton } from "../components";
import { SingleDesign } from "../layouts";
import { useDesingsStore } from "../store/designsStore";
import { DesignItem } from "../types";

const designsStore = useDesingsStore();
const route = useRoute();
const router = useRouter();

onMounted(() => {
  (async () => {
    if (route.params.id) {
      await designsStore.getDesign(Number(route.params.id));
      if(!designsStore.currentDesign) {
        router.push("/");

      }
    }
  })();
});
onUnmounted(() => {
  designsStore.resetCurrent();
});

const submitFormHandle = (values: DesignItem) => {
  designsStore.updateDesign(values);
  router.push("/");
};

const deleteHandle = () => {
  designsStore.deleteDesign(Number(route.params.id));
  router.push("/");
};
</script>

<template>
  <app-loader v-show="designsStore.isLoading" />
  <div class="w-full h-full">
    <app-container>
      <single-design v-if="designsStore.currentDesign">
        <design-form
          :design="designsStore.currentDesign"
          @submit-form="submitFormHandle"
        >
          <template #actions>
            <app-button
              @click="deleteHandle"
              variant="secondary"
              label="Видалити"
            />
          </template>
        </design-form>
      </single-design>
    </app-container>
  </div>
</template>
