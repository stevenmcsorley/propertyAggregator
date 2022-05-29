import axios from "axios";

import PriceBlock from "../components/price-block/PriceBlock";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import SideBar from "../components/side-bar/SideBar";

import {
  PageType,
  PageFactory,
  ListProperties,
  SingleProperty,
} from "./api/Factory";
import console from "console";
import Link from "@mui/material/Link";

const factory = new PageFactory();

export const getServerSideProps = async (pageContext: {
  query: { slug: any };
}) => {
  const pageSlug = pageContext.query.slug;
  console.log("pageSlug", pageSlug);
  const variables = {
    pageSlug,
  };
  let endpoint: string;
  let propertyPageType: ListProperties | SingleProperty;
  let data: any;

  if (variables.pageSlug[0] === "property") {
    endpoint = `${variables.pageSlug[0]}/${variables.pageSlug[1]}/${variables.pageSlug[2]}`;
    propertyPageType = factory.createPage(endpoint, PageType.ListProperties);
    data = await propertyPageType.data();
  } else if (variables.pageSlug[0] === "for-sale") {
    endpoint = `${variables.pageSlug[0]}/${variables.pageSlug[1]}/${variables.pageSlug[2]}`;
    propertyPageType = factory.createPage(endpoint, PageType.SingleProperty);
    data = await propertyPageType.data();
  }

  console.log("enddd", variables.pageSlug);

  return {
    props: {
      data,
    },
  };
};

const Crypto = (props: any) => {
  const { data } = props;
  //  const tableColsLength:number =  Object.keys(data[0]).length -1;

  return (
    <Grid container direction={"row"} sx={{ height: "100vh", p: 0 }}>
      <Grid item sx={{ background: "#201D47", height: "100%", p: 4 }} lg={2}>
        <Box>
          <SideBar />
        </Box>
      </Grid>
      <Grid item sx={{ background: "#17163B", height: "auto", p: 4 }} lg={10}>
        <Box sx={{ background: "#17163B", height: "100%" }}>
          <div>
            <pre>{JSON.stringify(data, null, 2)}</pre>
          </div>
          ;
          {/* {data.map((d: any, index:number) => (
            <Link key={d.listingId} href={d.listingUris.detail}>
            <PriceBlock
              flag={d.flag}
              title={d.title}
              description={d.address}
              price={d.price}
              priceType={d.priceTitle}
              image={d.image.src}
              published={d.publishedOn}
              otherPropertyImages={d.otherPropertyImages}
            />
            </Link>
          ))} */}
        </Box>
      </Grid>
    </Grid>
  );
};

export default Crypto;
