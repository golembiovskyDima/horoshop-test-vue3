<script setup lang="ts">
import { AppContainer } from "../components";
</script>

<template>
  <div class="flex w-full h-full min-h-screen">
    <div class="flex justify-center py-2 w-10 bg-panel">
      <img class="h-6 w-6" src="../assets/logo.png" alt="logo" />
    </div>
    <div class="w-[calc(100%_-_2.5rem)]">
      <router-view></router-view>
    </div>
  </div>
</template>
