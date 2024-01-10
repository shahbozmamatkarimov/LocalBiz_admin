<template>
  <main class="pb-10">
    <section>
      <div
        class="flex relative items-center h-[450px] px-10 w-full border border-dashed cursor-pointer border-gray-400"
        for="image1"
      >
        <img
          v-if="useProduct.store.getById?.images?.length"
          class="absolute top-0 w-full h-[450px] -mx-10 object-cover"
          :src="baseUrl + useProduct.store.getById?.images[0]?.image"
          alt=""
        />
        <div class="lg:space-y-3 sm:mt-5 mt-3 sm:space-y-2 z-10">
          <h1 class="lg:text-[40px] md:text-[32px] text-[28px] font-bold">
            {{ useProduct.store.getById.title }}
          </h1>
          <p class="lg:text-[24px] text-[20px] font-semibold">
            {{ useProduct.store.getById.location }}
          </p>
          <p
            v-if="useProduct.store.getById?.open_time?.length"
            class="lg:text-[24px] text-[16px] font-medium"
          >
            {{ useProduct.store.getById?.open_time[0] }}
          </p>
          <p
            v-if="useProduct.store.getById?.open_time?.length == 2"
            class="lg:text-[24px] text-[16px] font-medium"
          >
            {{ useProduct.store.getById?.open_time[1] }}
          </p>

          <div class="sm:flex gap-5">
            <a
              :href="`tel:${useProduct.store.getById.phone}`"
              type="button"
              class="flex items-center gap-2 bg-black sm:mt-5 mt-2 text-white lg:text-[22px] md:text-lg text-sm font-medium px-6 rounded-xl lg:h-[66px] md:h-[56px] h-10"
            >
              <img src="@/assets/svg/white_phone.svg" alt="" />
              <p class="lg:text-[24px] w-48 text-white text-[16px] font-medium">
                {{ useProduct.store.getById.phone }}
              </p>
            </a>
            <a :href="useProduct.store.getById.direction" target="_blank">
              <button
                type="button"
                class="bg-black sm:mt-5 mt-2 text-white lg:text-[22px] md:text-lg text-sm font-medium px-[50px] rounded-xl lg:h-[66px] md:h-[56px] h-10"
              >
                <p class="lg:text-[24px] w-48 text-white text-[16px]">
                  Get direction
                </p>
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
    <section
      class="space-y-[10px]"
      v-if="useProduct.store.getById?.images?.length"
    >
      <div v-show="i > 1" v-for="i in useProduct.store.getById?.images?.length">
        <div
          v-if="useProduct.store.getById?.images[i - 1]?.type == 'image'"
          class="flex relative items-center h-[450px] px-10 w-full border border-dashed cursor-pointer border-gray-400"
        >
          <img
            class="absolute top-0 w-full h-[450px] -mx-10 object-cover"
            :src="baseUrl + useProduct.store.getById?.images[0]?.image"
            alt=""
          />
        </div>
      </div>
    </section>

    <section
      v-if="checkFlyers(useProduct.store.getById?.images)"
      class="mt-10 space-y-[10px] w-1/2 mx-auto"
    >
      <h1 class="text-2xl font-medium mb-2">Flyers</h1>
      <div v-for="i in useProduct.store.getById?.images?.length">
        <div
          v-if="useProduct.store.getById?.images[i - 1]?.type == 'flyers'"
          class="flex relative items-center h-[750px] px-10 w-full cursor-pointer border-gray-400"
        >
          <img
            class="absolute top-0 w-full h-[750px] -mx-10 object-cover"
            :src="baseUrl + useProduct.store.getById?.images[0]?.image"
            alt=""
          />
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
import { useLoadingStore, useProductStore } from "@/store";

const runtime = useRuntimeConfig();
const baseUrl = runtime.public.BaseUrl.slice(0, -3);
const router = useRouter();
const isLoading = useLoadingStore();
const useProduct = useProductStore();
useProduct.store.update_id = router.currentRoute.value?.query?.category;
useProduct.getById();

function checkFlyers(images) {
  console.log(images);
  if (!images) {
    return;
  }
  for (let i of images) {
    if(i.type == "flyers") {
        return true
    }
  }
  return false;
}
</script>

<style lang="scss" scoped></style>
