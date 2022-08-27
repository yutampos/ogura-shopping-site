import { Grid } from "@mui/material";
import { useEffect, useState } from "react";
import SimpleImageSlider from "react-simple-image-slider";
import "./style.css";
import { Swiper, SwiperSlide } from "swiper/react";

import { Autoplay, Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Box } from "@mui/system";

const images = [
  {
    url: "https://i.gyazo.com/ca7a2b34f37a9e2c484b41c9867392f4.jpg",
    bgcolor:
      "linear-gradient(90deg, rgba(219, 158, 59, 0.98), rgba(235, 184, 79, 0.98))",
  },
  {
    url: "https://designmanifestos.files.wordpress.com/2020/05/sdgbanner2.png",
    bgcolor: "",
  },
];

export default function TopBanner() {
  const [width, setWidth] = useState(1280);

  const getWindowDimensions = () => {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height,
    };
  };
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    const onResize = () => {
      setWindowDimensions(getWindowDimensions());
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <Swiper
      centeredSlides={true}
      effect={"fade"}
      autoplay={{
        delay: 4600,
        disableOnInteraction: false,
      }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      pagination={{
        dynamicBullets: true,
        clickable: true,
      }}
      className="mySwiper"
    >
      {images.map((image, index) => (
        <SwiperSlide key={image.url}>
          <Box
            sx={{
              width: "100%",
              height: { xs: "150px", sm: "250px", md: "300px" },
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            style={{ backgroundImage: images[index].bgcolor }}
          >
            <img
              src={images[index].url}
              alt=""
              style={{
                width: "auto",
                height: "auto",
                maxHeight: "300px",
                maxWidth: "100%",
                objectFit: "contain",
              }}
            />
          </Box>
        </SwiperSlide>
      ))}
    </Swiper>
    // <SimpleImageSlider
    //   className="imageSlider"
    //   width={windowDimensions.width}
    //   height={300}
    //   navStyle={1}
    //   useGPURender={true}
    //   autoPlay={true}
    //   autoPlayDelay={5.0}
    //   images={images}
    //   showBullets={true}
    //   showNavs={true}
    // />
  );
}
