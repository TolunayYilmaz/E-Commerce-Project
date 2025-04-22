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
import { useDispatch, useSelector } from "react-redux";
import { verifyToken } from "./store/actions/clientThunks.js";
import PrivateRoute from "./components/privateRoute/PrivateRoute.jsx";
import { getCategories, getProducts } from "./store/actions/productThunks.js";
import CircularProgress from "@mui/material/CircularProgress";

function App() {
  const dispatch = useDispatch();
  let isLoading = useSelector((state) => state.client.loading);

  useEffect(() => {
    dispatch(verifyToken());
    dispatch(getCategories());
    dispatch(getProducts());
    console.log("Loading ekran:" + isLoading);
  }, [dispatch]);

  const ScrollToTop = () => {
    const location = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [location.pathname]);

    return null;
  };
  return isLoading ? (
    <div className="flex items-center justify-center">
      {" "}
      <CircularProgress size="150px" sx={{ color: "#23A6F0" }} />
    </div>
  ) : (
    <Router>
      <ScrollToTop />
      <Switch>
        <Route exact path="/">
          <PageContent children={<Home />} />
        </Route>
        <Route path="/shop">
          <PageContent children={<ShopPage />} />
        </Route>
        <PrivateRoute path="/productDetail">
          <PageContent children={<ProductDetailPage />} />
        </PrivateRoute>{" "}
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
