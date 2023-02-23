import {vi, describe, it} from "vitest";
import {notifyError} from "./error";

describe("notifyError", () => {
  it("should work with a string", () => {
    const notifier = vi.fn();
    notifyError("error", notifier);
    expect(notifier).toBeCalledWith("error");
  });
  it("should work with an Error", () => {
    const notifier = vi.fn();
    notifyError(new Error("error"), notifier);
    expect(notifier).toBeCalledWith("error");
  });
});
