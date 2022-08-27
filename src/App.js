import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
// import Album from "./components/topPage";

import SignIn from "./components/login/signIn.js";
import SignUp from "./components/login/signUp.js";
import Cart from "./components/cart/cart";
// import ProductDetail from "./components/productDetail";
import Search from "./components/search";
import AccountDetail from "./components/accountDetail/accountDetail";
import Checkout from "./components/checkout/checkout";
import ShoppingHistry from "./components/shoppingHistory/shoppingHistory";
import Completion from "./components/checkout/completion";
import { Grid } from "@mui/material";
import ProductDitail from "./components/productDetail/productDetail";
import Navbar from "./components/navbar/navbar";
import SearchView from "./components/search-view/searchMain";
import TopPage from "./components/top-page/topPage";
import MobileMenuBar from "./components/navbar/mobile-menu-bar/mobileMenuBar.js";
import ScrollTop from "./scrollToTop.js";
import SearchViewAndSideBar from "./components/search-view/searchViewAndSideBar.js";
import Status404 from "./components/status404/status404.js";

export default function App() {
  return (
    <Grid
      sx={{ pb: 80 }}
      style={{
        backgroundColor: "#f8f8f8",
        minHeight: "100vh",
        backgroundSize: "cover",
      }}
    >
      <BrowserRouter>
        <ScrollTop />

        <Routes>
          <Route
            path="*"
            element={
              <Grid>
                <Grid sx={{ height: "45px" }}></Grid>
                <Status404 />
              </Grid>
            }
          />
          <Route
            path={`/`}
            element={
              <Grid>
                <Grid sx={{ height: "45px" }}>
                  {/* <Nav /> */}
                  <Navbar />
                </Grid>
                <TopPage />
              </Grid>
            }
          />
          {/* <Route path="/search/:groupId/:name" element={<Search />} /> */}
          <Route
            path="/search/:groupId/:name"
            element={
              <Grid>
                <Grid sx={{ height: "45px" }}>
                  {/* <Nav /> */}
                  <Navbar />
                </Grid>
                <SearchViewAndSideBar />
              </Grid>
            }
          />
          <Route
            path=":itemId"
            element={
              <Grid>
                <Grid sx={{ height: "45px" }}>
                  {/* <Nav /> */}
                  <Navbar />
                </Grid>
                <ProductDitail />
              </Grid>
            }
          />
          {/* <Route path=":itemId" element={<ProductDetail />} /> */}
          {/* <Route path={`/detail`} element={<ProductDetail />} /> */}
          <Route path={`/checkout/`} element={<Checkout />} />
          <Route path={`/sign-up/`} element={<SignUp />} />
          <Route path={`/sign-in/`} element={<SignIn />} />
          <Route
            path={`/cart/`}
            element={
              <Grid>
                <Grid sx={{ height: "45px" }}>
                  {/* <Nav /> */}
                  <Navbar />
                </Grid>
                <Cart />
              </Grid>
            }
          />
          <Route
            path={`/account-detail/`}
            element={
              <Grid>
                <Grid sx={{ height: "45px" }}>
                  {/* <Nav /> */}
                  <Navbar />
                </Grid>
                <AccountDetail />
              </Grid>
            }
          />
          <Route
            path={`/shopping-history/`}
            element={
              <Grid>
                <Grid sx={{ height: "45px" }}>
                  {/* <Nav /> */}
                  <Navbar />
                </Grid>
                <ShoppingHistry />
              </Grid>
            }
          />
          <Route path={`/completion/`} element={<Completion />} />
        </Routes>
        <Grid>
          <MobileMenuBar />
        </Grid>
      </BrowserRouter>
    </Grid>
  );
}
