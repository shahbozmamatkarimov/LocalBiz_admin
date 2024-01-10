<template>
  <main class="pb-10">
    <form @submit.prevent="handleSubmit">
      <h1 class="text-3xl font-medium my-4 px-2">Select Category</h1>
      <el-select
        v-model="useProduct.create.category_id"
        class="m-2 mb-5 category_select"
        placeholder="Select"
        size="large"
        v-loading="isLoading.isLoadingType('getAllData')"
        required
      >
        <el-option
          v-for="item in useCategory.store.allData"
          :key="item.title"
          :label="item.title"
          :value="item.id"
        />
      </el-select>
      <section>
        <label
          class="flex relative items-center h-[450px] px-10 w-full border border-dashed cursor-pointer border-gray-400"
          for="image1"
        >
          <img
            v-if="store.image1"
            class="absolute top-0 w-full h-[450px] -mx-10 object-cover"
            :src="store.image1"
            alt=""
          />
          <div class="lg:space-y-3 sm:mt-5 mt-3 sm:space-y-2 z-10">
            <div class="relative">
              <input
                v-model="useProduct.create.title"
                type="text"
                id="floating_filled"
                class="block bg-transparent lg:text-[40px] md:text-[32px] text-[28px] font-bold rounded-t-lg rounded-none px-0 pb-2.5 pt-5 w-full text-gray-900 border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              />
              <label
                for="floating_filled"
                class="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-7 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
                >Title</label
              >
            </div>
            <div class="relative">
              <input
                v-model="useProduct.create.location"
                type="text"
                id="floating_filled"
                class="block bg-transparent lg:text-[24px] text-[20px] font-semibold rounded-t-lg rounded-none px-0 pb-2.5 pt-5 w-full text-gray-900 border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder="999 Upper james, Hamilton, ON"
                required
              />
              <label
                for="floating_filled"
                class="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] hidden peer-focus:block peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
                >Location</label
              >
            </div>
            <div class="relative">
              <input
                v-model="useProduct.create.open_time[0]"
                type="text"
                id="floating_filled"
                class="block bg-transparent lg:text-[24px] text-[16px] font-medium rounded-t-lg rounded-none px-0 pb-2.5 pt-5 w-full text-gray-900 border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder="Monday - Friday: 9:00 a.m to 9.00 p.m"
                required
              />
              <label
                for="floating_filled"
                class="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] hidden peer-focus:block peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-5 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
                >Hours</label
              >
            </div>
            <div class="relative">
              <input
                v-model="useProduct.create.open_time[1]"
                type="text"
                id="floating_filled"
                class="block bg-transparent lg:text-[24px] text-[16px] font-medium rounded-t-lg rounded-none px-0 pb-2.5 pt-5 w-full text-gray-900 border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder="Saturday & Sunday: 9:00 a.m to 6.00 p.m"
                required
              />
              <label
                for="floating_filled"
                class="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] hidden peer-focus:block peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-5 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
                >Hours</label
              >
            </div>

            <div class="sm:flex gap-5">
              <button type="button" 
                class="flex items-center gap-2 bg-black sm:mt-5 mt-2 text-white lg:text-[22px] md:text-lg text-sm font-medium px-6 rounded-xl lg:h-[66px] md:h-[56px] h-10"
              >
                <img src="@/assets/svg/white_phone.svg" alt="" />
                <div class="relative pb-3">
                  <input
                    v-model="useProduct.create.phone"
                    type="tel"
                    id="floating_filled"
                    class="block lg:text-[24px] w-48 text-white text-[16px] bg-transparent font-medium rounded-t-lg rounded-none px-0 pb-2.5 pt-5 border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder="+1 365 888 4444"
                    required
                  />
                  <label
                    for="floating_filled"
                    class="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] hidden peer-focus:block peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-5 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
                    >Phone</label
                  >
                </div>
              </button>
              <button type="button"
                class="bg-black sm:mt-5 mt-2 text-white lg:text-[22px] md:text-lg text-sm font-medium px-[50px] rounded-xl lg:h-[66px] md:h-[56px] h-10"
              >
                <div class="relative pb-3">
                  <input
                    v-model="useProduct.create.direction"
                    type="text"
                    id="floating_filled"
                    class="block lg:text-[24px] w-48 text-white text-[16px] bg-transparent font-medium rounded-t-lg rounded-none px-0 pb-2.5 pt-5 border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder="https://location_link"
                    required
                  />
                  <label
                    for="floating_filled"
                    class="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] hidden peer-focus:block peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-5 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
                    >Direction link</label
                  >
                </div>
              </button>
            </div>
          </div>
        </label>
        <input
          @change="(e) => handleImage(e, 'image1')"
          class="h-0 w-0 overflow-hidden p-0"
          type="file"
          id="image1"
        />
      </section>
      <section>
        <div v-for="i in store.step">
          <label
            class="flex relative items-center h-[450px] px-10 w-full border border-dashed cursor-pointer border-gray-400"
            :for="`images${i}`"
          >
            <img
              :v-if="store.images[`image${i}`]"
              class="absolute top-0 w-full h-[450px] -mx-10 object-cover"
              :src="store.images[`image${i}`]"
              alt=""
            />
          </label>
          <input
            @change="(e) => handleImage(e, 'images', i)"
            class="h-0 w-0 overflow-hidden p-0"
            type="file"
            :id="`images${i}`"
          />
        </div>
        <button type="button"
          v-if="store.step < 3"
          @click="addImage"
          class="border border-[#718EBF] active:bg-[#718EBF] active:text-white text-[#718EBF] h-10 px-14 rounded-[10px] font-medium"
        >
          + image
        </button>
      </section>

      <section class="mt-10 w-1/2 mx-auto">
        <h1 class="text-2xl font-medium mb-2">Add flyers</h1>
        <div v-for="i in store.flyer_step">
          <label
            class="flex relative items-center h-[750px] px-10 w-full border border-dashed cursor-pointer border-gray-400"
            :for="`flyer${i}`"
          >
            <img
              :v-if="store.flyers[`flyer${i}`]"
              class="absolute top-0 w-full h-[750px] -mx-10 object-contain"
              :src="store.flyers[`flyer${i}`]"
              alt=""
            />
          </label>
          <input
            @change="(e) => handleImage(e, 'flyer', i)"
            class="h-0 w-0 overflow-hidden p-0"
            type="file"
            :id="`flyer${i}`"
          />
        </div>
        <button type="button"
          v-if="store.flyer_step < 2"
          @click="addFlyer"
          class="border border-[#718EBF] active:bg-[#718EBF] active:text-white text-[#718EBF] h-10 px-14 rounded-[10px] font-medium"
        >
          + flyer
        </button>
      </section>
      <div class="flex justify-center">
        <button
          class="border bg-[#027DFC] my-10 border-[#718EBF] active:bg-[#718EBF] active:text-white text-white h-10 px-14 rounded-[10px] font-medium"
        >
          Submit
        </button>
      </div>
      <div class="flex justify-center">
        <button
          type="button"
          class="border border-[#027DFC] active:bg-[#718EBF] active:text-white text-[#027DFC] h-10 px-14 rounded-[10px] font-medium"
        >
          Discard
        </button>
      </div>
    </form>
  </main>
