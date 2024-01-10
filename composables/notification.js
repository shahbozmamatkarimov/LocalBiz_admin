import { ElMessage } from 'element-plus'

export const useNotification = () => {
  // const key = "updatable";

  const showLoading = (messageContent) => {
    // message.loading({ content: messageContent, key: key, duration: 100 });
    ElMessage({
      showClose: true,
      message: messageContent,
      type: "success",
    });
  };

  const showSuccess = (messageContent) => {
    ElMessage({
      showClose: true,
      message: messageContent,
      type: "success",
    });
  };

  const showWarning = (messageContent) => {
    ElMessage({
      showClose: true,
      message: messageContent,
      type: "warning",
    });
  };

  const showError = (messageContent) => {
    ElMessage({
      showClose: true,
      message: messageContent,
      grouping: true,
      type: "error",
    });
  };

  const destroy = () => {
    // message.destroy();
  };

  return {
    showLoading,
    showSuccess,
    showWarning,
    showError,
    destroy,
  };
};
