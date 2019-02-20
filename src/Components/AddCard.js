import React, { Component } from "react";
import styled from "styled-components";

const MyForm = styled.div`
  width:100%;
  display;flex;
  flex-direction: column;
  text-align:center;
  margin:50px 0;
`;
const Input = styled.input`
  width:80%;
  height:50px;
  margin 10px auto;
  padding:5px 25px;
  border-radius:20px;
  font-size:25px;
  border:1px solid black;
  :focus {
    outline:0;
    }
`;
const Button = styled.button`
  width:200px;
  height:50px;
  margin 10px auto;
  padding:10px 25px;
  border-radius:20px;
  font-size:20px;
  background:#4cd137;
  color:white;
  border:none;
  transition:.3s
  :focus {
    outline:0;
    }
  :hover{
    cursor:pointer;
    background:#44bd32;
  }
  
`;
class AddCard extends Component {
  state = {
    content: null,
    id: null
  };

  chnageHandle = e => this.setState({ content: e.target.value });
  submitHandling = () => this.props.addCard(this.state);

  render() {
    return (
      <MyForm>
        <Input
          type="text"
          placeholder="To Do"
          id="content"
          onChange={this.chnageHandle}
        />
        <br />
        <Button onClick={this.submitHandling}>Submit</Button>
      </MyForm>
    );
  }
}

export default AddCard;
