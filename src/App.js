import {BrowserRouter,Routes,Route} from "react-router-dom"
import Header from "./component/Header";
import Home from "./component/Home";
import Coins from "./component/Coins";
import CoinDetails from "./component/CoinDetails";
import Exchanges from "./component/Exchanges";
function App() {
  return (
   
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>} ></Route>
        <Route path="/coins" element={<Coins/>} ></Route>
        <Route path="/coin/:id" element={<CoinDetails/>} ></Route>
        <Route path="/exchanges" element={<Exchanges/>} ></Route>
      </Routes>
      </BrowserRouter>
  
  );
}

export default App;
