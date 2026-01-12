import styled from "styled-components";

export const AuthFormConteiner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #f5f5f5;
`;

export const AuthFormSignIn = styled.div`
  background: white;
  padding: 40px;
  border-radius: 30px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  width: 100%;
  max-width: 379px;
`;

export const AuthFormBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const AuthFormHeader = styled.div`
  text-align: center;
  margin-bottom: 24px;

  h2 {
    font-size: 24px;    
    font-weight: 700;
    color: #000000;
    margin: 0;
  }
`;

export const AuthFormLogin = styled.form`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const AuthFormInput = styled.input`
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 6px;
  font-size: 16px;
  color: black;
  transition: border-color 0.2s;

  &:focus {
    outline: none;
    border-color: #7334EA;
  }

  &::placeholder {
    color: #999;
  }
`;

export const AuthFormBtnEnter = styled.button`
  padding: 12px;
  background-color: #7334EA;
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.2s;  

  p {
    margin: 0;
  }
`;

export const AuthFormGroup = styled.div`
  display: flex;
  justify-content: center;
  gap: 4px;
  font-size: 14px;
  color: #666;

  a {
    color: #999999;
    text-decoration: underline;
    font-weight: 600;
    cursor: pointer;    
  }
`;
