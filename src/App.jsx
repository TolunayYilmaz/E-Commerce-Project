import "./App.css";
import Home from "./pages/Home.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route,useLocation } from "react-router-dom";
import React, { useEffect } from "react";
import ShopPage from "./pages/ShopPage.jsx";
import PageContent from "./layouts/PageContent.jsx";
import ProductDetailPage from "./pages/ProductDetailPage.jsx";

function App() {
  const ScrollToTop = () => {
    const location = useLocation();
  
    useEffect(() => {
      window.scrollTo(0,140);
    }, [location.pathname]);
  
    return null;
  };
  return (
    <Router>
      <ScrollToTop/>
      <Switch>
        <Route exact path="/">
         <PageContent children={ <Home />}/>
        </Route>
        <Route path="/shop">
         <PageContent children={<ShopPage/>}/>
        </Route>
        <Route path="/productDetail">
         <PageContent children={<ProductDetailPage/>}/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
