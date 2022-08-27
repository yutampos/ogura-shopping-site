import { useAuth0 } from "@auth0/auth0-react";
import { Checkbox } from "@mui/material";
import { FormGroup } from "@mui/material";
import { MenuItem } from "@mui/material";
import { InputLabel } from "@mui/material";
import { TextField } from "@mui/material";
import { FormControl } from "@mui/material";
import { Select } from "@mui/material";
import { Autocomplete } from "@mui/material";
import { Typography } from "@mui/material";
import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { baseURL } from "../../../services/httpCommon";
import {
  GetCustomerData,
  getCustomerData,
  getOrderHistory,
} from "../../../services/rest-api-service/dataBaseRequest";
import {
  handleInputMenu,
  handleInputPromoBoolean,
  handleInputText,
  handleInputZipCodeApi,
} from "../../../store/action/checkoutAction";
import { Prefectures } from "../data/formData";
import CheckDialog from "./user-info-check-dialog/checkDialog";

export default function Info(props) {
  const checkoutData = useSelector((state) => state.checkoutReducer);
  const dispatch = useDispatch();

  const fNameRef = useRef(null);
  const lNameRef = useRef(null);
  const zipCodeRef = useRef(null);
  const oAddressRef = useRef(null);
  const cityRef = useRef(null);
  const tellRef = useRef(null);
  const emailRef = useRef(null);

  // const [existCartData, setExistCartData] = useState();
  //checkoutDataのうち""かfalseの要素のみをbuttonStateDisabledに送る。非同期で書く。処理開始タイミング→handle関数が動いたタイミング
  // const stateDisabled = () => {
  //   setExistCartData();
  // };

  // validButtonDisable();

  const validButtonDisable = (inputRef) => {
    if (inputRef.current) {
      const ref = inputRef.current;
      if (!ref.validity.valid) {
        props.setDisabled(true);
      } else {
        props.setDisabled(false);
      }
    }
  };

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
  // const [inputError, setInputError] = useState(false);

  const handleChange = (inputRef) => {
    if (inputRef.current) {
      const ref = inputRef.current;
      if (!ref.validity.valid) {
        return inputRef?.current?.validationMessage;
      } else {
        return;
      }
    }
  };

  const [zipCode, setZipCode] = useState(null);
  const [addressSearchResult, setAddressSearchResult] = useState(null);

  // console.log(addressSearchResult.results[0]["address3"]);
  const changeAddress = () => {
    if (addressSearchResult.results !== null) {
      dispatch(
        handleInputZipCodeApi(
          addressSearchResult.results[0]["address1"],
          "prefecture"
        )
      );
      dispatch(
        handleInputZipCodeApi(
          addressSearchResult.results[0]["address2"],
          "city"
        )
      );
      dispatch(
        handleInputZipCodeApi(
          addressSearchResult.results[0]["address3"],
          "o_address"
        )
      );
    } else {
    }
  };

  useEffect(() => {
    axios
      .get("https://zipcloud.ibsnet.co.jp/api/search?zipcode=" + zipCode)
      .then((response) => {
        // handle success(axiosの処理が成功した場合に処理させたいことを記述)
        console.log(response);
        console.log(zipCode);

        setAddressSearchResult(response.data);
      })
      .catch((error) => {
        // handle error(axiosの処理にエラーが発生した場合に処理させたいことを記述)
        console.error(error);
      });
  }, [zipCode]);

  const { user, isAuthenticated } = useAuth0();
  const [customerData, setCustomerData] = useState(null);
  console.log(customerData);
  useEffect(() => {
    if (isAuthenticated === true) {
      axios
        .post(baseURL + "/customer/get", { userId: user.sub })
        .then((response) => {
          setCustomerData(response.data);
        });
    } else {
    }
  }, []);

  useEffect(() => {
    if (addressSearchResult !== null) {
      console.log(addressSearchResult.results);
      if (addressSearchResult.results !== null) {
        changeAddress();
      }
    }
  }, [addressSearchResult]);

  // const [replaceToUserDetail, setReplaceToUserDetail] = useState(false);
  // console.log(replaceToUserDetail);

  const replaceToGetedUserDetail = (boolean) => {
    if (boolean === true) {
      dispatch(handleInputZipCodeApi(customerData.prefecture, "prefecture"));
      dispatch(handleInputZipCodeApi(customerData.city, "city"));
      dispatch(handleInputZipCodeApi(customerData.otherAddress, "o_address"));
      dispatch(handleInputZipCodeApi(customerData.firstName, "f_name"));
      dispatch(handleInputZipCodeApi(customerData.lastName, "l_name"));
      dispatch(handleInputZipCodeApi(customerData.email, "email"));
      dispatch(handleInputZipCodeApi(customerData.zipCode, "zip_code"));
      dispatch(handleInputZipCodeApi(customerData.tell, "tell"));
      // setReplaceToUserDetail(true);
      console.log("実行されました");
    }
  };

  console.log(checkoutData);
  return (
    <FormGroup>
      <Grid sx={{ p: 4 }}>
        <Grid>
          <Typography>連絡先情報</Typography>
          <Box sx={{ pt: 2 }}>
            <TextField
              id="valid"
              label="Eメールアドレス"
              size="small"
              value={checkoutData.email}
              error={validationError(emailRef)}
              inputProps={{
                pattern: "[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,}$",
              }}
              inputRef={emailRef}
              onChange={(e) => {
                dispatch(handleInputText(e, "email"));
                validButtonDisable(emailRef);
              }}
              helperText={handleChange(emailRef)}
              variant="outlined"
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
            }}
          >
            <Checkbox
              checked={checkoutData.promotion_email === true}
              onClick={() => {
                dispatch(handleInputPromoBoolean());
              }}
            />
            <Typography>ニュースとオファーをメールで受け取る</Typography>
          </Box>
        </Grid>
        <Grid sx={{ py: 2 }}>
          <Typography>配送先住所</Typography>

          <Box
            sx={{
              pt: 2,
              display: "flex",
              justifyContent: "space-between",
              // alignItems: "center",
            }}
          >
            <TextField
              id="outlined-basic"
              label="姓"
              size="small"
              variant="outlined"
              value={checkoutData.f_name}
              error={validationError(fNameRef)}
              inputRef={fNameRef}
              helperText={handleChange(fNameRef)}
              inputProps={{
                maxLength: 30,
              }}
              onChange={(e) => {
                dispatch(handleInputText(e, "f_name"));
                validButtonDisable(fNameRef);
              }}
              sx={{ width: "48%" }}
            />
            <TextField
              id="outlined-basic"
              label="名"
              size="small"
              variant="outlined"
              value={checkoutData.l_name}
              error={validationError(lNameRef)}
              inputRef={lNameRef}
              helperText={handleChange(lNameRef)}
              inputProps={{
                maxLength: 30,
              }}
              onChange={(e) => {
                dispatch(handleInputText(e, "l_name"));
                validButtonDisable(lNameRef);
              }}
              sx={{ width: "48%" }}
            />
          </Box>

          <Box
            sx={{
              pt: 2,
              display: "flex",
              justifyContent: "space-between",
              // alignItems: "end",
            }}
          >
            <TextField
              id="outlined-basic"
              label="郵便番号（自動検索）"
              size="small"
              variant="outlined"
              value={checkoutData.zip_code}
              onChange={(e) => {
                dispatch(handleInputText(e, "zip_code"));
                validButtonDisable(zipCodeRef);
                setZipCode(e.currentTarget.value);
              }}
              error={validationError(zipCodeRef)}
              inputRef={zipCodeRef}
              helperText={() => {
                handleChange(zipCodeRef);
              }}
              inputProps={{
                pattern: "[0-9]{3}-[0-9]{4}",
              }}
              // onInput={() => changeAddress()}
              sx={{ width: "48%" }}
            />
            {/* {changeAddress()} */}

            <FormControl size="small" sx={{ width: "48%" }}>
              <InputLabel id="prefecture">都道府県</InputLabel>
              <Select
                labelId="prefecture"
                label="都道府県"
                value={checkoutData.prefecture}
                onChange={(e) => {
                  dispatch(handleInputMenu(e, "prefecture"));
                }}
              >
                {Prefectures.map((plist) => (
                  <MenuItem key={plist.code} value={plist.name}>
                    {plist.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>
          <Box sx={{ pt: " 12px" }}>
            <TextField
              id="outlined-basic"
              label="市区町村"
              variant="outlined"
              value={checkoutData.city}
              size="small"
              onChange={(e) => {
                dispatch(handleInputText(e, "city"));
                validButtonDisable(cityRef);
              }}
              error={validationError(cityRef)}
              inputRef={cityRef}
              helperText={handleChange(cityRef)}
              inputProps={{
                maxLength: 100,
              }}
              sx={{ width: "100%" }}
            />
          </Box>
          <Box sx={{ pt: 2 }}>
            <TextField
              id="outlined-basic"
              label="住所"
              variant="outlined"
              value={checkoutData.o_address}
              size="small"
              onChange={(e) => {
                dispatch(handleInputText(e, "o_address"));
                validButtonDisable(oAddressRef);
              }}
              error={validationError(oAddressRef)}
              inputRef={oAddressRef}
              helperText={handleChange(oAddressRef)}
              inputProps={{
                maxLength: 100,
              }}
              sx={{ width: "100%" }}
            />
          </Box>

          <Box sx={{ pt: 2 }}>
            <TextField
              id="outlined-basic"
              label="電話番号"
              variant="outlined"
              size="small"
              value={checkoutData.tell}
              onChange={(e) => {
                dispatch(handleInputText(e, "tell"));
                validButtonDisable(tellRef);
              }}
              error={validationError(tellRef)}
              inputRef={tellRef}
              helperText={handleChange(tellRef)}
              inputProps={{
                pattern: "0[5789]0-?[0-9]{4}-?[0-9]{4}",
              }}
              sx={{ width: "100%" }}
            />
          </Box>
        </Grid>
        <Grid sx={{ py: 2, px: 2, color: "#6b6b6b" }}>
          <Typography variant="subtitle2" fontSize="12px">
            ※郵便番号を入力すると自動で住所を読み込みます。読み込みには時間がかかる場合がございます。
          </Typography>
          <Typography variant="subtitle2" fontSize="12px">
            ※タイピングミスにご注意ください。誤った情報が入力されますと商品が届かなくなる可能性がございます。
          </Typography>
        </Grid>
      </Grid>

      {CheckDialog(customerData, replaceToGetedUserDetail)}
      {/* <CheckDialog
        customerData={customerData}
        setReplaceToUserDetail={setReplaceToUserDetail}
      /> */}
    </FormGroup>
  );
}
