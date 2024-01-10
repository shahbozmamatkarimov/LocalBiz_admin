import { defineStore } from "pinia";
import axios from "axios";
import { useNotification } from "@/composables/notification";
import { useLoadingStore } from "@/store";

export const useProductStore = defineStore("product", () => {
  const isLoading = useLoadingStore();
  const { showError, showSuccess } = useNotification();

  const runtime = useRuntimeConfig();
  const baseUrl = runtime.public.BaseUrl + "/product";
  const router = useRouter();

  const store = reactive({
    allData: [],
    getById: "",
    update_id: "",
    pagination: {
        currentPage: 1,
    },
  });

  const create = reactive({
    title: "",
    location: "",
    open_time: [],
    phone: "",
    direction: "",
    category_id: "",
  });

  const files = reactive({
    images: [],
    flyers: [],
  });

  function create_data() {
    axios
      .post(baseUrl, create)
      .then((res) => {
        console.log(res);
        if (res.data?.statusCode == 200) {
          showSuccess("Uploading images ...");
          set_files(res.data?.data?.product?.id);
        }
      })
      .catch((err) => {
        console.log(err);
        showError(err.response?.data?.message);
      });
  }

  function set_files(id) {
    if (files.images?.length) {
      for (let i of files.images?.reverse()) {
        const formData = new FormData();
        formData.append("image", i);
        formData.append("type", "image");
        formData.append("product_id", id);
        axios
          .post(runtime.public.BaseUrl + "/image", formData)
          .then((res) => {
            console.log(res);
            if (res.data?.statusCode == 200) {
              router.push("/businesses");
            }
          })
          .catch((err) => {
            console.log(err);
            showError(err.response?.data?.message);
          });
      }
      showSuccess("Images uploaded successfully");
    }
    if (files.flyers?.length) {
      for (let i of files.flyers?.reverse()) {
        const formData = new FormData();
        formData.append("image", i);
        formData.append("type", "flyers");
        formData.append("product_id", id);
        axios
          .post(runtime.public.BaseUrl + "/image", formData)
          .then((res) => {
            console.log(res);
            if (res.data?.statusCode == 200) {
            }
          })
          .catch((err) => {
            console.log(err);
            showError(err.response?.data?.message);
          });
      }
      showSuccess("Flyers uploaded successfully");
    }
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
        showError(err.response?.data?.message);
      });
  }

  function get_data() {
    isLoading.addLoading("getAllProducts");
    axios
      .get(baseUrl + `/pagination/${store.pagination.currentPage}/10`)
      .then((res) => {
        console.log(res);
        store.allData = res.data?.data?.records;
        store.pagination = res.data?.data?.pagination;
        isLoading.removeLoading("getAllProducts");
      })
      .catch((err) => {
        console.log(err);
        showError(res.response?.data?.message);
        isLoading.removeLoading("getAllProducts");
      });
  }

  function getById() {
    isLoading.addLoading("getById");
    axios
      .get(baseUrl + `/${store.update_id}`)
      .then((res) => {
        console.log(res);
        const data = res.data?.data?.product;
        create.title = data.title;
        create.location = data.location;
        create.open_time = data.open_time;
        create.phone = data.phone;
        create.direction = data.direction;
        create.category_id = data.category_id;
        store.getById = data;
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
        showSuccess(res.data?.message);
      })
      .catch((err) => {
        console.log(err);
        showError(err.response?.data?.message);
        isLoading.removeLoading("getAllData");
      });
  }

  return {
    store,
    create,
    files,
    create_data,
    get_data,
    update_data,
    getById,
    delete_data,
  };
});
