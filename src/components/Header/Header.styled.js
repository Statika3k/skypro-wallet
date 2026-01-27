import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledHeader = styled.header`
  width: 100%;
  height: 64px;
  background-color: #ffffff;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 16px;
  justify-content: space-between; /* ← вернули */
`;

export const HeaderLogo = styled.div`
  img {
    display: block;
    width: 109px;
    height: 14px;
    object-fit: contain;
  }

  /* Отступ между логотипом и навигацией на десктопе */
  margin-right: 48px;

  @media (max-width: 768px) {
    margin-right: 0; /* на мобилке — без отступа (он будет у MobileCurrentPage) */
  }
`;

// Десктопная навигация
export const HeaderNav = styled.div`
  display: flex;
  gap: 48px;

  @media (max-width: 768px) {
    display: none;
  }
`;

// Мобильное название
export const MobileCurrentPage = styled.div`
  display: none;
  align-items: center;
  gap: 8px;
  font-size: 16px;
  font-weight: 600;
  color: #7334EA;
  white-space: nowrap;
  flex-shrink: 1;
  min-width: 0;
  max-width: calc(100% - 120px);

  .mobile-page-title {
    text-decoration: underline;
    text-decoration-color: #7334EA;
    text-decoration-thickness: 2px;
    text-underline-offset: 4px;
  }

  @media (max-width: 768px) {
    display: flex;
    margin-left: 48px;
  }
`;

export const MobileMenuButton = styled.button`
  background: none;
  border: none;
  font-size: 14px;
  cursor: pointer;
  color: #7334EA;
  padding: 0;
`;

export const MobileMenuDropdown = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    gap: 10px;
    position: absolute;
    top: 64px;
    right: 16px;
    background: #ffffff;
    padding: 12px;
    border-radius: 12px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    z-index: 100;
    min-width: 160px;
  }
`;

export const MobileMenuItem = styled(Link)`
  text-decoration: none;
  padding: 7px 14px;
  border-radius: 24px;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 26px;
  white-space: nowrap;

  background-color: #F4F5F6;
  color: #000000;

  ${({ $active }) =>
    $active &&
    `
      background-color: #F1EBFD;
      color: #7334EA;
    `}

  &:hover {
    opacity: 0.9;
  }
`;

export const NavLink = styled(Link)`
  text-decoration: none;
  color: #000000;
  font-weight: ${({ $active }) => ($active ? '600' : '400')};
  font-size: 16px;
  cursor: pointer;

  ${({ $active }) =>
    $active &&
    `
      color: #7334EA;
      text-decoration: underline;
      text-decoration-color: #7334EA;
      text-decoration-thickness: 2px;
      text-underline-offset: 4px;
    `}

  &:hover:not([data-active='true']) {
    color: #7334EA;
    font-weight: 600;
  }
`;

export const LogoutButton = styled.button`
  background: none;
  border: none;
  color: #000000;
  font-family: inherit;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  padding: 0;

  &:hover {
    color: #7334EA;
  }
`;