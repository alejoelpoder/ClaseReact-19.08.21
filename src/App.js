import './App.css';
import Header from './components/Header';
import ItemListContainer from './components/ItemListContainer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'; 
import ItemDetailContainer from './components/ItemDetailContainer';
import Categoria from './components/Categoria';

// const style = {
//   backgroundColor: 'blue',
//   color: '#fff',
//   clase: 'Clase'
// }

// let {backgroundColor, color, clase} = style;

function App() {
  return (
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
      </Switch>
    </Router>
  );
}

export default App;
