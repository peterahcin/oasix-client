import { Outlet } from "react-router-dom";
import * as S from "./MainLayout.styled";

export default function MainLayout() {
  return (
    <S.PageContainer>
      <S.SubContainer>
        <S.Header>
          <S.Navbar>
            <S.NavLink to="/">Start New Project</S.NavLink>
            <S.NavLink to="/system-sizing">System Sizing</S.NavLink>
            <S.NavLink to="/simulation-parameters">Simulation Params</S.NavLink>
            <S.NavLink
              to="/results"
              style={{ fontWeight: "bolder", color: "#14b8a6" }}
            >
              Results
            </S.NavLink>
          </S.Navbar>
        </S.Header>
        <Outlet />
      </S.SubContainer>
    </S.PageContainer>
  );
}
