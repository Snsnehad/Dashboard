import Sidebar from './components/Sidebar/Sidebar';
import Topbar from './components/topbar/Topbar';
import "./app.css"
import Home from './pages/Home/Home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserList from './pages/User/UserList';
import User from './pages/User/User';
import NewUser from './pages/newPage/NewUser';
import ProductList from './pages/productlist/ProductList';
import Product from './pages/product/Product';
import NewProduct from './pages/newProduct/NewProduct';


function App() {

  return (
    <Router>
      <Topbar />
      <div className="container">
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/users" element={<UserList />}></Route>
          <Route path="/user/:userId" element={<User />}></Route>
          <Route path="/newUser" element={<NewUser />}></Route>
          <Route path="/products" element={<ProductList />}></Route>
          <Route path="/product/:productId" element={<Product />}></Route>
          <Route path="/newproduct" element={<NewProduct />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App
