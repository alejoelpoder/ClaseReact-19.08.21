import './App.css';
import { useState } from 'react';
import { createContext } from 'react';
import Header from './components/Header';
import ItemListContainer from './components/ItemListContainer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'; 
import ItemDetailContainer from './components/ItemDetailContainer';
import Cart from './components/Cart'
import Categoria from './components/Categoria';
import CartContextProvider from './components/context/cartContext';

// const style = {
//   backgroundColor: 'blue',
//   color: '#fff',
//   clase: 'Clase'
// }

// let {backgroundColor, color, clase} = style;

const products = [
  // {id:1,titulo: 'Casco soviético',descripcion: 'Lorem ipsum bla bla bla este producto es muy bueno, comprelo, lleve joven, compre que está bien bonito.',precio: 300,urlFoto: 'https://preview.free3d.com/img/2020/05/2324859450445268195/zus32lda-900.jpg',stock: 10,categoria: 'cascos'},
  // {id:2,titulo: 'Palantír',descripcion: 'Este es el mejo producto del mundo porque fue forjado por los elfos noldor en los días de la edad de los arboles.',precio: 400,urlFoto: 'https://i.pinimg.com/originals/f9/73/8a/f9738aa9f70100d28ad3a9088321d873.jpg',stock: 15,categoria: 'cascos'},
  // {id:3,titulo: 'Casco de propulsión',descripcion: 'Lorem ipsum 3 este producto lo compró el profe Fede y él sabe lo que compra así que cómpralo tu también',precio: 750,urlFoto: 'https://i.pinimg.com/originals/52/cf/1f/52cf1fbb8ecc4b66afce631b17f14f2e.jpg',stock: 70,categoria: 'cascos'},
  // {id:4,titulo: 'Motor de propulsión',descripcion: 'Lorem ipsum 3 este producto lo compró el profe Fede y él sabe lo que compra así que cómpralo tu también',precio: 750,urlFoto: 'https://i.pinimg.com/originals/52/cf/1f/52cf1fbb8ecc4b66afce631b17f14f2e.jpg',stock: 70,categoria: 'cohetes'},
  // {id:5,titulo: 'Motor de Cohete',descripcion: 'Lorem ipsum 3 este producto lo compró el profe Fede y él sabe lo que compra así que cómpralo tu también',precio: 750,urlFoto: 'https://i.pinimg.com/originals/52/cf/1f/52cf1fbb8ecc4b66afce631b17f14f2e.jpg',stock: 70,categoria: 'cohetes'},
  // {id:6,titulo: 'Motor',descripcion: 'Lorem ipsum 3 este producto lo compró el profe Fede y él sabe lo que compra así que cómpralo tu también',precio: 750,urlFoto: 'https://i.pinimg.com/originals/52/cf/1f/52cf1fbb8ecc4b66afce631b17f14f2e.jpg',stock: 70,categoria: 'motores'},
  // {id:7,titulo: 'Motor 2',descripcion: 'Lorem ipsum 3 este producto lo compró el profe Fede y él sabe lo que compra así que cómpralo tu también',precio: 750,urlFoto: 'https://i.pinimg.com/originals/52/cf/1f/52cf1fbb8ecc4b66afce631b17f14f2e.jpg',stock: 70,categoria: 'motores'},
  // {id:8,titulo: 'Motor 3',descripcion: 'Lorem ipsum 3 este producto lo compró el profe Fede y él sabe lo que compra así que cómpralo tu también',precio: 750,urlFoto: 'https://i.pinimg.com/originals/52/cf/1f/52cf1fbb8ecc4b66afce631b17f14f2e.jpg',stock: 70,categoria: 'motores'},
  // {id:9,titulo: 'Motor 4',descripcion: 'Lorem ipsum 3 este producto lo compró el profe Fede y él sabe lo que compra así que cómpralo tu también',precio: 750,urlFoto: 'https://i.pinimg.com/originals/52/cf/1f/52cf1fbb8ecc4b66afce631b17f14f2e.jpg',stock: 70,categoria: 'motores'},
  // {id:10,titulo: 'Promo',descripcion: 'Lorem ipsum 3 este producto lo compró el profe Fede y él sabe lo que compra así que cómpralo tu también',precio: 750,urlFoto: 'https://i.pinimg.com/originals/52/cf/1f/52cf1fbb8ecc4b66afce631b17f14f2e.jpg',stock: 70,categoria: 'ofertas'},
  // {id:11,titulo: 'Traje de propulsión',descripcion: 'Lorem ipsum 3 este producto lo compró el profe Fede y él sabe lo que compra así que cómpralo tu también',precio: 750,urlFoto: 'https://i.pinimg.com/originals/52/cf/1f/52cf1fbb8ecc4b66afce631b17f14f2e.jpg',stock: 70,categoria: 'trajes'}
]

export const ContextApp = createContext('alejo')


function App() {

  const [state, setState] = useState(products)

  // console.log(ContextApp);

  const setearState = (item) => {
    setState(item)
  }
  
  return (
    <CartContextProvider>
      <ContextApp.Provider value={{state, setearState}}>
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
      </ContextApp.Provider>
    </CartContextProvider>
  );
}

export default App;
