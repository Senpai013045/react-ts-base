import {Button} from ".";
import {render, screen} from "@testing-library/react";
import {describe, expect, it, vi} from "vitest";

describe("Button", () => {
  it("renders a html button", () => {
    render(<Button />);
    expect(screen.getByRole("button")).toBeInTheDocument();
  });
  describe("passes props to the native button", () => {
    it("passes onClick", () => {
      const onClick = vi.fn();
      render(<Button onClick={onClick} />);
      screen.getByRole("button").click();
      expect(onClick).toHaveBeenCalled();
    });
    it("passes type", () => {
      render(<Button type="submit" />);
      expect(screen.getByRole("button")).toHaveAttribute("type", "submit");
    });
    it("passes disabled", () => {
      render(<Button disabled />);
      expect(screen.getByRole("button")).toBeDisabled();
    });
  });
});
