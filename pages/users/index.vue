<template>
  <main>
    <section class="p-10 space-y-5">
      <ul
        v-for="i in 10"
        class="flex items-center justify-between px-10 gap-5 bg-white h-[90px] rounded-[20px]"
      >
        <li class="min-w-[120px]">#{{ i }}</li>
        <li class="flex items-center gap-6 min-w-fit">
          <img src="@/assets/svg/user_placeholder.svg" alt="" />
          <div class="space-y-2">
            <h1 class="font-medium text-lg">John Doe</h1>
          </div>
        </li>
        <li class="flex items-center justify-center gap-10 w-full">
          <a href="#">example@email.com</a>
        </li>
        <li class="whitespace-nowrap">
          <button
            class="text-[red] border border-[red] font-medium h-[35px] px-5 flex items-center rounded-full"
          >
            Block
          </button>
        </li>
      </ul>
    </section>
  </main>
</template>

<script setup></script>

<style lang="scss" scoped></style>
