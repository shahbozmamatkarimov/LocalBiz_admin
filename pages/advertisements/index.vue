<template>
  <main class="p-10">
    <section
      class="slider_main relative lg:h-[450px] md:h-[400px] sm:h-[380px] h-[240px] rounded-[20px] bg-[#F4F3F9]"
    >
      <img
        class="absolute top-0 left-0"
        src="@/assets/svg/slide_top.svg"
        alt=""
      />
      <div
        class="slider flex items-center justify-between lg:px-[100px] md:px-10 px-5 lg:gap-[320px] h-full"
      >
        <div class="title_slider lg:space-y-3 sm:space-y-2 z-10">
          <h1 class="lg:text-[20px] text-[16px] font-medium">Product name</h1>
          <p class="lg:text-[30px] md:text-[24px] text-[20px] font-semibold">
            50$
          </p>
          <p class="lg:text-[40px] md:text-[32px] text-[28px] font-bold">
            Bombay Spice
          </p>
          <div>
            <button
              class="bg-black sm:mt-5 mt-2 text-white lg:text-[22px] md:text-lg text-sm font-medium px-10 rounded-xl lg:h-[66px] md:h-[56px] h-10"
            >
              Explore more
            </button>
          </div>
        </div>
        <div class="flex slider_images lg:gap-6 gap-4">
          <div class="md:block hidden space-y-[21px]">
            <img
              class="object-cover rounded-[6px] lg:h-[106px] h-[99.5px] lg:w-[90px] w-[70px]"
              src="@/assets/images/slide1.png"
              alt=""
            />
            <img
              class="object-cover rounded-[6px] lg:h-[106px] h-[99.5px] lg:w-[90px] w-[70px]"
              src="@/assets/images/slide2.png"
              alt=""
            />
            <img
              class="object-cover rounded-[6px] lg:h-[106px] h-[99.5px] lg:w-[90px] w-[70px]"
              src="@/assets/images/slide3.png"
              alt=""
            />
          </div>
          <img
            class="image_slider object-cover rounded-[12px] lg:h-[360px] md:h-[340px] h-[220px] lg:w-[270px] md:w-[250px] w-[170px]"
            src="@/assets/images/slide.png"
            alt=""
          />
        </div>
      </div>
    </section>
  </main>
</template>

<script setup></script>

<style lang="scss" scoped></style>
