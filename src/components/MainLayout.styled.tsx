import styled from "@emotion/styled";
import { Screens } from "../styles/screens";
import { NavLink as NavLinkComponent } from "react-router-dom";

export const PageContainer = styled.div`
  display: flex;
  justify-content: center;
  background-color: #50e3c2;
  height: 100vh;
  width: 100vw;
  position: fixed;
  background-image: radial-gradient(
      at 47% 33%,
      hsl(162, 77%, 40%) 0,
      transparent 59%
    ),
    radial-gradient(at 82% 65%, hsl(198, 100%, 50%) 0, transparent 55%);
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
  backdrop-filter: blur(16px) saturate(180%);
  -webkit-backdrop-filter: blur(16px) saturate(180%);
  background-color: rgba(255, 255, 255, 0.75);
  border-radius: 12px;
  border: 1px solid rgba(209, 213, 219, 0.3);
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

export const NavLink = styled(NavLinkComponent)<{ isActive?: boolean }>`
  margin: 0;
  font-weight: 600;
  font-size: 20px;
  transition: 0.4s;
  text-decoration: none;
  color: ${({ isActive }) => (isActive ? "#14b8a6" : "#5e81f2")};
  &:hover {
    font-weight: bolder;
    transition: 0.4s;
  }
  /* &:active {
    color: #14b8a6;
    font-weight: bolder;
  } */
`;
