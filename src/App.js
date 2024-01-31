import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import "./App.css"
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<ItemListContainer greeting={"Bienvenido"} greetingText={"Puede ver nuestros productos deslizando hacia abajo"}/>} />
          <Route path='/category/:categoryID' element={<ItemListContainer/>} />
          <Route path='/item/:itemID' element={<ItemDetailContainer />} />
          <Route path='*' element={<img className="error" src={require("../src/Error404.svg").default} alt="" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
