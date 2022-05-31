import axios from "axios";
import { useRouter } from "next/router";
import PriceBlock from "../components/price-block/PriceBlock";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import SideBar from "../components/side-bar/SideBar";

import {
  PageType,
  PageFactory,
  ListProperties,
  SingleProperty,
} from "./api/Factory";
import Typography from "@mui/material/Typography";
import React from "react";

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
    let pagination = variables.pageSlug[3] ? `/${variables.pageSlug[3]}` : '';
    endpoint = `${variables.pageSlug[0]}/${variables.pageSlug[1]}/${variables.pageSlug[2]}${pagination}`;
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
  const router = useRouter();
  const [page, setPage] = React.useState(1);
  //  const tableColsLength:number =  Object.keys(data[0]).length -1;

  // const handleChange = (e) => {
  //   e.preventDefault();
  //   router.push(`${router.asPath}/${data[0].pagination.pageNumber}`);
  // };

  const handleChange = (e, value) => {
    e.preventDefault();
    setPage(value);
    let q = {...router.query}; 
    router.replace(`${q.slug[0]}/${q.slug[1]}/${q.slug[2]}/${value}`);
  };

  const pageCont = () => {
    return Math.ceil(data[0].pagination.totalResults / 25);
  };

  return (
    <Grid container direction={"row"} sx={{ height: "100vh", p: 0, pb: 4 }}>
      <Grid item sx={{ background: "#201D47", height: "100%", p: 4 }} lg={2}>
        <Box>
          <SideBar />
        </Box>
      </Grid>
      <Grid item sx={{ background: "#17163B", height: "auto", p: 4 }} lg={10}>
        <Box sx={{ background: "#17163B", height: "100%" }}>
          {/* <div>
            <pre>{JSON.stringify(data, null, 2)}</pre>
          </div> */}
          {data[0].listings.regular.map((d: any, index: number) => (
            <PriceBlock
              key={index}
              title={d.title}
              image={d.image}
              flag={d.flag}
              publishedOn={d.publishedOn}
              priceTitle={d.priceTitle}
              price={d.price}
              address={d.address}
              otherPropertyImages={d.otherPropertyImages}
              listingUris={d.listingUris}
              listingId={d.listingId}
            />
          ))}
        </Box>

        <Stack spacing={2} sx={{pb: 2, mb: 2}}>
          <Pagination count={pageCont()} page={page} onChange={handleChange} color="secondary"/>
        </Stack>
      </Grid>
    </Grid>
  );
};

export default Crypto;
