import { useLocation } from "react-router-dom";
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
  const isAuthPage =
    location.pathname === "/login" || location.pathname === "/register";

  return (
    <StyledHeader>
      <Container>
        <HeaderLogo>
          <img src="/images/Logo.png" alt="Logo" />
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

            <LogoutButton onClick={() => {}}>Выйти</LogoutButton>
          </>
        )}
      </Container>
    </StyledHeader>
  );
}
