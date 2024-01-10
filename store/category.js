import { defineStore } from "pinia";
import axios from "axios";
import { useNotification } from "@/composables/notification";
import { useLoadingStore } from "@/store";

export const useCategoryStore = defineStore("category", () => {
  const isLoading = useLoadingStore();
  const { showError, showSuccess } = useNotification();

  const runtime = useRuntimeConfig();
  const baseUrl = runtime.public.BaseUrl + "/category";

  const store = reactive({
    allData: [],
    update_id: "",
  });

  const create = reactive({
    title: "",
    description: "",
  });

  function create_data() {
    axios
      .post(baseUrl, create)
      .then((res) => {
        console.log(res);
        if (res.data?.statusCode == 200) {
          showSuccess(res.data.message);
          isLoading.closeModal();
          get_data();
        }
      })
      .catch((err) => {
        console.log(err);
        showError("There is such a category");
      });
  }

  function update_data() {
    axios
      .put(baseUrl + `/${store.update_id}`, create)
      .then((res) => {
        console.log(res);
        if (res.data?.statusCode == 200) {
          showSuccess(res.data.message);
          isLoading.closeModal();
          get_data();
        }
      })
      .catch((err) => {
        console.log(err);
        showError("There is such a category");
      });
  }

  function get_data() {
    isLoading.addLoading("getAllData");
    axios
      .get(baseUrl)
      .then((res) => {
        console.log(res);
        store.allData = res.data?.data?.categories;
        isLoading.removeLoading("getAllData");
      })
      .catch((err) => {
        console.log(err);
        showError("There is such a category");
        isLoading.removeLoading("getAllData");
      });
  }

  function getById() {
    isLoading.addLoading("getById");
    axios
      .get(baseUrl + `/${store.update_id}`)
      .then((res) => {
        console.log(res);
        const data = res.data?.data?.category;
        create.title = data.title;
        create.description = data.description;
        isLoading.removeLoading("getById");
      })
      .catch((err) => {
        console.log(err);
        showError(err.response?.data?.message);
        isLoading.removeLoading("getById");
      });
  }

  function delete_data() {
    isLoading.addLoading("getAllData");
    axios
      .delete(baseUrl + `/${store.update_id}`)
      .then((res) => {
        console.log(res);
        get_data();
        isLoading.closeModal();
        showSuccess(res.data?.message)
      })
      .catch((err) => {
        console.log(err);
        showError(err.response?.data?.message);
        isLoading.removeLoading("getAllData");
      });
  }

  return { store, create, create_data, get_data, update_data, getById, delete_data };
});
