<template>
  <main class="p-10">
    <section v-if="useCategory.store.allData?.length && !isLoading.isLoadingType('getAllData')" class="flex items-center justify-between mb-5">
      <h1></h1>
      <button
        @click="
          () => {
            isLoading.modal.create = true;
            isLoading.modal.edit = false;
          }
        "
        class="border border-[#718EBF] active:bg-[#718EBF] active:text-white text-[#718EBF] h-10 px-14 rounded-[10px] font-medium"
      >
        + Category
      </button>
    </section>
    <section class="space-y-5">
      <ul v-if="isLoading.isLoadingType('getAllData')" class="space-y-5">
        <li
          v-for="i in 10"
          class="flex items-center justify-between px-10 gap-5 bg-gray-200 animate-pulse h-[90px] rounded-[20px]"
        ></li>
      </ul>
      <ul
        v-else-if="useCategory.store.allData?.length"
        v-for="i in useCategory.store.allData"
        class="flex items-center justify-between px-10 gap-5 bg-white h-[90px] rounded-[20px]"
      >
        <li class="min-w-[120px]">#{{ i.id }}</li>
        <li>
          <h1 class="font-medium whitespace-nowrap text-lg">{{ i.title }}</h1>
        </li>
        <li class="flex items-center justify-center gap-10 w-full">
          <a href="#">{{ i.description }}</a>
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
                useCategory.store.update_id = i.id;
              }
            "
            class="border border-[red] h-10 w-10 flex items-center justify-center rounded-full"
          >
            <img src="@/assets/svg/delete.svg" alt="" />
          </button>
        </li>
      </ul>
      <ul v-else
        class="flex items-center justify-center h-[calc(100vh_-_250px)]"
      >
        <li class="text-center space-y-4">
          <h1 class="text-2xl">Categories not found</h1>
          <button
            @click="
              () => {
                isLoading.modal.create = true;
                isLoading.modal.edit = false;
              }
            "
            class="border border-[#718EBF] active:bg-[#718EBF] active:text-white text-[#718EBF] h-10 px-14 rounded-[10px] font-medium"
          >
            + Category
          </button>
        </li>
      </ul>
    </section>

    <!-- create and edit modal -->
    <el-dialog
      v-if="isMount"
      v-model="isLoading.modal.create"
      style="border-radius: 16px"
      width="500"
      class="rounded-2xl p-5 min-w-[500px]"
      align-center
      close-icon="false"
    >
      <div class="flex justify-between items-center w-full">
        <h1
          v-if="!isLoading.modal.edit"
          class="flex gap-[14px] items-center font-medium text-2xl leading-[29px]"
        >
          <i class="bx bxs-group"></i>
          Add category
        </h1>
        <h1
          v-else
          class="flex gap-[14px] items-center font-medium text-2xl leading-[29px]"
        >
          <i class="bx bxs-group"></i>
          Edit category
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
                <input
                  v-model="useCategory.create.title"
                  type="text"
                  class="w-full"
                  placeholder="Name"
                  required
                />
                <input
                  v-model="useCategory.create.description"
                  type="text"
                  class="w-full"
                  placeholder="Description"
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
        <h1 class="font-medium text-2xl leading-[29px]">Delete category</h1>
        <img
          @click="isLoading.modal.delete = false"
          class="hover:bg-[#027ffc3a] p-2 rounded-lg cursor-pointer"
          src="@/assets/svg/x.svg"
          alt="x"
        />
      </div>
      <p class="mt-12 text-[16px] leading-[19px]">
        Are you sure you want to delete this category?
      </p>
      <div>
        <button
          @click="useCategory.delete_data()"
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
  </main>
</template>

<script setup>
import { useLoadingStore, useCategoryStore } from "@/store";

const isMount = ref(false);
const isLoading = useLoadingStore();
const useCategory = useCategoryStore();

useCategory.get_data();

function editCategory(id) {
  isLoading.modal.edit = true;
  isLoading.modal.create = true;
  useCategory.store.update_id = id;
  useCategory.getById(id);
}

function handleSubmit() {
  if (isLoading.modal.edit) {
    useCategory.update_data();
  } else {
    useCategory.create_data();
  }
}

onMounted(() => {
  isMount.value = true;
});
</script>

<style lang="scss" scoped></style>
