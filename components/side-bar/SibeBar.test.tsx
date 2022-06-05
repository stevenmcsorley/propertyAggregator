import { render, screen } from "@testing-library/react";
import SideBar from "./SideBar";

describe("SideBar", () => {
  it("containes linkst", () => {
    const { getByText } = render(
      <SideBar />
    );
    expect(getByText("Trending")).toBeVisible();
  });
});
