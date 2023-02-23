import { toast } from "react-toastify";

export const extractErrorMessage = (err: unknown) => {
  let message = "Something went wrong";
  if (err instanceof Error) {
    message = err.message;
  }
  if (typeof err === "string") {
    message = err;
  }
  return message;
};

const defaultNotifier = (message: string) => {
  toast.error(message);
}

export const notifyError = (err: unknown, notifier = defaultNotifier) => {
  const message = extractErrorMessage(err);
  if (typeof notifier === "function") {
    notifier(message);
  }
};
