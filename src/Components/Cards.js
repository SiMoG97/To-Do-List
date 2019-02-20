import React from "react";
import styled from "styled-components";

const MyCard = styled.div`
  width: 85%;
  margin: 25px auto;
  background: #0097e6;
  padding:5px 0
  color:white;
  text-align:center;
  transition:.3s;
  border-radius:20px;
  box-shadow: 5px 5px 20px  grey;
  :hover{
    background:#e84118;
    cursor:pointer;
  }
`;
const H2 = styled.h2`
  text-align: center;
  color: grey;
`;

const Cards = props => {
  const toDos = props.toDo;
  const toDoList =
    toDos.length > 0 ? (
      toDos.map(toDo => {
        return (
          <MyCard key={toDo.id} onClick={() => props.deleteCard(toDo.id)}>
            <h2>{toDo.content}</h2>
          </MyCard>
        );
      })
    ) : (
      <H2>You have nothing to do </H2>
    );

  return <div>{toDoList}</div>;
};

export default Cards;
