<template>
  <div class="py-6 px-8 flex">
    <div class="back mr-16 h-9 flex">
      <router-link to="/">
        <font-awesome-icon icon="fa-solid fa-arrow-left" size="xl" />
      </router-link>
    </div>
    <slot />
  </div>
</template>
