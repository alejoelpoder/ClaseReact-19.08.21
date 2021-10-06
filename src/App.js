import './App.css';
import Header from './components/Header';
import ItemListContainer from './components/ItemListContainer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'; 
import ItemDetailContainer from './components/ItemDetailContainer';
import Cart from './components/Cart'
import Categoria from './components/Categoria';
import CartContextProvider from './components/context/cartContext';

function App() {
  
  return (
    <CartContextProvider>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <ItemListContainer text={"Item List Container"} />
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
        </Switch>
      </Router>
    </CartContextProvider>
  );
}

export default App;
