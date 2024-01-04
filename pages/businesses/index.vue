<template>
  <main>
    <section class="p-10 space-y-5">
      <ul v-for="i in 10" class="flex items-center justify-between px-10 gap-5 bg-white h-[90px] rounded-[20px]">
        <li class="min-w-[120px]">#{{ i }}</li>
        <li class="flex items-center gap-6 min-w-fit">
          <img src="@/assets/images/bussiness_img.svg" alt="" />
          <div class="space-y-2">
            <h1 class="font-medium text-lg">Bombay spice</h1>
            <p class="text-[#718EBF]">999 Upper james, Hilton, ON</p>
          </div>
        </li>
        <li class="flex items-center justify-center gap-10 w-full">
          <a class="flex items-center justify-center gap-2 bg-[#E7EDFF] h-[35px] px-5 rounded-full" href="#"
            ><img src="@/assets/svg/phone.svg" alt="" /> +1 365 888 4444</a
          >
          <a class="bg-[#E7EDFF] h-[35px] px-5 flex items-center rounded-full" href="#">Get direction</a>
        </li>
        <li class="whitespace-nowrap">
          <button class="text-[#718EBF] border border-[#718EBF] font-medium h-[35px] px-5 flex items-center rounded-full">View Details</button>

        </li>
      </ul>
    </section>
  </main>
</template>

<script setup></script>

<style lang="scss" scoped></style>
