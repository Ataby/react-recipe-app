import React from 'react';
import Header from '../../components/header/Header';
import axios from "axios";
import { useState,useEffect } from 'react';
import { HeaderText, HomeImg, ImgDiv } from './Home.styled';
import homeSvg from "../../assets/home.jpg"
import Card from '../../components/cards/Card';


const Home = () => {
 const [meal, setMeal] = useState("egg"); //ana yemek
 const [time, settime] = useState("breakfast");
  const [recipe, setrecipe] = useState(null); // tarifi
  const mealTime = ["Breakfast", "Lunch", "Dinner", "Snack", "Teatime"];

  let url=`https://api.edamam.com/api/recipes/v2?type=public&q=${meal}&app_id=f11f1064&app_key=6ec7076fd22e4f60479a69ad7985ab7b&mealType=${time}&imageSize=REGULAR`;

  const getMeal = async function(){
    if(meal){
      try {
        const {data } = await axios(url);
        setrecipe(data.hits)

      } catch (error) {
        console.log(error)
      }

    }else {
      alert("Please fill the form");
    }
  }
  console.log(recipe);

  useEffect(() => {
    getMeal();
 
  }, [ ]);
  
 
  return (
    <div>
      <Header
      setMeal={setMeal}   settime={settime}  getMeal={getMeal}  mealTime={mealTime} 
      />

      {!recipe && (
        <ImgDiv>
          <HomeImg src={homeSvg} />
        </ImgDiv>
      )}

      {recipe?.length ===0 && (
        <HeaderText>The meal can not be found. Please review your choices.</HeaderText>
      )}

      {recipe?.length >0 && <Card recipe={recipe} />}
    </div>
  )
}

export default Home;