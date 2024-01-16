import React from 'react';
import { FoodBox, HeaderText, Select, SearchButton, FormContainer } from './Header.styled';
 

const Header = ({setMeal,  settime,  getMeal,mealTime }) => {

    const handleSubmit=function(e){
        e.preventDefault();
        getMeal();
    }

  return (
    <div  >
        <HeaderText> Craft Your Bite: Choose Your Menu !</HeaderText>
        
        <FormContainer onSubmit={handleSubmit}>
        <FoodBox
          type="text"
          placeholder="Search"
          onChange={(e) => setMeal(e.target.value)}
        />

        <Select name="mealTime" id="mealTime" 
            onChange={(e) => settime(e.target.value)}
            >
                {mealTime.map((meal, index) => {
                    return (
                    <option key={index} value={meal}>
                    {meal}</option>
                    );
                })}
        </Select>
        
        <SearchButton type="submit">SEARCH</SearchButton>
        </FormContainer>
     
    </div>
  )
}

export default Header