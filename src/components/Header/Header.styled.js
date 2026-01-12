import styled from "styled-components";

export const StyledHeader = styled.header`
  width: 100%;
  height: 64px;
  background-color: #ffffff;
`;

export const Container = styled.div`
  max-width: 1440px;
  display: flex;
  align-items: center;
  height: 100%;
  width: 100%;  
  margin: 0 auto;
  justify-content: space-between;
`;

export const HeaderLogo = styled.div`
  img {
    display: block;
  }
`;

export const HeaderNav = styled.div`
  display: flex;
  gap: 48px;
`;

export const HeaderActions = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
  padding-right: 120px;
`;

export const NavLink = styled.div`
  text-decoration: none;
  color: #000000;
  font-weight: 400;
  font-size: 16px;

  &.active {
    color: #6a4bff;
    font-weight: 600;
    text-decoration: underline;
    text-decoration-thickness: 1px;
    text-underline-offset: 4px;
  }

  &:hover:not(.active) {
    color: #6a4bff;
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
    color: #6a4bff;
  }
`;
