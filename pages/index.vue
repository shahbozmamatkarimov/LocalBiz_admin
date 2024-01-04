<template>
  <main class="m-10 bg-white rounded-[20px]">
    <section class="p-5">
      <ul class="grid grid-cols-5 gap-5 text-lg">
        <li class="cursor-pointer rounded-2xl p-5 bg-[#F5F7FA]">
          <div
            class="flex items-center justify-center rounded-full h-10 w-10 bg-[#FFE0EB]"
          >
            <img src="@/assets/navbar/user.svg" alt="" />
          </div>
          <p class="mt-4 mb-2 text-2xl font-medium leading-8">2000</p>
          <p class="font-medium text-[#425166]">Total Users</p>
        </li>
        <li class="cursor-pointer rounded-2xl p-5 bg-[#F5F7FA]">
          <div
            class="flex items-center justify-center rounded-full h-10 w-10 bg-[#E7EDFF]"
          >
            <img src="@/assets/navbar/business.svg" alt="" />
          </div>
          <p class="mt-4 mb-2 text-2xl font-medium leading-8">300</p>
          <p class="font-medium text-[#425166]">Total Businesses</p>
        </li>
        <li class="cursor-pointer rounded-2xl p-5 bg-[#F5F7FA]">
          <div
            class="flex items-center justify-center rounded-full h-10 w-10 bg-[#DCFAF8]"
          >
            <img src="@/assets/navbar/message.svg" alt="" />
          </div>
          <p class="mt-4 mb-2 text-2xl font-medium leading-8">520</p>
          <p class="font-medium text-[#425166]">Total Messages</p>
        </li>
        <li class="cursor-pointer rounded-2xl p-5 bg-[#F5F7FA]">
          <div
            class="flex items-center justify-center rounded-full h-10 w-10 bg-[#BF83FF]"
          >
            <img src="@/assets/svg/added_users.svg" alt="" />
          </div>
          <p class="mt-4 mb-2 text-2xl font-medium leading-8">8</p>
          <p class="font-medium text-[#425166]">New Users</p>
        </li>
        <li class="cursor-pointer rounded-2xl p-5 bg-[#F5F7FA]">
          <div
            class="flex items-center justify-center rounded-full h-10 w-10 bg-[#DCFAF8]"
          >
            <img src="@/assets/svg/notifications.svg" alt="" />
          </div>
          <p class="mt-4 mb-2 text-2xl font-medium leading-8">5</p>
          <p class="font-medium text-[#425166]">New messages</p>
        </li>
      </ul>
    </section>

    <div class="flex items-center justify-between px-5">
      <h1 class="mt-10 mb-5 text-xl font-semibold text-[#343C6A]">
        Recent Messages
      </h1>
      <p
        @click="$router.push('/messages')"
        class="cursor-pointer mt-10 mb-5 text-xl font-semibold text-[#1814F3]"
      >
        See all
      </p>
    </div>

    <section class="px-5 space-y-5">
      <ul
        v-for="i in 5"
        class="flex items-center shadow-md border-t justify-between px-10 gap-5 bg-white h-[90px] rounded-[20px]"
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
          <a
            class="bg-[#E7EDFF] h-[35px] px-5 flex items-center rounded-full"
            href="#"
            >Message</a
          >
        </li>
        <li class="whitespace-nowrap">
          <button
            class="text-[#718EBF] border border-[#718EBF] font-medium h-[35px] px-5 flex items-center rounded-full"
          >
            View Details
          </button>
        </li>
      </ul>
    </section>
  </main>
</template>

<script setup></script>

<style lang="scss" scoped></style>
