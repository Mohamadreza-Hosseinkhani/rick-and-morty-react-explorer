import { toast } from "react-hot-toast";

const ErrorToastConfig = {};

const SuccessToastConfig = {};

const SimpleToastConfig = {};

export const showErrorToast = (message) => {
  toast.error(message, ErrorToastConfig);
};

export const showSuccessToast = (message) => {
  toast.success(message, SuccessToastConfig);
};

export const showSimpleToast = (message) => {
  toast(message, SimpleToastConfig);
};