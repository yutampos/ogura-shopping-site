import { useAuth0 } from "@auth0/auth0-react";
import { TextField } from "@mui/material";
import { Select } from "@mui/material";
import { InputLabel } from "@mui/material";
import { Paper } from "@mui/material";
import { ButtonBase } from "@mui/material";
import { Alert } from "@mui/material";
import { Button } from "@mui/material";
import { FormGroup } from "@mui/material";
import { FormControl } from "@mui/material";
import { MenuItem } from "@mui/material";
import { Typography } from "@mui/material";
import { Box } from "@mui/material";
import { Grid } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Prefectures } from "../checkout/data/formData";
import CloseIcon from "@mui/icons-material/Close";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {
  setFetchData,
  handleInput,
  handleInputMenu,
} from "../../store/action/customerAction";
import { editCustomerData } from "../../services/rest-api-service/dataBaseRequest";
import "./accountDetail.css";

export default function AccountDetail() {
  const { user, isAuthenticated } = useAuth0();
  const customerData = useSelector((state) => state.customerReducer);

  const [clickBoolean, setClickBoolean] = useState(0);
  const HandleUpdate = () => {
    setClickBoolean(1);
  };
  const HandleBack = () => {
    setClickBoolean(0);
  };

  const HandleRequest = (data) => {
    editCustomerData(data);
  };

  const fNameRef = useRef(null);
  const lNameRef = useRef(null);
  const zipCodeRef = useRef(null);
  const oAddressRef = useRef(null);
  const cityRef = useRef(null);
  const tellRef = useRef(null);
  const emailRef = useRef(null);

  const validationError = (inputRef) => {
    if (inputRef.current) {
      const ref = inputRef.current;
      if (!ref.validity.valid) {
        return true;
      } else {
        return false;
      }
    }
  };

  const validMessage = (inputRef) => {
    if (inputRef.current) {
      const ref = inputRef.current;
      if (!ref.validity.valid) {
        return inputRef?.current?.validationMessage;
      } else {
        return;
      }
    }
  };

  const baseURL = "http://localhost:8080/api";
  function pushCustomerData(data) {
    axios.post(baseURL + "/edit-customer", {
      userId: "google-oauth2|103257819196616223761",
      nickname: "mamyman",
      zipCode: "1070052",
      prefecture: "東京都",
      city: "港区",
      email: "ak47@gmail.com",
      tell: "090-1111-1111",
      lnameKana: "タロウ",
      oaddress: "赤坂１−１",
      fnameKana: "オグラ",
      lname: "太郎",
      fname: "小倉",
    }); //リデューサーを導入予定！！！
  }

  const [customerDetail, setCustomerDetail] = useState(null);

  useEffect(() => {
    if (isAuthenticated === true) {
      axios
        .post(baseURL + "/customer/get", {
          userId: user.sub,
        })
        .then((response) => {
          setFetchCustomerData(response.data);
        })
        .catch((error) => {
          console.error(error);
        });
    } else {
    }
  }, []);

  const dispatch = useDispatch();
  console.log(customerData);

  const setFetchCustomerData = (data) => {
    for (const key in data) {
      dispatch(setFetchData(data[key], key));
    }
  };

  const handleInputText = (e, f) => {
    dispatch(handleInput(e, f));
  };
  const handleInputSelect = (e, f) => {
    dispatch(handleInputMenu(e, f));
  };

  return (
    <Grid container style={{ backgroundColor: "#f8f8f8" }} sx={{ pb: 30 }}>
      {clickBoolean === 0 ? (
        <div></div>
      ) : (
        <Grid item xs={12}>
          <Alert
            onClose={() => {
              HandleBack();
            }}
            severity="success"
          >
            変更されました！
          </Alert>
        </Grid>
      )}
      <Grid item md={1} xl={2}></Grid>
      <Grid item xs={12} md={10} xl={8}>
        <Grid>
          <Box
            sx={{
              mt: 1,
              ml: 2,
              p: 2,
              display: "flex",
              alignItems: "center",
              justifyContent: "left",
            }}
          >
            <Box>
              {isAuthenticated === true ? (
                <img
                  style={{
                    width: "50px",
                    height: "auto",
                    borderRadius: "50%",
                  }}
                  src={user.picture}
                  alt={user.name}
                />
              ) : (
                <></>
              )}
            </Box>
            {isAuthenticated === true ? (
              <Typography
                sx={{ ml: 3 }}
                variant="h5"
              >{`${user.name}さんのプロフィール`}</Typography>
            ) : (
              <></>
            )}
          </Box>
          <Grid sx={{ px: 2 }}>
            <Grid sx={{ display: "flex" }}>
              <Grid flexGrow={1}></Grid>
              <Paper
                elevation={0}
                sx={{
                  minWidth: { md: "500px", lg: "700px" },
                  pt: 3,
                  pb: 5,
                  px: 4,
                  borderRadius: 3,
                  boxShadow: "0 0px 15px #d1cbcb",
                  backgroundColor: (theme) =>
                    theme.palette.mode === "dark" ? "#1A2027" : "#fafdfd",
                }}
              >
                <Grid sx={{ pt: 3, pb: 3, px: 3 }}>
                  <Typography variant="h6">基本情報</Typography>

                  <Box
                    sx={{
                      pt: 2,
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                    }}
                  >
                    <TextField
                      sx={{ mt: 2 }}
                      className="inputRounded"
                      label="ニックネーム"
                      size="small"
                      variant="outlined"
                      onChange={(e) => {
                        handleInputText(e.currentTarget.value, "nickname");
                      }}
                      value={customerData.nickname}
                    />
                    <TextField
                      sx={{ mt: 5 }}
                      disableUnderline="true"
                      className="inputRounded"
                      id="outlined-basic"
                      label="セイ"
                      size="small"
                      value={customerData.firstNameKana}
                      onChange={(e) => {
                        handleInputText(e.currentTarget.value, "firstNameKana");
                      }}
                      // helperText={validMessage(emailRef)}

                      variant="outlined"
                    />
                    <TextField
                      sx={{ mt: 3 }}
                      id="outlined-basic"
                      className="inputRounded"
                      label="姓"
                      size="small"
                      variant="outlined"
                      onChange={(e) => {
                        handleInputText(e.currentTarget.value, "firstName");
                      }}
                      value={customerData.firstName}
                    />
                    {/* <FormGroup sx={{ width: "47%" }}></FormGroup> */}
                    {/* <FormGroup sx={{ ml: 1, width: "47%" }}></FormGroup> */}
                    <TextField
                      sx={{ mt: 5 }}
                      id="outlined-basic"
                      className="inputRounded"
                      label="メイ"
                      size="small"
                      variant="outlined"
                      onChange={(e) => {
                        handleInputText(e.currentTarget.value, "lastNameKana");
                      }}
                      value={customerData.lastNameKana}
                    />
                    <TextField
                      sx={{ mt: 3 }}
                      id="outlined-basic"
                      className="inputRounded"
                      label="名"
                      size="small"
                      variant="outlined"
                      onChange={(e) => {
                        handleInputText(e.currentTarget.value, "lastName");
                      }}
                      value={customerData.lastName}
                    />
                  </Box>

                  <Box sx={{}}>
                    <TextField
                      id="outlined-basic"
                      className="inputRounded"
                      label="電話番号"
                      variant="outlined"
                      size="small"
                      sx={{ width: "100%", mt: 5 }}
                      onChange={(e) => {
                        handleInputText(e.currentTarget.value, "tell");
                      }}
                      value={customerData.tell}
                    />
                    <TextField
                      id="outlined-basic"
                      label="Eメールアドレス"
                      variant="outlined"
                      className="inputRounded"
                      size="small"
                      sx={{ width: "100%", mt: 5 }}
                      onChange={(e) => {
                        handleInputText(e.currentTarget.value, "email");
                      }}
                      value={customerData.email}
                    />
                  </Box>
                </Grid>

                <Grid sx={{ pt: 3, pb: 3, px: 3 }}>
                  <Typography variant="h6">配送先住所</Typography>
                  <Box
                    sx={{
                      pt: 2,
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                    }}
                  >
                    <FormControl
                      size="small"
                      className="inputRounded"
                      sx={{ mt: 3 }}
                    >
                      <InputLabel id="countryList">所在国</InputLabel>
                      <Select
                        labelId="countryList"
                        label="所在国"
                        variant="outlined"
                        size="small"
                        sx={{ width: "100%" }}
                        value="日本"
                      >
                        <MenuItem value="日本">日本</MenuItem>
                      </Select>
                    </FormControl>
                    <TextField
                      sx={{ mt: 5 }}
                      id="outlined-basic"
                      label="郵便番号"
                      variant="outlined"
                      className="inputRounded"
                      size="small"
                      onChange={(e) => {
                        handleInputText(e.currentTarget.value, "zipCode");
                      }}
                      value={customerData.zipCode}
                    />
                    <FormControl
                      size="small"
                      className="inputRounded"
                      sx={{ mt: 5 }}
                    >
                      <InputLabel id="prefectureList">都道府県</InputLabel>
                      <Select
                        labelId="prefectureList"
                        label="都道府県"
                        variant="outlined"
                        size="small"
                        onChange={(e) => {
                          handleInputSelect(e, "prefecture");
                        }}
                        value={customerData.prefecture}
                      >
                        {Prefectures.map((plist) => (
                          <MenuItem key={plist.code} value={plist.name}>
                            {plist.name}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                    <Box>
                      <TextField
                        id="outlined-basic"
                        label="市区町村"
                        variant="outlined"
                        className="inputRounded"
                        sx={{ mt: 5, width: "100%" }}
                        size="small"
                        onChange={(e) => {
                          handleInputText(e.currentTarget.value, "city");
                        }}
                        value={customerData.city}
                      />
                    </Box>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  ></Box>

                  <Box sx={{ mt: 5 }}>
                    <TextField
                      id="outlined-basic"
                      label="住所"
                      variant="outlined"
                      className="inputRounded"
                      sx={{ width: "100%" }}
                      size="small"
                      onChange={(e) => {
                        handleInputText(e.currentTarget.value, "otherAddress");
                      }}
                      value={customerData.otherAddress}
                    />
                  </Box>
                </Grid>
              </Paper>
              <Grid flexGrow={1}></Grid>
            </Grid>

            <Box sx={{ pt: 6, display: "flex", justifyContent: "center" }}>
              <Button
                sx={{
                  p: 1,
                  width: 200,

                  display: "flex",
                  flexDirection: "row",
                  alignItems: "flex-end",
                  borderRadius: 15,
                  boxShadow: "none",
                  justifyContent: "center",
                  background:
                    " linear-gradient(90deg, rgba(133, 210, 61, 1), rgba(157, 221, 89, 1))",
                }}
                style={{ textDecoration: "none" }}
                onClick={() => {
                  HandleUpdate();
                  HandleRequest(customerData);
                }}
                size="small"
                variant="contained"
              >
                <Typography sx={{ color: "white" }}>変更</Typography>
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Grid>
      <Grid item md={1} xl={2}></Grid>
    </Grid>
  );
}
