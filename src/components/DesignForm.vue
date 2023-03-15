<script setup lang="ts">
import { AppButton, ImagesGallery } from ".";
import { useForm } from "vee-validate";
import { computed, PropType, ref } from "vue";
import { DesignItem, Image } from "../types";
import { image } from "@vee-validate/rules";

type FormData = Omit<DesignItem, "id" | "images" | "number"> & {
  number: number | null;
};

const schema = {
  name: "required|min:3",
  number: "required",
  url: "required|url",
};

const props = defineProps({
  design: {
    type: Object as PropType<DesignItem>,
    required: false,
  },
});
const emits = defineEmits(["submitForm"]);

const images = ref<Image[]>(props.design?.images ?? []);

const { handleSubmit, values, errors } = useForm<FormData>({
  validationSchema: schema,
  initialValues: {
    name: props.design?.name ?? "",
    number: props.design?.number ?? null,
    isPublished: props.design?.isPublished ?? false,
    url: props.design?.url ?? "",
  },
});

const submitForm = handleSubmit((values) => {
  emits("submitForm", {
    ...values,
    id: props.design?.id ?? null,
    isPublished: values.isPublished ?? false,
    images: images.value
  });
});

const siPublishLabel = computed(() =>
  values.isPublished ? "Опублікований" : "Неопублікований"
);

const changeImages = (newImages: Image[]) => {
  images.value = newImages;
};
</script>

<template>
  <div class="main flex w-full justify-between">
    <div class="w-[600px]">
      <div class="design-form">
        <form>
          <label class="relative inline-flex items-center cursor-pointer mb-10">
            <vee-field
              type="checkbox"
              class="sr-only peer"
              name="isPublished"
              :value="true"
            />
            <div
              class="w-[4.25rem] h-7 bg-gray-200 rounded-full peer peer-checked:after:translate-x-[2.5rem] peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all dark:border-gray-600 peer-checked:bg-green-600"
            />
            <span class="ml-3 text-md font-medium text-gray-900">
              {{ siPublishLabel }}
            </span>
          </label>

          <div class="mb-10">
            <images-gallery
              :images="images" 
              :init-images="props.design?.images"
              @change="changeImages"
            />
          </div>

          <div class="flex justify-between mb-6">
            <div class="w-[80px]">
              <vee-field
                name="number"
                :class="{ 'border-red-500': errors.hasOwnProperty('number') }"
                class="border border-gray-300 focus:border-gray-700 focus-visible:outline-none text-sm rounded-[3px] block w-full px-5 py-2"
                placeholder="###"
              />
            </div>
            <div class="w-5/6">
              <vee-field
                name="name"
                :class="{ 'border-red-500': errors.hasOwnProperty('name') }"
                class="border border-gray-300 focus:border-gray-700 focus-visible:outline-none text-sm rounded-[3px] block w-full px-5 py-2"
                placeholder="Назва дизайну"
              />
            </div>
          </div>
          <div class="w-full">
            <vee-field
              name="url"
              :class="{ 'border-red-500': errors.hasOwnProperty('url') }"
              class="border border-gray-300 focus:border-gray-700 focus-visible:outline-none text-sm rounded-[3px] block w-full px-5 py-2"
              placeholder="https://design###.horoshop.ua/"
            />
          </div>
        </form>
      </div>
    </div>
    <div class="actions flex justify-end items-baseline gap-x-3">
      <slot name="actions"></slot>
      <app-button @click="submitForm" label="Зберегти і вийти" />
    </div>
  </div>
</template>
