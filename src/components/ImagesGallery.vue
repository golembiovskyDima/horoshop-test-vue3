<script setup lang="ts">
import { PropType, ref, watch } from "vue";
import { useDropzone } from "vue3-dropzone";
import { Image } from "../types";

const emits = defineEmits(["submit", "change"]);
const props = defineProps({
  images: {
    type: Array as PropType<Image[]>,
    default: [],
  },
});

const onDrop = (acceptFiles: File[]) => {
  const freeLength = 4 - (props.images?.length ?? 0);
  emits("change", [
    ...props.images,
    ...acceptFiles
      .slice(0, freeLength)
      .map((item) => ({ path: `/src/assets/${item.name}` })),
  ]);
};

const { getRootProps, getInputProps, ...rest } = useDropzone({
  disabled: (props.images.length ?? 0) >= 4,
  onDrop,
  maxFiles: 4,
  accept: ["image/png", "image/jpeg"],
});

const removeImage = (index: number) => {
  emits(
    "change",
    props.images.filter((item, idx) => index !== idx)
  );
};
</script>

<template>
  <div
    v-bind="getRootProps()"
    v-if="!images?.length"
    class="h-[120px] w-full border-2 border-dashed border-gray-200 rounded-md bg-[url(/src/assets/gallery-empty.png)] bg-no-repeat bg-center cursor-pointer"
  >
    <input v-bind="getInputProps()" />
  </div>
  <div v-else class="flex gap-x-4">
    <div
      v-for="(image, index) in images"
      :key="index"
      class="group w-[120px] relative h-full"
    >
      <img :src="image.path" class="" />
      <div
        class="group-hover:bg-white group-hover:bg-opacity-40 absolute top-0 left-0 w-full h-full"
      />
      <font-awesome-icon
        icon="fa-solid fa-trash"
        class="hidden cursor-pointer group-hover:block absolute bottom-3 right-3"
        @click="removeImage(index)"
      />
    </div>
    <div
      v-if="images.length < 4"
      v-bind="getRootProps()"
      class="h-[120px] w-[120px] border-2 border-dashed border-gray-200 rounded-md bg-[url(/src/assets/plus.png)] bg-no-repeat bg-center cursor-pointer"
    >
      <input v-bind="getInputProps()" />
    </div>
  </div>
</template>
