import styled from "styled-components";

export const MainContainer = styled.div`
    display:flex ;
    flex-wrap: wrap;
    gap: 2rem;
    justify-content: center;
    `;

export const EachCard = styled.div`
   border: 1px solid grey;
    display: flex;
    flex-direction: column;
    padding: 1rem;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
 `;

 export const Title = styled.h2`
    font-size: 1.5rem;
 `;

 export const MealImage =styled.img`
    width: 250px;
    padding: .3rem;
 `;

 export const ButtonDetail = styled.button`
    background-color: #df5719 ;
    color: white;
    padding: .8rem;
    border-radius:5px ;
    font-size: large;
 `;