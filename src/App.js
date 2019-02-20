import React, { Component } from "react";
import AddCard from "./Components/AddCard";
import Cards from "./Components/Cards";
import styled from "styled-components";

const H1 = styled.h1`
  text-align: center;
  font-size: 50px;
`;

class App extends Component {
  state = {
    toDo: [{ content: "Today i'll eat ice cream ", id: 1 }]
  };

  addCard = newTodo => {
    newTodo.id = Math.random() * 100;
    let toDo = [...this.state.toDo, newTodo];
    this.setState({ toDo: toDo });
  };
  deleteCard = id => {
    let toDo = [...this.state.toDo];
    for (let i = 0; i < toDo.length; i++) {
      if (id === toDo[i].id) {
        toDo.splice(i, 1);
      }
    }
    this.setState({ toDo: toDo });
  };
  render() {
    return (
      <div>
        <H1>TO DO LIST</H1>
        <Cards toDo={this.state.toDo} deleteCard={this.deleteCard} />
        <AddCard addCard={this.addCard} />
      </div>
    );
  }
}

export default App;
