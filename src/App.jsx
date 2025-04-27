import "./App.css";
import Home from "./pages/Home.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation,
} from "react-router-dom";
import React, { useEffect } from "react";
import ShopPage from "./pages/ShopPage.jsx";
import PageContent from "./layouts/PageContent.jsx";
import ProductDetailPage from "./pages/ProductDetailPage.jsx";
import ContactPage from "./pages/ContactPage.jsx";
import TeamPage from "./pages/TeamPage.jsx";
import AboutUsPage from "./pages/AboutUsPage.jsx";
import SignUpPage from "./pages/SignUpPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import { useDispatch } from "react-redux";

import PrivateRoute from "./components/privateRoute/PrivateRoute.jsx";

import { getAddressList, verifyToken } from "./store/actions/clientThunks.js";
import BasketPage from "./pages/BasketPage.jsx";
import AddressPage from "./pages/AddressPage.jsx";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(verifyToken());
    dispatch(getAddressList());
  }, [dispatch]);

  const ScrollToTop = () => {
    const location = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [location.pathname]);

    return null;
  };
  return (
    <Router>
      <ScrollToTop />
      <Switch>
        <Route exact path="/">
          <PageContent children={<Home />} />
        </Route>
        {/* Koruma yapıyor hesap girili değilse logine yolluyor private route görev */}
        <Route path="/shop/:gender/:categoryName/:categoryId/:productNameSlug/:productId">
          <PageContent children={<ProductDetailPage />} />
        </Route>

        <Route path="/shop/:gender/:categoryName/:categoryId">
          <PageContent children={<ShopPage />} />
        </Route>
        <Route path="/shop">
          <PageContent children={<ShopPage />} />
        </Route>
        <PrivateRoute path="/basket/address">
          <PageContent children={<AddressPage />} />
        </PrivateRoute>
        <PrivateRoute path="/basket">
          <PageContent children={<BasketPage />} />
        </PrivateRoute>

        {/* deneme token yoksa  logine yolla */}
        <Route path="/contact">
          <PageContent children={<ContactPage />} />
        </Route>
        <Route path="/team">
          <PageContent children={<TeamPage />} />
        </Route>
        <Route path="/about">
          <PageContent children={<AboutUsPage />} />
        </Route>
        <Route path="/signup">
          <PageContent children={<SignUpPage />} />
        </Route>
        <Route path="/login">
          <PageContent children={<LoginPage />} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
