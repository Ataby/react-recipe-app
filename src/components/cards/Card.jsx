import React from 'react';
import defaultImage from "../../assets/default-image.jpg"
import { Navigate, useNavigate } from 'react-router-dom';
import { ButtonDetail, EachCard, MainContainer, MealImage, Title } from './Card.styled';

const Card = ({recipe}) => {
    const navigate = useNavigate();
  return (
 
        <MainContainer  >
        { recipe.map(({recipe},index)=> {
            return (
                <EachCard key={index}>
                    <Title>{recipe.label}</Title>
                     <MealImage src={recipe.image || defaultImage} alt="meal_img" />
                    <ButtonDetail onClick={()=> navigate("detail",{state:recipe,replace:false})}>Get Details</ButtonDetail>
                </EachCard>
            );
        })                    
            //'REPLACE:TRUE' AYARLANIRSA, YENI SAYFA GECISI YAPILIRKEN MEVCUT SAYFA GECMISI DEGISTIRILIR YANI YENI BIR GECIS EKLENMEZ. 'GERI DON' TUSUNA TIKLAYINCA SON SAYFADAN ONCEKI SAYFAYA DEGIL, DAHA ONCEKINE GITMEYI SAGLAR.
            //STATE : SAYFALAR ARASINDA VERI GONDERMEK ICIN KULLANILAN OBJECT'DIR.
        }
        </MainContainer>
 
  )
}

export default Card;