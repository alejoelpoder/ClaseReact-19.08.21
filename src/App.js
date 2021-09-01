import './App.css';
import Header from './components/Header';
import ItemListContainer from './components/ItemListContainer';

// const style = {
//   backgroundColor: 'blue',
//   color: '#fff',
//   clase: 'Clase'
// }

// let {backgroundColor, color, clase} = style;

function App() {
  return (
    <>
      <Header />
      <ItemListContainer text={"Item List Container"} />
    </>
  );
}

export default App;
