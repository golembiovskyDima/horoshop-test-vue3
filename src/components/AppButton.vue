<script setup lang="ts">
import { computed, PropType } from "vue";

type Variant = "primary" | "secondary";
type Variants = {
  primary: string[];
  secondary: string[];
  [key: string]: string[];
};

const variants: Variants = {
  primary: [
    "text-white",
    "bg-button-primary",
    "border-blue-500",
    "hover:bg-blue-500",
  ],
  secondary: [
    "text-red-600",
    "bg-white",
    "border-gray-300",
    "hover:bg-gray-300",
  ],
};

const props = defineProps({
  label: {
    type: String,
    required: true,
  },
  type: {
    type: String as PropType<"button" | "submit" | "reset">,
    default: "button",
  },
  variant: {
    type: String as PropType<Variant>,
    default: "primary",
  },
});

const emits = defineEmits(["click"]);

const styles = computed(() => variants[props.variant]);
</script>
<template>
  <button
    :type="type"
    class="btn px-4 py-1 text-sm font-normal rounded border border-solid"
    :class="[...styles]"
    @click="emits('click')"
  >
    {{ label }}
  </button>
</template>

<style lang=""></style>
