import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import LayoutDashboard from "./layouts/layoutDashboard";
import Error404 from './Pages/Error404';
import Products from "./pages/Products";
import Categories from "./Pages/Categories";
import LastProduct from "./Pages/LastProduct";

function App(){
  return(
    <BrowserRouter>
      <Routes> 
        <Route path='/' element={<LayoutDashboard/>}>
          <Route index element={<Dashboard/>}></Route>
          <Route path="/products" element={<Products/>}></Route>
          <Route path="/categories" element={<Categories/>}></Route>
          <Route path="/lastproduct" element={<LastProduct/>}></Route>
          <Route  path='*' element={<Error404/>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
