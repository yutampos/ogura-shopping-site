import { ButtonBase } from "@mui/material";
import { Typography } from "@mui/material";
import { Button } from "@mui/material";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { useEffect, useState } from "react";
import axios from "axios";
import { cartPriceSum } from "../../../store/price-sum/calculation";
import { DeliveryFeeCalcu } from "../checkout-sum/calculation";
import { useAuth0 } from "@auth0/auth0-react";

export default function NextButton(props) {
  const checkoutData = useSelector((state) => state.checkoutReducer);
  const cartData = useSelector((state) => state.cartReducer.count);

  const totalPayment = () => {
    const priceSum = cartPriceSum(cartData);
    const DeliveryFee = DeliveryFeeCalcu(priceSum);
    return priceSum + DeliveryFee;
  };
  const [pageActiveStep, setPageActiveStep] = useState();

  const inputStateKey = (step) => {
    switch (step) {
      case 0:
        return [
          "f_name",
          "l_name",
          "zip_code",
          "email",
          "tell",
          "prefecture",
          "city",
          "o_address",
        ];
      case 1:
        return ["delivery_method"];
      case 2:
        return ["payment_method"];
      default:
        break;
    }
  };

  const handleNext = () => {
    if (props.activeStep <= 2) {
      props.setActiveStep(props.activeStep + 1);
    } else {
    }
  };

  const handleLocalStrageRemove = () => {
    localStorage.clear(Number);
  };

  const existDataDisabled = () => {
    const existData = inputStateKey(props.activeStep).filter((ikey) => {
      return ikey in checkoutData && checkoutData[ikey] === "";
    });
    return existData.length !== 0;
  };

  // const [checkToExistCheckoutData, setCheckToExistCheckoutData] = useState();
  // console.log(checkToExistCheckoutData);
  // useEffect(() => {
  //   setCheckToExistCheckoutData(existDataDisabled());
  // }, [checkoutData]);

  const baseURL = "http://localhost:8080/api";
  const [cartList, setCartList] = useState(null);

  const { user, isAuthenticated } = useAuth0();

  function checkoutDataRequest() {
    // for (const data in cartData.count) {
    //   setCartList(cartData.count(data));
    // }
    if (isAuthenticated === true) {
      axios.post(baseURL + "/add-order", {
        userId: user.sub,
        zipCode: checkoutData.zip_code,
        prefecture: checkoutData.prefecture,
        city: checkoutData.city,
        otherAddress: checkoutData.o_address,
        deliveryCharge: checkoutData.delivery_charge,
        itemId: "5",
        quantity: checkoutData.quantity,

        totalPayment: totalPayment(),
        cartData: cartData,
      });
    } else {
    }
  }

  return (
    <div>
      {props.activeStep === 3 ? (
        <Button
          component={Link}
          to="/completion"
          onClick={() => {
            checkoutDataRequest();
            handleLocalStrageRemove();
          }}
          sx={{
            mt: 3,
            alignItems: "flex-end",
            justifyContent: "center",
          }}
          disabled={props.disabled}
          color="inherit"
        >
          <Typography>確定する</Typography>
        </Button>
      ) : (
        <Button
          disabled={props.disabled || existDataDisabled()}
          onClick={() => {
            handleNext();
          }}
          sx={{
            mt: 3,
            alignItems: "flex-end",
            justifyContent: "center",
          }}
          color="inherit"
        >
          <Typography>次へ</Typography>
          <NavigateNextIcon />
        </Button>
      )}
    </div>
  );
}
