import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";
 

export const Image = styled.img`
  width: 200px;
  margin-left: 3rem;
  /* height: 100px; */
`;

export const PageLink = styled(NavLink)`
    text-align: center;
    padding: .5rem;
    color: ${({color})=> color || "black"} ;
    text-decoration: none;
    border-right: 1px solid black;
    
`;

 
