import { Box } from "@mui/material";
import { Grid } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { Navigation, Pagination, Virtual } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { baseURL } from "../../../services/httpCommon";
import ItemCard from "./itemCard";
import ItemsCard from "./itemCard";

const SlidesView = (props) => {
  const [item, setItem] = useState(null);

  useEffect(() => {
    axios
      .get(baseURL + props)
      .then((response) => {
        // handle success(axiosの処理が成功した場合に処理させたいことを記述)
        console.log(response);
        setItem(response.data);
      })
      .catch((error) => {
        // handle error(axiosの処理にエラーが発生した場合に処理させたいことを記述)
        console.error(error);
      });
  }, []);

  return (
    <Grid>
      {item === null ? (
        <></>
      ) : (
        <Grid
          sx={{
            my: 4,
            bgcolor: "White",
            borderRadius: 3,
            boxShadow: "0 0px 30px #dedede",
          }}
        >
          <Swiper
            slidesPerView={10}
            // spaceBetween={10}
            navigation={true}
            //   pagination={{
            //     clickable: true,
            //   }}
            modules={[Virtual, Navigation, Pagination]}
            pagination={{
              clickable: true,
            }}
            className="mySwiper"
            virtual
            breakpoints={{
              "@0.00": {
                slidesPerView: 3,
                // spaceBetween: 15,
              },
              "@0.40": {
                slidesPerView: 3,
                // spaceBetween: 15,
              },
              "@0.75": {
                slidesPerView: 4,
                // spaceBetween: 15,
              },
              "@1.10": {
                slidesPerView: 5,
                // spaceBetween: 15,
              },
              "@1.70": {
                slidesPerView: 6,
                // spaceBetween: 15,
              },
              "@2.00": {
                slidesPerView: 7,
                // spaceBetween: 15,
              },
              "@2.50": {
                slidesPerView: 8,
                // spaceBetween: 15,
              },
            }}
          >
            {/* <ItemsCard items={item} /> */}
            {item.map((item) => (
              <SwiperSlide>
                {/* <Box sx={{ display: "table-cell" }}>
                <img
                  style={{
                    maxWidth: "200px",
                    maxHeight: "200px",
                    height: "auto",
                    width: "auto",
                  }}
                  src={item.url}
                  alt=""
                />
              </Box> */}
                <ItemCard item={item} />
              </SwiperSlide>
            ))}
          </Swiper>
        </Grid>
      )}
    </Grid>
  );
};
export default SlidesView;
