<template>
  <nav class="sticky top-0 flex items-center justify-between z-50 h-[100px] bg-white px-10">
    <h1 class="text-[#343C6A] text-3xl font-semibold">Businesses</h1>
    <div class="relative flex items-center">
      <img class="absolute left-5" src="@/assets/navbar/search.svg" alt="" />
      <input class="!px-14 text-lg min-w-[560px] w-full" type="text" placeholder="Search for something" />
      <img class="absolute right-5 cursor-pointer" src="@/assets/navbar/filter.svg" alt="" />
    </div>
    <div class="flex gap-3 items-center">
      <img src="@/assets/navbar/user_placeholder.svg" alt="" />
      <ul class="space-y-2">
        <li class="text-sm">John Doe</li>
        <li class="text-[#718EBF] text-xs">john@gmail.com</li>
      </ul>
    </div>
  </nav>
</template>

<script setup></script>

<style lang="scss" scoped></style>
