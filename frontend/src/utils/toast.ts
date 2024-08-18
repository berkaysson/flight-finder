import { toastConfig } from "react-simple-toasts";
import "react-simple-toasts/dist/theme/success.css";
import "react-simple-toasts/dist/theme/failure.css";

export const failureConfig = () => {
  toastConfig({
    theme: "failure",
    duration: 3000,
    clickClosable: true,
  });
};

export const successConfig = () => {
  toastConfig({
    theme: "success",
    duration: 3000,
    clickClosable: true,
  });
};
