<template>
  <main class="p-10">
    <section class="flex items-center justify-between mb-5">
      <h1></h1>
      <button
        v-if="
          useProduct.store.allData?.length &&
          !isLoading.isLoadingType('getAllProducts')
        "
        @click="$router.push('/businesses/add_business')"
        class="border border-[#718EBF] active:bg-[#718EBF] active:text-white text-[#718EBF] h-10 px-14 rounded-[10px] font-medium"
      >
        + Business
      </button>
    </section>
    <section class="space-y-5">
      <ul
        v-if="isLoading.isLoadingType('getAllProducts')"
        v-for="i in 10"
        class=""
      >
        <li class="bg-gray-200 h-[90px] animate-pulse rounded-[20px]"></li>
      </ul>
      <ul
        v-else-if="useProduct.store.allData?.length"
        v-for="i in useProduct.store.allData"
        class="flex items-center justify-between px-10 gap-5 bg-white h-[90px] rounded-[20px]"
      >
        <li class="min-w-[120px]">#{{ i.id }}</li>
        <li class="flex items-center gap-6 min-w-fit">
          <img
            class="h-[60px] w-[60px] rounded-[10px]"
            :src="baseUrl + i.images[0]?.image"
            alt=""
          />
          <div class="space-y-2 w-72">
            <h1 class="font-medium text-lg truncate">{{ i.title }}</h1>
            <p class="text-[#718EBF] truncate">{{ i.location }}</p>
          </div>
        </li>
        <li class="flex items-center justify-center gap-10 w-full">
          <a
            class="flex items-center justify-center gap-2 bg-[#E7EDFF] h-[35px] px-5 rounded-full"
            :href="`tel:${i.phone}`"
            ><img src="@/assets/svg/phone.svg" alt="" />{{ i.phone }}</a
          >
          <a
            class="bg-[#E7EDFF] h-[35px] px-5 flex items-center rounded-full"
            :href="i.direction"
            target="_blank"
            >Get direction</a
          >
        </li>
        <li class="whitespace-nowrap">
          <button
            @click="$router.push(`businesses/show_details?category=${i.id}`)"
            class="text-[#718EBF] border border-[#718EBF] font-medium h-[35px] px-5 flex items-center rounded-full"
          >
            View Details
          </button>
        </li>
        <li class="flex gap-2">
          <button
            @click="editCategory(i.id)"
            class="border border-[#232323] h-10 w-10 flex items-center justify-center rounded-full"
          >
            <img src="@/assets/svg/edit.svg" alt="" />
          </button>
          <button
            @click="
              () => {
                isLoading.modal.delete = true;
                useProduct.store.update_id = i.id;
              }
            "
            class="border border-[red] h-10 w-10 flex items-center justify-center rounded-full"
          >
            <img src="@/assets/svg/delete.svg" alt="" />
          </button>
        </li>
      </ul>
      <ul
        v-else
        class="flex items-center justify-center h-[calc(100vh_-_250px)]"
      >
        <li class="text-center space-y-4">
          <h1 class="text-2xl">Businesses not found</h1>
          <button
            @click="$router.push('/businesses/add_business')"
            class="border border-[#718EBF] active:bg-[#718EBF] active:text-white text-[#718EBF] h-10 px-14 rounded-[10px] font-medium"
          >
            + Business
          </button>
        </li>
      </ul>
    </section>

    <section class="flex items-center justify-between my-10">
      <nav
        class="isolate inline-flex -space-x-px rounded-md shadow-sm"
        aria-label="Pagination"
      >
        <button
          v-if="useProduct.store.pagination.total_pages > 0"
          @click="returnPage"
          :class="useProduct.store.pagination.currentPage == 1 ? 'bg-gray-300' : ''"
          class="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 focus:z-20 focus:outline-offset-0"
        >
          <svg
            class="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fill-rule="evenodd"
              d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z"
              clip-rule="evenodd"
            />
          </svg>
        </button>
        <button
          @click="
            () => {
              useProduct.store.pagination.currentPage =
                useProduct.store.pagination?.currentPage > 5 ? useProduct.store.pagination?.currentPage + i - 5 : i;
              useProduct.get_data();
            }
          "
          v-for="i in useProduct.store.pagination?.total_pages >= 5
            ? 5
            : useProduct.store.pagination?.total_pages"
          :key="i"
          :class="
            useProduct.store.pagination.currentPage ==
            (useProduct.store.pagination?.currentPage > 5 ? useProduct.store.pagination?.currentPage + i - 5 : i)
              ? 'bg-[#718EBF] text-white'
              : ''
          "
          class="relative inline-flex items-center hover:bg-[#E7EDFF] px-4 py-2 text-sm font-semibold ring-1 ring-inset ring-gray-300 focus:z-20 focus:outline-offset-0"
        >
          {{ useProduct.store.pagination?.currentPage > 5 ? useProduct.store.pagination?.currentPage + i - 5 : i }}
        </button>
        <button
          v-if="useProduct.store.pagination?.total_pages > 0"
          @click="addPage"
          :class="
            useProduct.store.pagination?.total_pages <= useProduct.store.pagination?.currentPage
              ? 'bg-gray-300'
              : ''
          "
          class="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 focus:z-20 focus:outline-offset-0"
        >
          <svg
            class="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fill-rule="evenodd"
              d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
              clip-rule="evenodd"
            />
          </svg>
        </button>
      </nav>
    </section>

    <!---------------- delete modal ----------------------->
    <el-dialog
      v-if="isMount"
      v-model="isLoading.modal.delete"
      width="500"
      style="border-radius: 16px"
      class="max-w-fit rounded-2xl p-5 min-w-[500px] mx-auto"
      align-center
      close-icon="false"
    >
      <div class="flex justify-between items-center w-full">
        <h1 class="font-medium text-2xl leading-[29px]">Delete business</h1>
        <img
          @click="isLoading.modal.delete = false"
          class="hover:bg-[#027ffc3a] p-2 rounded-lg cursor-pointer"
          src="@/assets/svg/x.svg"
          alt="x"
        />
      </div>
      <p class="mt-12 text-[16px] leading-[19px]">
        Are you sure you want to delete this business?
      </p>
      <div>
        <button
          @click="useProduct.delete_data()"
          class="bg-[#027DFC] h-10 rounded-full overflow-hidden text-white mt-10 w-full"
          v-loading="isLoading.isLoadingType('modal')"
        >
          Submit
        </button>
        <button
          @click="isLoading.modal.delete = false"
          class="h-[40px] rounded-[10px] mt-4 w-full"
        >
          Discard
        </button>
      </div>
    </el-dialog>

    <!-- edit modal -->
    <el-dialog
      v-if="isMount"
      v-model="isLoading.modal.edit"
      style="border-radius: 16px"
      width="500"
      class="rounded-2xl p-5 min-w-[500px]"
      align-center
      close-icon="false"
    >
      <div class="flex justify-between items-center w-full">
        <h1
          class="flex gap-[14px] items-center font-medium text-2xl leading-[29px]"
        >
          Edit Business
        </h1>
        <img
          @click="isLoading.closeModal"
          class="hover:bg-[#027ffc3a] p-2 rounded-lg cursor-pointer"
          src="@/assets/svg/x.svg"
          alt="x"
        />
      </div>
      <form
        v-loading="isLoading.isLoadingType('getById')"
        :class="
          isLoading.isLoadingType('modal')
            ? 'pointer-events-none animate-pulse'
            : ''
        "
        @submit.prevent="handleSubmit"
      >
        <div class="mt-8">
          <div>
            <div class="space-y-1">
              <div class="grid gap-3">
                <el-select
                  v-model="useProduct.create.category_id"
                  class="mb-5 category_select border rounded-full overflow-hidden"
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
                <input
                  v-model="useProduct.create.title"
                  type="text"
                  class="w-full"
                  placeholder="Title"
                  required
                />
                <input
                  v-model="useProduct.create.location"
                  type="text"
                  class="w-full"
                  placeholder="Location"
                  required
                />
                <input
                  v-model="useProduct.create.open_time[0]"
                  type="text"
                  class="w-full"
                  placeholder="Open time"
                  required
                />
                <input
                  v-model="useProduct.create.open_time[1]"
                  type="text"
                  class="w-full"
                  placeholder="Open time"
                />
                <input
                  v-model="useProduct.create.direction"
                  type="text"
                  class="w-full"
                  placeholder="Direction"
                />
              </div>
            </div>
          </div>
        </div>
        <button
          class="h-10 overflow-hidden w-full bg-[#027DFC] mt-8 text-sm leading-4 font-medium text-white rounded-full"
        >
          Submit
          <Loading />
        </button>
      </form>
    </el-dialog>
  </main>
</template>

<script setup>
import { useLoadingStore, useProductStore, useCategoryStore } from "@/store";
const runtime = useRuntimeConfig();
const baseUrl = runtime.public.BaseUrl.slice(0, -3);
const isLoading = useLoadingStore();
const useProduct = useProductStore();
const useCategory = useCategoryStore();

useCategory.get_data();
useProduct.get_data();

const isMount = ref(false);

function editCategory(id) {
  isLoading.modal.edit = true;
  useProduct.store.update_id = id;
  useProduct.getById(id);
}

function handleSubmit() {
  useProduct.update_data();
}

function addPage() {
  if (useProduct.store.pagination.total_pages <= useProduct.store.pagination?.currentPage) return;
  useProduct.store.pagination.currentPage += 1;
  useProduct.get_data();
}

function returnPage() {
  if (useProduct.store.pagination?.currentPage < 2) return;
  useProduct.store.pagination.currentPage -= 1;
  useProduct.get_data();
}

onMounted(() => {
  isMount.value = true;
});
</script>

<style lang="scss" scoped></style>
