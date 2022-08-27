import { ToggleButton } from "@mui/material";
import { ToggleButtonGroup } from "@mui/material";

const imageList = (setSelectedImageUrl, itemImages) => {
  // console.log(itemImages);
  // return <div>{itemImages}</div>;
  return itemImages.map((url) => {
    return (
      <ToggleButton value={url.url} key={url.url}>
        <img
          src={url.url}
          alt="画像"
          style={{
            whidth: "auto",
            height: "auto",
            maxHeight: "45px",
            maxWidth: "45px",
          }}
        />
      </ToggleButton>
    );
  });
};

const ImageSelector = (props) => {
  const handleImage = (event, url) => {
    if (url !== null) {
      props.setSelectedImageUrl(url);
    }
  };

  return (
    <ToggleButtonGroup
      exclusive
      size="small"
      value={props.selectedImageUrl}
      onChange={handleImage}
      sx={{ display: "flex", flexWrap: "wrap" }}
    >
      {imageList(props.setSelectedImageUrl, props.itemImages)}
    </ToggleButtonGroup>
  );
};
export default ImageSelector;
