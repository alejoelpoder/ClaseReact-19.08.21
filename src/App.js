import './App.css';
import Header from './components/Header';
import ItemListContainer from './components/ItemListContainer';
import { BrowserRouter, Switch, Route } from 'react-router-dom'; 
import ItemDetailContainer from './components/ItemDetailContainer';

// const style = {
//   backgroundColor: 'blue',
//   color: '#fff',
//   clase: 'Clase'
// }

// let {backgroundColor, color, clase} = style;

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Switch>
        <Route exact path="/">
          <ItemListContainer text={"Item List Container"} />
        </Route>
      </Switch>
      <Switch>
        <Route path="/detail/:id?">
          <ItemDetailContainer />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
