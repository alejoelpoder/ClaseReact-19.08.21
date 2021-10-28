import './App.css';
import Header from './components/Header';
import ItemListContainer from './components/ItemListContainer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'; 
import ItemDetailContainer from './components/ItemDetailContainer';
import Cart from './components/Cart'
import Categoria from './components/Categoria';
import CartContextProvider from './components/context/cartContext';
import Checkout from './components/Checkout';
import Banner from './components/Banner';
import HomeSlider from './components/Slider';
import CategoriesGrid from './components/Grid';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';

function App() {
  
  return (
    <CartContextProvider>
      <Router>
        <Banner />
        <Header />
        <HomeSlider />

        <Switch>
          <Route exact path="/">
            <ItemListContainer text={"Item List Container"} />
            <CategoriesGrid />
            <Newsletter />
          </Route>
          <Route path="/detail/:id?">
            <ItemDetailContainer />
          </Route>
          <Route path="/categoria/:cat?">
            <Categoria />
          </Route>
          <Route path="/Cart">
            <Cart />
          </Route>
          <Route path="/Checkout">
            <Checkout />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </CartContextProvider>
  );
}

export default App;
