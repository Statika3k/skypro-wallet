import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  Container,
  HeaderLogo,
  HeaderNav,
  LogoutButton,
  NavLink,
  StyledHeader,
  MobileCurrentPage,
  MobileMenuButton,
  MobileMenuDropdown,
  MobileMenuItem,
} from "./Header.styled";

export default function Header({ isAddFormOpen, setIsAddFormOpen }) {
  const location = useLocation();
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isAuthPage =
    location.pathname === "/login" || location.pathname === "/register";

  const getPageTitle = () => {
     if (location.pathname === "/") {
      if (isAddFormOpen) {
        return "Новый расход";
      }
      return "Мои расходы";
    }
    if (location.pathname === "/analytics") return "Анализ расходов";
    if (location.pathname === "/add-expense") return "Новый расход";
    return "Меню";
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("isAuth");
    localStorage.removeItem("userLogin");
    localStorage.removeItem("userName");
    navigate("/login", { replace: true });
  };

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const handleAddExpenseClick = () => {
    if (location.pathname === "/") {
      setIsAddFormOpen(true);
    } else {
      navigate("/");
      setTimeout(() => {
        setIsAddFormOpen(true);
      }, 0);
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <StyledHeader>
      <Container>
        <HeaderLogo>
          <img src="/images/Logo.svg" alt="Logo" />
        </HeaderLogo>

        {!isAuthPage && (
          <>
            {/* Десктопная навигация */}
            <HeaderNav>
              <NavLink to="/" $active={location.pathname === "/" && !isAddFormOpen}>
                Мои расходы
              </NavLink>
              <NavLink to="/analytics" $active={location.pathname === "/analytics"}>
                Анализ расходов
              </NavLink>
            </HeaderNav>

            {/* Мобильное название */}
            <MobileCurrentPage>
              <span className="mobile-page-title">{getPageTitle()}</span>
              <MobileMenuButton
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Открыть меню"
              >
                ▼
              </MobileMenuButton>
            </MobileCurrentPage>

            {/* Выпадающее меню */}
            {isMobileMenuOpen && (
              <MobileMenuDropdown>
                <MobileMenuItem 
                  to="/" 
                  $active={location.pathname === "/" && !isAddFormOpen}
                  onClick={(e) => {
                    e.preventDefault();
                    if (location.pathname === "/") {
                      setIsAddFormOpen(false);
                    } else {
                      navigate("/");
                    }
                    setIsMobileMenuOpen(false);
                  }}
                >
                  Мои расходы
                </MobileMenuItem>
                <MobileMenuItem
                  to="/"
                  $active={isAddFormOpen}
                  onClick={handleAddExpenseClick}
                >
                  Новый расход
                </MobileMenuItem>
                <MobileMenuItem
                  to="/analytics"
                  $active={location.pathname === "/analytics"}
                  onClick={(e) => {
                    e.preventDefault();
                    navigate("/analytics");
                    setIsMobileMenuOpen(false);
                  }}
                >
                  Анализ расходов
                </MobileMenuItem>
              </MobileMenuDropdown>
            )}

            <LogoutButton onClick={handleLogout}>Выйти</LogoutButton>
          </>
        )}
      </Container>
    </StyledHeader>
  );
}