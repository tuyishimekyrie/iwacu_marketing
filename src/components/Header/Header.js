import Link from 'next/link';
import React from 'react';
import { AiOutlineTwitter, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { DiSenchatouch } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons } from './HeaderStyles';

const Header = () =>  (
  <Container>
    <Div1>
      <Link href="/">
        <a style={{ display: 'flex', alignItems: 'center', color:"white" }}>
          <DiSenchatouch size="3rem" /> <span>Iwacu Marketing</span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#projects">
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#tech">
          <NavLink>Services</NavLink>
        </Link>
      </li>        
      <li>
        <Link href="#about">
          <NavLink>About Us</NavLink>
        </Link>
      </li>        
    </Div2>
      <Div3>
        <SocialIcons href="https://google.com">
          <AiOutlineTwitter size="2.5rem" />
        </SocialIcons>
        <SocialIcons href="https://google.com">
          <AiFillLinkedin size="2.5rem" />
        </SocialIcons>
        <SocialIcons href="https://google.com">
          <AiFillInstagram size="2.5rem"/>
        </SocialIcons>
      </Div3>
    </Container>
);

export default Header;
