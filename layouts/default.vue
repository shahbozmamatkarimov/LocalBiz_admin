<template>
  <header class="flex w-full">
    <Sidebar/>
    <div
    class="w-full bg-[#F5F7FA] overflow-hidden overflow-y-auto max-h-screen"
    >
    <Navbar />
      <slot></slot>
    </div>
  </header>
</template>

<script setup></script>

<style lang="scss" scoped></style>
