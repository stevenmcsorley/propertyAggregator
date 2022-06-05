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
      listingUris={priceblockData[0].listingUris}
      listingId={priceblockData[0].listingId}
    />
    );

    expect(getByText("3 bed semi-detached house for sale")).toBeInTheDocument();
    expect(getByText("Just added")).toBeInTheDocument();
    expect(getByText("Listed on 30th May 2022")).toBeInTheDocument();
    expect(getByText("Offers over")).toBeInTheDocument();
    expect(getByText("£180,000")).toBeInTheDocument();
  });
});
