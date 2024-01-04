<template>
  <aside class="border-r border-[#E6EFF5] min-w-[250px] w-[250px] overflow-hidden overflow-y-auto h-screen max-h-screen">
    <h1 class="px-10 py-6">
      <!-- <img src="@/assets/navbar/icon.svg" alt=""> -->
      <img src="@/assets/navbar/logo.svg" alt="">
    </h1>
    <div class="p-10 text-lg font-medium space-y-10">
      <router-link class="flex items-center gap-3" v-for="i in sidebar" :to="i.path"><img class="icon" :src="i.icon" alt=""> <img class="active hidden" :src="i._icon" alt=""> {{ i.title }}</router-link>
    </div>
  </aside>
</template>

<script setup>
import { sidebar } from "@/constants/sidebar";
</script>

<style lang="scss" scoped>
.router-link-exact-active {
  color: #1814F3;
  .active {
    display: block;
  }

  .icon {
    display: none;
  }
}
</style>
