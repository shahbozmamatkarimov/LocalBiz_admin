import { defineStore } from "pinia";
import axios from "axios";

export const useLoadingStore = defineStore("loading", () => {
  const runtime = useRuntimeConfig();
  const baseUrl = runtime.public.baseURL;

  const store = reactive({
    searchOptions: [],
    loadingTypes: [],
    allData: {},
    pageName: "",
    isSearching: false,
    pagination: { groups: 1, students: 1, tests: 1 },
    pageData: {},
    calendarModal: false,
    paginationStep: "",
    isOpenSidebar: false,
    isOpen: false,
  });

  const pagination = reactive({
    pageName: "groups",
  });

  const user = reactive({});

  const modal = reactive({
    create: false,
    edit: false,
    delete: false,
  });

  const searchDate = reactive({
    start_date: "",
    end_date: "",
  });

  const search = reactive({
    search: {},
    searchType: {},
  });

  function addLoading(type) {
    if (!store.loadingTypes?.includes(type)) {
      store.loadingTypes.push(type);
    }
  }

  function removeLoading(type) {
    if (store.loadingTypes?.includes(type)) {
      store.loadingTypes = store.loadingTypes?.filter(
        (fruit) => fruit !== type
      );
    }
  }

  function closeModal() {
    modal.create = false;
    modal.edit = false;
    modal.delete = false;
  }

  function getTime(data) {
    data = new Date(data);
    let hour = data.getHours();
    let minute = data.getMinutes();
    hour = String(hour).length == 1 ? "0" + hour : hour;
    minute = String(minute).length == 1 ? "0" + minute : minute;
    const dateTime = hour + ":" + minute;
    return dateTime;
  }

  function isLoadingType(type) {
    return store.loadingTypes?.includes(type);
  }

  return {
    user,
    closeModal,
    store,
    modal,
    pagination,
    searchDate,
    search,
    addLoading,
    removeLoading,
    isLoadingType,
    getTime,
  };
});
