import { useContext, useState } from "react";
import {
  AuthFormBlock,
  AuthFormBtnEnter,
  AuthFormConteiner,
  AuthFormGroup,
  AuthFormHeader,
  AuthFormInput,
  AuthFormLogin,
  AuthFormSignIn,
} from "./AuthForm.styled";
import { Link, useNavigate } from "react-router-dom";
import { signIn, signUp } from "../../services/authApi";
import { AuthContext } from "../../context/AuthContext";

export default function AuthForm({ isSignUp = false }) {
  const navigate = useNavigate();
  const { updateUserInfo } = useContext(AuthContext);
  const [error, setError] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    login: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (error) setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      let user;

      if (isSignUp) {
        // Регистрация
        user = await signUp({
          login: formData.login.trim(),
          name: formData.name.trim(),
          password: formData.password,
        });
      } else {
        // Вход
        user = await signIn({
          login: formData.login.trim(),
          password: formData.password,
        });
      }

      updateUserInfo({
        login: user.login,
        name: user.name,
        token: user.token,
      });

      navigate("/");
    } catch {
      setError(
        "Упс! Введенные вами данные некорректны. Введите данные корректно и повторите попытку.",
      );
    }
  };

  return (
    <AuthFormConteiner>
      <AuthFormSignIn>
        <AuthFormBlock>
          <AuthFormHeader>
            <h2>{isSignUp ? "Регистрация" : "Вход"}</h2>
          </AuthFormHeader>
          <AuthFormLogin onSubmit={handleSubmit}>
            {isSignUp && (
              <AuthFormInput
                type="text"
                name="name"
                placeholder="Имя"
                value={formData.name}
                onChange={handleChange}
              />
            )}
            <AuthFormInput
              type="email"
              name="login"
              placeholder="Эл. почта"
              value={formData.login}
              onChange={handleChange}
            />
            <AuthFormInput
              type="password"
              name="password"
              placeholder="Пароль"
              value={formData.password}
              onChange={handleChange}
            />

            {error && (
              <div
                style={{
                  color: "#F84D4D",
                  fontSize: "12px",
                  textAlign: "center",
                }}
              >
                {error}
              </div>
            )}

            <AuthFormBtnEnter type="submit">
              <p>{isSignUp ? "Зарегистрироваться" : "Войти"}</p>
            </AuthFormBtnEnter>
            <AuthFormGroup>
              <p>
                {isSignUp ? "Уже есть аккаунт? " : "Нужно зарегистрироваться? "}
              </p>
              {isSignUp ? (
                <Link to="/login">Войдите здесь</Link>
              ) : (
                <Link to="/register">Регистрируйтесь здесь</Link>
              )}
            </AuthFormGroup>
          </AuthFormLogin>
        </AuthFormBlock>
      </AuthFormSignIn>
    </AuthFormConteiner>
  );
}
