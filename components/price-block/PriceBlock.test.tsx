import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import PriceBlock from "./PriceBlock";
import { priceblockData } from "./PriceBlock.testdata";


describe("Price Block", () => {
  it("containes price and timestamp text", () => {
    const { getByText } = render(
      <PriceBlock
      title={priceblockData[0].title}
      image={priceblockData[0].image}
      flag={priceblockData[0].flag}
      publishedOn={priceblockData[0].publishedOn}
      priceTitle={priceblockData[0].priceTitle}
      price={priceblockData[0].price}
      address={priceblockData[0].address}
      otherPropertyImages={priceblockData[0].otherPropertyImages}
    />
    );

    expect(getByText("3 bed semi-detached house for sale")).toBeVisible();
    expect(getByText("Just added")).toBeVisible();
    expect(getByText("30th May 2022")).toBeVisible();
    expect(getByText("Offers over")).toBeVisible();
    expect(getByText("£180,000")).toBeVisible();
  });
});
