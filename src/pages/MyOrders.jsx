import React from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";

export const MyOrders = () => {
  const goBaskNavigate = useNavigate();

  const back = () => {
    goBaskNavigate(-1);
  };

  return (
    <Container>
      <h1>MyOrders</h1>
      <button onClick={back}>Go Back</button>
    </Container>
  );
};
const Container = styled.div`
  h1 {
    color: rgb(20, 99, 169);
    text-decoration: none;
    margin-right: 40px;
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
