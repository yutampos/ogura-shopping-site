import { Grid } from "@mui/material";

const imageElementDitail = (url) => {
  return (
    <img
      src={url}
      alt=""
      style={{
        // height: "auto",

        width: "auto",
        maxWidth: "100%",
        maxHeight: "100%",

        boxShadow: "0 0 30px rgba(203,201,201)",
        borderRadius: "15px",
        // boxShadow: "0 10px 10px rgba(0, 0, 0, 0.057)",
        mixBlendMode: "multiply",
      }}
    />
  );
};
const ImageElement = (props) => {
  return (
    <Grid
      sx={{
        maxHeight: { xs: "370px", md: "470px" },
        maxWidth: { xs: "370px", md: "470px" },

        display: "flex",
        justifyContent: "center",
      }}
    >
      {imageElementDitail(props.selectedImageUrl)}
    </Grid>
  );
};
export default ImageElement;
