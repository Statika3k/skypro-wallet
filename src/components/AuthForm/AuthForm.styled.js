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
  padding: 32px;
  border-radius: 30px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  width: 100%;
  max-width: 379px;
`;

export const AuthFormBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const AuthFormHeader = styled.div`
  text-align: center;

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
  border: 1px solid rgba(153, 153, 153, 1);
  border-radius: 6px;
  font-size: 16px;
  font-family: inherit;
  color: rgba(0, 0, 0, 1);
  background-color: rgba(255, 255, 255, 1);
  transition: border-color 0.2s, background-color 0.2s;
  width: 100%;
  outline: none;

  //   &:focus {
  //   background-color: rgba(241, 235, 253, 1);
  //   border: 1px solid rgba(115, 52, 234, 1);
  // }

  &::placeholder {
    color: rgba(153, 153, 153, 1);
  }
  

  /* Успешное состояние */
  ${({ $isValid, $isTouched }) =>
    $isValid && $isTouched
      ? `
          background-color: rgba(241, 235, 253, 1);
          border: 1px solid rgba(115, 52, 234, 1);
        `
      : ""}

  /* Ошибка */
  ${({ $isValid, $isTouched }) =>
    $isTouched && !$isValid
      ? `
          background-color: rgba(255, 235, 235, 1) !important;
          border: 1px solid rgba(242, 80, 80, 1) !important;
        `
      : ""}

  /* Защита от автозаполнения (в Chrome) */
  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus,
  &:-webkit-autofill:active {
    -webkit-box-shadow: 0 0 0 30px rgba(241, 235, 253, 1) inset;
    -webkit-text-fill-color: rgba(0, 0, 0, 1);
    transition: background-color 5000s ease-in-out 0s;
  }
`;

export const AuthFormBtnEnter = styled.button`
  padding: 12px;
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.2s;

  /* Активная кнопка */
  ${({ $disabled }) =>
    !$disabled
      ? `
        background-color: rgba(115, 52, 234, 1);
        color: white;
      `
      : `
        background-color: rgba(153, 153, 153, 1);
        color: white;
        cursor: not-allowed;
      `}

  p {
    margin: 0;
  }
`;

export const AuthFormGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  font-size: 12px;
  margin-top: 24px;
  color: #999999;

  a {
    color: #999999;
    text-decoration: underline;
    font-weight: 600;
    cursor: pointer;
  }
`;

