import { Typography } from "@mui/material";
import { Stepper } from "@mui/material";
import { StepLabel } from "@mui/material";
import { Paper } from "@mui/material";
import { Step } from "@mui/material";

import { ButtonBase } from "@mui/material";
import { Grid } from "@mui/material";
import { Box } from "@mui/system";

import React, { useState } from "react";

import { Link } from "react-router-dom";
import CheckoutBar from "./checkoutBar";
import Info from "./inside-form/info";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import Payment from "./inside-form/payment";
import Delivery from "./inside-form/delivery";
import ConfirmCheckout from "./inside-form/confirmCheckout";
import { Button } from "@mui/material";
import NextButton from "./button/nextButton";
import { ZipCodeSearch } from "./data/zipCodeSearch";
import { AccordionDetails } from "@mui/material";
import { Accordion } from "@mui/material";
import { AccordionSummary } from "@mui/material";
import { AccordionActions } from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const steps = ["情報", "配送", "支払い"];

export default function Checkout() {
  const [nextButtonDisabled, setNextButtonDisabled] = useState(false);
  const activePage = (activeStep) => {
    switch (activeStep) {
      case 0:
        console.log(activeStep);
        return <Info setDisabled={setNextButtonDisabled} />;

      case 1:
        return <Delivery />;

      case 2:
        return <Payment setDisabled={setNextButtonDisabled} />;

      case 3:
        return <ConfirmCheckout setActiveStep={setActiveStep} />;

      default:
        break;
    }
  };

  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    if (activeStep <= 2) {
      setActiveStep(activeStep + 1);
    } else {
    }
  };

  const handleBack = () => {
    if (activeStep >= 1) {
      setActiveStep(activeStep - 1);
    } else {
    }
  };

  return (
    <Grid container sx={{ pb: 80 }} style={{ backgroundColor: "#efefef" }}>
      <Grid item xs={12}>
        <Grid>
          <Box
            sx={{ maxWidth: "400px", mt: 6 }}
            style={{ marginLeft: "auto", marginRight: "auto" }}
          >
            <Typography sx={{ p: 2 }} variant="h6" textAlign="center">
              チェックアウト
            </Typography>
            <Stepper sx={{ mt: 3 }} activeStep={activeStep}>
              {steps.map((step) => (
                <Step key={step}>
                  <StepLabel>{step}</StepLabel>
                </Step>
              ))}
            </Stepper>
          </Box>
        </Grid>
        <Grid sx={{ mt: 1, display: "flex", justifyContent: "center" }}>
          <Accordion
            sx={{
              display: { xs: "block", md: "none" },
              boxShadow: "none",
              width: { xs: "100%", sm: "450px" },
            }}
          >
            <AccordionSummary sx={{ display: "flex", alignItems: "center" }}>
              <ArrowDropDownIcon />
              <Typography>注文情報一覧</Typography>
            </AccordionSummary>
            <AccordionDetails
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <Grid sx={{ width: { xs: "80%", md: "300px" } }}>
                <CheckoutBar />
              </Grid>
            </AccordionDetails>
            <AccordionActions />
          </Accordion>
        </Grid>
      </Grid>
      <Grid item md={1} xl={2}></Grid>
      <Grid
        item
        container
        xs={12}
        md={10}
        xl={8}
        sx={{
          mt: { xs: 3, md: 3 },
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Grid
          sx={{
            display: { sm: "column", md: "flex" },
            justifyContent: "center",
          }}
        >
          <Grid
            sx={{
              px: { xs: 0, sm: 3, md: 5 },
              width: {
                xs: "100%",

                md: "500px",
                lg: "600px",
                xl: "700px",
              },
            }}
          >
            <Box>
              <Grid>
                <Paper
                  elevation={0}
                  sx={{
                    borderRadius: 3,
                    boxShadow: "0 0px 15px #d1cbcb",
                    width: "100%",
                  }}
                >
                  {/* <Info /> */}
                  {activePage(activeStep)}
                </Paper>
              </Grid>

              <Box
                sx={{ px: 3, display: "flex", justifyContent: "space-between" }}
              >
                <Button
                  component={Link}
                  to="/cart"
                  sx={{
                    mt: 3,
                    display: "flex",
                    alignItems: "flex-end",
                    justifyContent: "center",
                  }}
                  color="inherit"
                >
                  <ArrowBackIcon />
                  <Typography>カートに戻る</Typography>
                </Button>
                {activeStep === 0 ? (
                  <div></div>
                ) : (
                  <Button
                    onClick={handleBack}
                    sx={{
                      mt: 3,
                      alignItems: "flex-end",
                      justifyContent: "center",
                    }}
                    color="inherit"
                  >
                    <NavigateBeforeIcon />
                    <Typography>前へ</Typography>
                  </Button>
                )}
                <NextButton
                  activeStep={activeStep}
                  setActiveStep={setActiveStep}
                  disabled={nextButtonDisabled}
                />
              </Box>
            </Box>
          </Grid>
          <Grid
            sx={{
              mt: { xs: 8, md: 0 },
              width: { xs: "100%", md: "300px" },
              display: { xs: "none", md: "block" },
              justifyContent: "center",
            }}
          >
            <Grid sx={{ width: { xs: "100%", md: "300px" } }}>
              <CheckoutBar />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item md={1} xl={2}></Grid>
    </Grid>
  );
}
