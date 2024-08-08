import styled from "@emotion/styled";
import { Screens } from "../styles/screens";
import { ReactComponent as X } from "../icons/cross-simple.svg";
import { NavLink as NavLinkComponent } from "react-router-dom";

export const PageContainer = styled.div`
  display: flex;
  overflow: scroll;
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

export const SubContainer = styled.div<{ increasedWidth: boolean }>`
  width: ${({ increasedWidth }) => (increasedWidth ? "95%" : "65%")};
  padding: ${({ increasedWidth }) =>
    increasedWidth ? "16px 32px" : "32px 64px"};
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
  height: fit-content;
`;

export const Header = styled.header`
  width: 100%;
  padding-bottom: 24px;
  border-bottom: 1px solid #c0c0c0;
`;

export const Navbar = styled.nav`
  display: flex;
  font-family: "Inter";
  flex-direction: row;
  margin: 0px;
  justify-content: space-between;
  width: 100%;
  align-items: center;
`;

export const BurgerMenu = styled.div`
  width: 32px;
  height: 32px;
  font-family: "Inter";
  background-color: #5e81f2;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding: 0.5rem;
  cursor: pointer;
`;

export const Line = styled.div`
  height: 2.5px;
  background-color: #c0c0c0;
`;

export const CloseX = styled(X)`
  width: 16px;
  height: 16px;
  fill: #c0c0c0;
`;

export const BurgerMenuPopover = styled.div`
  font-family: "Inter";
  position: fixed;
  top: 0;
  right: 0;
  background: white;
  border: 1px solid #ccc;
  z-index: 1000;
  min-width: 230px;
  padding: 16px;
  margin-top: 70px;
  border-radius: 12px;
`;

export const BurgerMenuBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  font-family: "Inter";
`;

export const NavLink = styled(NavLinkComponent)<{ isActive?: boolean }>`
  margin: 0;
  font-weight: ${({ isActive }) => (isActive ? "bolder" : "600")};
  font-size: 20px;
  transition: 0.4s;
  text-decoration: none;
  white-space: nowrap;
  color: ${({ isActive }) => (isActive ? "#14b8a6" : "#09b8f9")};
  &:hover {
    font-weight: bolder;
    transition: 0.4s;
  }
`;

export const Title = styled.p`
  margin: 0;
  font-weight: 800;
  font-size: 20px;
  transition: 0.4s;
  white-space: nowrap;
  color: #14b8a6;
  text-transform: capitalize;
`;
