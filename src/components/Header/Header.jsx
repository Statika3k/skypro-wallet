import { useLocation, useNavigate } from "react-router-dom";
import {
  Container,
  HeaderLogo,
  HeaderNav,
  LogoutButton,
  NavLink,
  StyledHeader,
} from "./Header.styled";

export default function Header() {
  const location = useLocation();
  const navigate = useNavigate();
  const isAuthPage =
    location.pathname === "/login" || location.pathname === "/register";

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("isAuth");
    localStorage.removeItem("userLogin");
    localStorage.removeItem("userName");

    navigate("/login", { replace: true });
  };

  return (
    <StyledHeader>
      <Container>
        <HeaderLogo>
          <img src="/images/Logo.svg" alt="Logo" />
        </HeaderLogo>

        {!isAuthPage && (
          <>
            <HeaderNav className="header_actions _active">
              <NavLink to="/" $active={location.pathname === "/"}>
                Мои расходы
              </NavLink>
              <NavLink
                to="/analytics"
                $active={location.pathname === "/analytics"}
              >
                Анализ расходов
              </NavLink>
            </HeaderNav>

            <LogoutButton onClick={handleLogout}>Выйти</LogoutButton>
          </>
        )}
      </Container>
    </StyledHeader>
  );
}