</template>

<script setup>
import { useLoadingStore, useProductStore, useCategoryStore } from "@/store";
import { useNotification } from "@/composables/notification";

const { showWarning } = useNotification();
const isLoading = useLoadingStore();
const useProduct = useProductStore();
const useCategory = useCategoryStore();
useCategory.get_data();

const store = reactive({
  image1: "",
  images: {
    image1: null,
  },
  flyers: {
    flyer1: null,
  },
  step: 0,
  flyer_step: 1,
});

function addImage() {
  store.step++;
  store.images[`image${store.step}`] = null;
}

function addFlyer() {
  store.flyer_step++;
  store.flyers[`flyer${store.flyer_step}`] = null;
}

function handleImage(e, type, step) {
  const file = e.target.files[0];
  const imageURL = URL.createObjectURL(file);
  console.log(imageURL);
  if (type == "image1") {
    store.image1 = imageURL;
    useProduct.files.images.push(file);
  } else if (type == "images") {
    store.images[`image${step}`] = imageURL;
    useProduct.files.images.push(file);
  } else if (type == "flyer") {
    store.flyers[`flyer${step}`] = imageURL;
    useProduct.files.flyers.push(file);
  }
}

function handleSubmit() {
  if (!useProduct.files.images?.length) {
    showWarning("Please upload a image");
    return;
  } else if (!useProduct.create.category_id) {
    showWarning("Please select a category");
    document.querySelector(".category_select input").focus();
    return;
  }
  useProduct.create_data();
}
</script>

<style lang="scss" scoped></style>
