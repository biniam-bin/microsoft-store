import React from "react";
import { HeaderContainer, Nav } from "./style";
import { BsPerson } from "react-icons/bs";
import { VscSearch } from "react-icons/vsc";
import { HiOutlineHome } from 'react-icons/hi';
import { AiOutlineAppstore } from "react-icons/ai";
import {TbDeviceGamepad2} from "react-icons/tb"

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <div className="top">
        <div className="logo">
          <img src="/images/logo.png" alt="" />
        </div>
        <div className="input__container">
          <input
            type="text"
            placeholder="Search apps, movies, games and more"
          />
          <span>
            <VscSearch />
          </span>
        </div>

        <div className="login__container">
          <BsPerson />
        </div>
      </div>
      <div className="bottom">
        {/* <Nav className="nav" active={state === "home"}>
          <HiOutlineHome color="red" />
          <p>Home</p>
        </Nav>
        <Nav className="nav" active={state === "apps"}>
          <AiOutlineAppstore />
          <p>Apps</p>
        </Nav>
        <Nav className="nav" active={state === "games"}>
          <TbDeviceGamepad2 />
          <p>Games</p>
        </Nav> */}
      </div>
    </HeaderContainer>
  );
};

export default Header;
