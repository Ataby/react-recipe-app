 import styled from "styled-components";

 export const Select =styled.select`
 margin-right: .5rem;
 padding: .5rem;
 font-size: large;
 `;

export const HeaderText = styled.h1`
font-size: 2rem;
color: black;
text-align: center;
 padding: 1rem;
`;

export const FoodBox = styled.input`
  padding:  .5rem;
  margin-right: .5rem;
  font-size: large;
`;

export const  SearchButton = styled.button`
  padding: .5rem 1rem;
  background-color: #df5719;
  border-radius: 7px;
  color: white;
  cursor: pointer;
  font-size: large;
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  border: 2px solid white;
  border-radius: 3px;
  margin: 20px;
`;

export const FoodInput = styled.input`
  height: 3rem;
  width: 15rem;
  border: none;
  border-radius: 3px;
  outline: none;
  text-indent: 10px;
  margin: 5px;
  font-size: 2rem;
`;