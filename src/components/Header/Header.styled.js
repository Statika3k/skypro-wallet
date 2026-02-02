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
  justify-content: space-between;

  @media (max-width: 376px) {
    background-color: #f4f5f6;
  }
`;

export const HeaderLogo = styled.div`
  img {
    display: block;
    width: auto;
    height: 19px; /* ← десктоп */
    object-fit: contain;
  }

  /* Отступ между логотипом и навигацией на десктопе */
  margin-right: 48px;

  @media (max-width: 376px) {
    margin-right: 0;
    img {
      height: 14px; 
    }
  }
`;

// Десктопная навигация
export const HeaderNav = styled.div`
  display: flex;
  gap: 48px;

  @media (max-width: 376px) {
    display: none;
  }
`;

// Мобильное название (текст + стрелка)
export const MobileCurrentPage = styled.div`
  display: none;
  align-items: center;
  gap: 8px;
  font-size: 12px; /* ← мобилка */
  font-weight: 600;
  color: #7334ea;
  white-space: nowrap;
  flex-shrink: 1;
  min-width: 0;
  max-width: calc(100% - 120px);

  .mobile-page-title {
    text-decoration: underline;
    text-decoration-color: #7334ea;
    text-decoration-thickness: 2px;
    text-underline-offset: 4px;
  }

  @media (max-width: 376px) {
    display: flex;
    margin-left: 48px;
  }
`;

export const MobileMenuButton = styled.button`
  background: none;
  border: none;
  font-size: 14px;
  cursor: pointer;
  color: #000000;
  padding: 0;
`;

export const MobileMenuDropdown = styled.div`
  display: none;

  @media (max-width: 376px) {
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
  border-radius: 14px;
  font-size: 10px;
  font-weight: 500;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 26px;
  white-space: nowrap;

  background-color: #f4f5f6;
  color: #000000;

  ${({ $active }) =>
    $active &&
    `
      background-color: #f1ebfd;
      color: #7334ea;
    `}

  &:hover {
    opacity: 0.9;
  }
`;

// Ссылки в десктопной навигации
export const NavLink = styled(Link)`
  text-decoration: none;
  color: #000000;
  font-weight: ${({ $active }) => ($active ? '600' : '400')};
  font-size: 14px; /* ← десктоп */
  cursor: pointer;

  ${({ $active }) =>
    $active &&
    `
      color: #7334ea;
      text-decoration: underline;
      text-decoration-color: #7334ea;
      text-decoration-thickness: 2px;
      text-underline-offset: 4px;
    `}

  &:hover:not([data-active='true']) {
    color: #7334ea;
    font-weight: 600;
  }

  @media (max-width: 376px) {
    font-size: 12px; /* ← мобилка */
  }
`;

// Кнопка "Выйти"
export const LogoutButton = styled.button`
  background: none;
  border: none;
  color: #000000;
  font-family: inherit;
  font-size: 14px; /* ← десктоп */
  font-weight: 600;
  cursor: pointer;
  padding: 0;

  &:hover {
    color: #7334ea;
  }

  @media (max-width: 376px) {
    font-size: 12px; /* ← мобилка */
  }
`;