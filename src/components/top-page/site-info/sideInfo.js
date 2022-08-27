import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import ShieldIcon from "@mui/icons-material/Shield";
import AutoFixHighIcon from "@mui/icons-material/AutoFixHigh";

const SideInfo = () => {
  return (
    <Box
      sx={{
        // my: 6,

        mx: 2,
        p: 5,

        // bgcolor: "white",
        borderRadius: 3,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        color: "white",
      }}
    >
      {/* <Typography variant="h4" fontSize="22px" fontWeight="bold">
              当サイトの便利な使い方をご紹介！
            </Typography> */}
      <Typography variant="h1" sx={{ fontSize: "30px", fontWeight: "bold" }}>
        安心便利をあなたに
      </Typography>
      <Typography>
        当ショップを安心便利に利用していただくために知っていただきたい3つのこと
      </Typography>
      <Box
        sx={{
          mt: 2,
          width: "100%",

          display: "flex",
          justifyContent: "space-around",
        }}
      >
        <Box sx={{ mx: 6, display: "flex", alignItems: "center" }}>
          <img
            style={{ width: "170px" }}
            src="https://soco-st.com/wp-content/themes/socost/upload/8388_color.svg?ver=202103110001"
            alt=""
          />
        </Box>

        <Box
          sx={{
            p: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "center",

            borderRadius: 10,
          }}
        >
          <Box
            sx={{
              borderRadius: 3,
              backgroundImage:
                "linear-gradient(110deg, rgba(187, 183, 228, 0.98), rgba(220, 220, 215, 0.98))",
            }}
          >
            <AutoFixHighIcon
              sx={{ color: "white", p: 3, fontSize: "40px" }}
              color="info"
            />
          </Box>

          <Typography
            color="GrayText"
            sx={{ fontSize: "13px", mt: 3, maxWidth: "200px" }}
          >
            アカウント情報をあらかじめ設定しておけばチェックアウト時に入力の手間が減り便利！
          </Typography>
        </Box>
        <Box
          sx={{
            p: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "center",

            borderRadius: 10,
          }}
        >
          <Box
            sx={{
              borderRadius: 3,
              backgroundImage:
                "linear-gradient(110deg, rgba(187, 183, 228, 0.98), rgba(220, 220, 215, 0.98))",
            }}
          >
            <ShieldIcon
              sx={{ color: "white", p: 3, fontSize: "40px" }}
              color="info"
            />
          </Box>

          <Typography
            color="GrayText"
            sx={{ fontSize: "13px", mt: 3, maxWidth: "200px" }}
          ></Typography>
        </Box>
        <Box
          sx={{
            p: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "center",

            borderRadius: 10,
          }}
        >
          <Box
            sx={{
              borderRadius: 3,
              backgroundImage:
                "linear-gradient(110deg, rgba(187, 183, 228, 0.98), rgba(220, 220, 215, 0.98))",
            }}
          >
            <ShieldIcon
              sx={{ color: "white", p: 3, fontSize: "40px" }}
              color="info"
            />
          </Box>

          <Typography
            color="GrayText"
            sx={{ fontSize: "13px", mt: 3, maxWidth: "200px" }}
          >
            匿名でレビューができるからプライバシーを気にしないで投稿ができる！
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};
export default SideInfo;
