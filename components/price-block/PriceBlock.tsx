import Box from "@mui/material/Box";
import CardMedia from "@mui/material/CardMedia";
import Chip from "@mui/material/Chip";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Stack";
import { useRef } from "react";
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

interface PropertyListing {
  title: string;
  description: string;
  price: string;
  priceType: string;
  image: string;
  published: string;
  flag: string;
  otherPropertyImages: any;
}

const PriceBlock = (props: PropertyListing) => {

  const slideRef = useRef();
  const { title, description, price, priceType, image, published, flag, otherPropertyImages } = props;

  const properties = {
    autoplay: false,
    arrows: true
  };
  return (
    <Box
      sx={{
        backgroundColor: "#13113E",
        color: "#7877B1",
        transition: "ease-in-out 0.2s all",
        // "&:hover": {
        //   color: "#fff",
        //   background: "rgba(11, 152, 197, 0.1);",
        //   cursor: "pointer",
        // },
        p: 1,
        border: "1px solid #201D47",
      }}
    >
      <Box
        sx={{ display: "flex", flexDirection: "row", position:'relative', justifyContent: 'space-between' }}
      >
        <Box
        sx={{ position:'relative', width: '40%', height: '100%'}}
      >
        <Chip label={flag} color="primary" sx={{position: 'absolute', top: 1, left: 1, background: 'orange'}}/>
        <CardMedia
          component="img"
          image={image}
          alt={title}
          sx={{ top: 0, left: 0, right: 0, bottom: 0, width: "100%", height: "100%", zIndex: 0, objectFit: 'cover'}}
        />
        <Typography sx={{pt: 1}}>Listed on {published}</Typography>
        </Box>
        <Box sx={{p: 3, flex: 1 }}>
       {priceType && (<Typography>{priceType}</Typography> ) }
        <Typography>{price}</Typography>
        <Typography variant="h2" component="h2">{title}</Typography>

        

        <Typography variant="h4" component="h4">{description}</Typography>

        
        
        </Box>
        <Box sx={{ width: '30%', alignSelf: 'center'}}>
      <div className="slide-container" style={{width: '350px'}}>
      <Slide ref={slideRef} {...properties}>
         {otherPropertyImages.map((slideImage: { small: any; caption: any; }, index: any)=> (
            <div className="each-slide" key={index}>
              <div style={{'backgroundImage': `url(${slideImage.small})`,height:'250px', width: 'auto'}}>
                <span>{slideImage.caption}</span>
              </div>
            </div>
          ))} 
        </Slide>
      </div>
      </Box>
      </Box>

    </Box>
  );
};

export default PriceBlock;
