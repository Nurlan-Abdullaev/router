import React from "react";
import { useNavigate, useParams } from "react-router-dom";
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

export const Istore = () => {
  const params = useParams();
  const goBackNavigate = useNavigate();

  const back = () => {
    goBackNavigate(-1);
  };
  const Product = produc.filter((el) => el.id === +params.id);

  return (
    <Container>
      {Product.map((iphone) => (
        <>
          <img src={iphone.img} alt="#" />
          <h1>{iphone.title}</h1>
          <h3>{iphone.price}</h3>
          <h3>{iphone.text}</h3>
        </>
      ))}
      <button onClick={back}>Go Back</button>
    </Container>
  );
};
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 50px 520px;
  border: none;
  flex-direction: column;
  border-radius: 50px;
  width: 400px;
  height: 700px;
  color: rgb(20, 99, 169);
  background-color: #fff;
  box-shadow: 8px 3px 14px 5px rgba(34, 60, 80, 0.26);

  img {
    width: 350px;
    height: 300px;
  }
  button {
    width: 125px;
    height: 30px;
    padding: 4px 26px;
    background: #127f75;
    border-radius: 20px;
    color: aliceblue;
    border: none;
  }
`;
