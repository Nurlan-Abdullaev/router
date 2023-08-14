import "./App.css";
import { Products } from "./pages/Products";
import { MyCart } from "./pages/MyCart";
import { MyOrders } from "./pages/MyOrders";
import { Istore } from "./pages/Istore";
import { styled } from "styled-components";
import { Link, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header>
        <h1>iStore</h1>
        <ContainerLink>
          <Link to="/product">Product</Link>
          <Link to="/mycrt">MyCart</Link>
          <Link to="/orders">MyOrders</Link>
        </ContainerLink>
      </Header>
      <Routes>
        <Route path="/product" element={<Products />} />
        <Route path="/product/:id" element={<Istore />} />
        <Route path="/mycrt" element={<MyCart />} />
        <Route path="/orders" element={<MyOrders />} />
      </Routes>
    </div>
  );
}
const Header = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: aliceblue;
  background-color: rgb(20, 99, 169);
  font-size: 16px;
  text-decoration: none;
  padding: 20px 0;
  width: 100%;
`;
const ContainerLink = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  a {
    color: aliceblue;
    font-size: 16px;
    text-decoration: none;
    margin-right: 40px;
  }
`;

export default App;
