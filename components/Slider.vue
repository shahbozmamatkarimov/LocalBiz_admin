<template>
  <Swiper
    @slide-change-transition-end="setThumbsSwiper"
    class="rounded-[30px] overflow-hidden swiper-container"
    :modules="[SwiperAutoplay, SwiperEffectCreative]"
    :slides-per-view="1"
    :loop="true"
    :effect="'creative'"
    spaceBetween="30"
    :centeredSlides="true"
    :autoplay="{
      delay: 4000,
      disableOnInteraction: false,
    }"
    :creative-effect="{
      prev: {
        shadow: false,
        translate: ['-50%', 0, -1],
      },
      next: {
        translate: ['100%', 0, 0],
      },
    }"
  >
    <SwiperSlide v-for="i in 5">
      <div
        class="relative w-full carousel lg:h-[600px] md:h-[400px] sm:h-[300px] h-[250px]"
      >
        <img
          src="@/assets/images/slider.png"
          class="absolute block w-full h-full object-cover -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
          alt="..."
        />
        <div
          class="flex flex-col md:pl-[60px] sm:pl-[40px] pl-[20px] justify-center h-full w-1/2 absolute"
        >
          <h1
            data-aos="fade-up"
            class="lg:text-[54px] whitespace-nowrap md:text-[40px] sm:text-[32px] text-lg max-md:leading-10 leading-[60px] text-white"
          >
            Modern Interior <br />
            Design Studio {{ i }}
          </h1>
          <div
            class="flex whitespace-nowrap md:h-[50px] h-[40px] md:mt-[120px] mt-[60px] md:text-[16px] sm:text-sm text-xs space-x-4 font-medium text-white"
          >
            <button
              data-aos="fade-left"
              @click="$router.push('/products/1')"
              class="px-8 h-full bg-[#027DFC] rounded-[30px]"
            >
              Shop Now
            </button>
            <button
              data-aos="fade-right"
              @click="$router.push('/products/1')"
              class="border-2 border-white px-8 h-full rounded-[30px]"
            >
              Explore
            </button>
          </div>
        </div>
      </div>
    </SwiperSlide>
  </Swiper>
</template>
<script setup>
import { FreeMode, Navigation, Thumbs } from "swiper/modules";

const step = ref("1");

const setThumbsSwiper = (swiper) => {
  console.log(swiper);
  // swiper.activeIndex = 1;
  swiper.params.slidesPerGroup = 4;

  // Update the Swiper with the new configuration
  swiper.update();
  // thumbsSwiper.value = swiper;
};

onMounted(() => {
  step.value = "5";
});
</script>
