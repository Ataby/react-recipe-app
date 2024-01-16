import React from 'react'
 import chefLogo from "../../img/chef logo.jpg";
import { Image, PageLink } from './Navbar.styled';
import { Link,NavLink } from 'react-router-dom';
import Flex from '../globalStyles/Flex.styled';
import { useState } from 'react';
 
 

const Navbar = () => {
    const [OpenMenu, setOpenMenu] = useState(false);

  return (
    <Flex justify="space-between" bg="#F2F2F2" pad=".5rem" >
    <Flex to="/" >
        <Image src={chefLogo}  ></Image>
        {/* <h2>RECIPES</h2> */}
    </Flex>

    <Flex>
        <PageLink to="/" > HOME</PageLink>
        <PageLink to="/about" > ABOUT</PageLink>
        <PageLink to="register"> REGISTER</PageLink>
        <PageLink to="logout" > LOG OUT</PageLink>
    </Flex>
    </Flex >
  )
}

export default Navbar;