<script setup lang="ts">
import { useRouter } from "vue-router";
import { AppContainer, DesignForm } from "../components";
import { SingleDesign } from "../layouts";
import { useDesingsStore } from "../store/designsStore";
import { NewDesign } from "../types";

const designsStore = useDesingsStore();
const router = useRouter();

const submitFormHandle = (values: NewDesign) => {
  designsStore.addNewDesign(values);
  router.push("/");
};

</script>

<template>
  <div class="w-full h-full">
    <app-container>
      <single-design>
        <design-form @submit-form="submitFormHandle" />
      </single-design>
    </app-container>
  </div>
</template>
