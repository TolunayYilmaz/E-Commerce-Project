import "./App.css";
import Home from "./pages/Home.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ShopPage from "./pages/ShopPage.jsx";
import PageContent from "./layouts/PageContent.jsx";
import ProductDetailPage from "./pages/ProductDetailPage.jsx";

function App() {
  return (
    <Router>
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
