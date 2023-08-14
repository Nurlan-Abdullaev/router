import React from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { styled } from "styled-components";
const produc = [
  {
    img: "https://i0.wp.com/abizot.com.ng/wp-content/uploads/2022/09/iPhone-14-Pro-Max-512GB.png?fit=770%2C770&ssl=1",
    title: "Iphone 14 Pro",
    price: "$1750",
    text: "iPhone 14 Pro поднимает планку того, представляем совершенно новую основную камеру на 48 МП с усовершенствованным сенсором.",

    id: 1,
  },
  {
    img: "https://i0.wp.com/abizot.com.ng/wp-content/uploads/2022/09/iPhone-14-Pro-Max-512GB.png?fit=770%2C770&ssl=1",
    title: "Iphone 13 Pro",
    price: "$1600",
    text: "iPhone 13 Pro создан для съёмки при слабом освещении. Широкоугольная камера с увеличен и использует возможности для портретов в Ночном режиме",
    id: 2,
  },
  {
    img: "https://i0.wp.com/abizot.com.ng/wp-content/uploads/2022/09/iPhone-14-Pro-Max-512GB.png?fit=770%2C770&ssl=1",
    title: "Iphone 12 Pro",
    price: "$1250",
    text: "Как и предполагалось, Apple провела полноценный редизайн iPhone. Теперь корпуса смартфона имеет такие же прямоугольные грани, как у iPhone 4 и iPhone 5.",
    id: 3,
  },
];

export const Products = () => {
  const Producs = useNavigate();

  const ProductsNavigate = () => {
    Producs("/products");
  };
  return (
    <Contain>
      {produc.map((iphone) => {
        return (
          <MiniContain>
            <Link to={`${iphone.id}`} key={iphone.id}>
              <img src={iphone.img} alt="#" />
              <h1>{iphone.title}</h1>
              <p>{iphone.price}</p>
            </Link>
          </MiniContain>
        );
      })}
      <button onClick={ProductsNavigate}>Go Back</button>
      <Outlet />
    </Contain>
  );
};
const Contain = styled.div`
  display: flex;
  gap: 20px;
  justify-content: center;
  align-items: end;
  margin-top: 30px;
  margin-left: 100px;
  h1 {
    color: rgb(20, 99, 169);
    text-decoration: none;
    margin-right: 40px;
  }
  p {
    color: rgb(20, 99, 169);
    text-decoration: none;
    margin-right: 40px;
  }

  img {
    display: flex;
    gap: 20px;
    width: 350px;
    height: 300px;
    border-radius: 30px;
  }
  button {
    width: 125px;
    height: 50px;
    padding: 4px 26px;
    background: #127f75;
    border-radius: 20px;
    color: aliceblue;
    border: none;
  }
`;

const MiniContain = styled.div`
  border: none;
  border-radius: 30px;
  width: 350px;
  height: 450px;
  background-color: #fff;
  box-shadow: 8px 3px 14px 5px rgba(34, 60, 80, 0.26);
  a {
    text-decoration: none;
  }
`;
