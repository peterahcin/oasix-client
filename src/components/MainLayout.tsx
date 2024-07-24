import { Outlet, useLocation } from "react-router-dom";
import * as S from "./MainLayout.styled";

const CustomNavLink = ({ to, children }: { to: string; children: any }) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <S.NavLink to={to} isActive={isActive}>
      {children}
    </S.NavLink>
  );
};

export default function MainLayout() {
  return (
    <S.PageContainer>
      <S.SubContainer>
        <S.Header>
          <S.Navbar>
            <CustomNavLink to="/">Start New Project</CustomNavLink>
            <CustomNavLink to="/system-sizing">System Sizing</CustomNavLink>
            <CustomNavLink to="/simulation-parameters">
              Simulation Params
            </CustomNavLink>
            <CustomNavLink to="/results">Results</CustomNavLink>
          </S.Navbar>
        </S.Header>
        <Outlet />
      </S.SubContainer>
    </S.PageContainer>
  );
}
