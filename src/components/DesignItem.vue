<script setup lang="ts">
import { PropType } from "vue";
import { DesignItem } from "../types";

const props = defineProps({
  item: {
    type: Object as PropType<DesignItem>,
    required: true,
  },
});
</script>
<template>
  <router-link
    :to="{ name: 'single-design', params: { id: item.id } }"
    tag="div"
    class="w-full h-[440px]"
  >
    <div
      :style="{backgroundImage: `url('${item.images?.[0].path ?? ''}')`}"
      class="bg-no-repeat bg-cover w-full h-[90%] rounded-md"
    />
    <div class="w-full flex items-center pt-4 gap-x-2">
      <div class="label w-9 h-5 rounded-xl bg-white flex items-center justify-center text-xs">{{item.number}}</div>
      <p class="text-white">{{item.name}}</p>
    </div>
  </router-link>
</template>

<style lang=""></style>
