import {toast} from "react-toastify";

export const notifyError = (err: unknown) => {
  //instances here
  let message = "Something went wrong";
  if (err instanceof Error) {
    message = err.message;
  }
  if (typeof err === "string") {
    message = err;
  }
  toast.error(message);
};
