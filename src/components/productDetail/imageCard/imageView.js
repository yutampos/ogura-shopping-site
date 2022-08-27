import { Grid } from "@mui/material";

import { useEffect, useState } from "react";
import ImageElement from "./imageElement";
import ImageSelector from "./imageSelector";

const ImageView = (props) => {
  const [selectedImageUrl, setSelectedImageUrl] = useState("");
  useEffect(() => {
    setSelectedImageUrl(props.itemImages[0].url);
  }, [props.itemImages]);

  return (
    <Grid
      display="flex"
      flexDirection="column"
      sx={{
        justifyContent: "space-between",
        height: "100%",
        alignItems: "center",
      }}
    >
      <Grid
        display="flex"
        flexDirection="row"
        sx={{
          justifyContent: "center",
          width: "100%",
          height: { xs: "400px", sm: "450px", md: "500px" },

          // height: "600px",
        }}
      >
        <ImageElement selectedImageUrl={selectedImageUrl} />
      </Grid>

      <ImageSelector
        selectedImageUrl={selectedImageUrl}
        setSelectedImageUrl={setSelectedImageUrl}
        itemImages={props.itemImages}
      />
    </Grid>
  );
};

export default ImageView;
