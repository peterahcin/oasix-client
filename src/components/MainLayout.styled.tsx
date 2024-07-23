import styled from "@emotion/styled";
import { Screens } from "../styles/screens";
import { Link } from "react-router-dom";

export const PageContainer = styled.div`
  display: flex;
  justify-content: center;
  background-color: #14b8a6;
  height: 100vh;
  width: 100vw;
  position: fixed;
`;

export const SubContainer = styled.div`
  width: 50%;
  max-width: 800px;
  min-width: 360px;
  padding: 32px 64px;
  background-color: white;
  border-radius: 7px;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 32px;
  margin-bottom: 32px;
`;

export const Header = styled.header`
  width: 100%;
  background-color: white;
`;

export const Navbar = styled.nav`
  display: flex;
  flex-direction: row;
  margin: 0px;
  justify-content: space-between;
  width: 100%;
`;

export const NavLink = styled(Link)`
  margin: 0;
  font-weight: normal;
  font-size: 20px;
  transition: 0.4s;
  &:hover {
    font-weight: bolder;
    transition: 0.4s;
  }
  &:active {
    color: #14b8a6;
    font-weight: bolder;
  }
`;
