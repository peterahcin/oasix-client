import { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import usePageWidth from "../customHooks/usePageWidth";
import * as S from "./MainLayout.styled";

const CustomNavLink = ({
  to,
  children,
  onClick,
}: {
  to: string;
  children: any;
  onClick?: () => void;
}) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <S.NavLink to={to} isActive={isActive} onClick={onClick}>
      {children}
    </S.NavLink>
  );
};

export default function MainLayout() {
  const location = useLocation();
  const pathname = location.pathname;
  const [pageTitle, setPageTitle] = useState<string>("");
  const pageWidth = usePageWidth();
  const [burgerMenuOpen, setBurgerMenuOpenClose] = useState<boolean>(false);

  const handleBurgerMenuOpenClose = () => {
    setBurgerMenuOpenClose((state) => !state);
  };

  const getPageTitle = (path: string) => {
    if (path === "/") {
      return "Start New Project";
    }
    let title = path.substring(1);
    title = title.replace("-", " ");
    return title;
  };

  useEffect(() => {
    setPageTitle(getPageTitle(pathname));
  }, [pathname]);

  return (
    <S.PageContainer>
      <S.SubContainer increasedWidth={pageWidth <= 700}>
        <S.Header>
          <S.Navbar>
            {pageWidth >= 1090 ? (
              <>
                <CustomNavLink to="/">Start New Project</CustomNavLink>
                <CustomNavLink to="/system-sizing">System Sizing</CustomNavLink>
                <CustomNavLink to="/simulation-parameters">
                  Simulation Params
                </CustomNavLink>
                <CustomNavLink to="/results">Results</CustomNavLink>
              </>
            ) : (
              <>
                <div style={{ width: "32px" }} className="I am invisible"></div>
                {pageWidth >= 690 && <S.Title>{pageTitle}</S.Title>}
                <S.BurgerMenu onClick={handleBurgerMenuOpenClose}>
                  {burgerMenuOpen ? (
                    <S.CloseX />
                  ) : (
                    <>
                      <S.Line />
                      <S.Line />
                      <S.Line />
                    </>
                  )}
                </S.BurgerMenu>
                {burgerMenuOpen && (
                  <S.BurgerMenuPopover>
                    <S.BurgerMenuBox>
                      <CustomNavLink to="/" onClick={handleBurgerMenuOpenClose}>
                        Start New Project
                      </CustomNavLink>
                      <CustomNavLink
                        to="/system-sizing"
                        onClick={handleBurgerMenuOpenClose}
                      >
                        System Sizing
                      </CustomNavLink>
                      <CustomNavLink
                        to="/simulation-parameters"
                        onClick={handleBurgerMenuOpenClose}
                      >
                        Simulation Params
                      </CustomNavLink>
                      <CustomNavLink
                        to="/results"
                        onClick={handleBurgerMenuOpenClose}
                      >
                        Results
                      </CustomNavLink>
                    </S.BurgerMenuBox>
                  </S.BurgerMenuPopover>
                )}
              </>
            )}
          </S.Navbar>
        </S.Header>
        <Outlet />
      </S.SubContainer>
    </S.PageContainer>
  );
}
