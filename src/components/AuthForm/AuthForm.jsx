import { useState } from "react";
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

const isValidEmail = (email) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

export default function AuthForm({ isSignUp = false }) {
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    login: "",
    password: "",
  });

  const [touched, setTouched] = useState({
    name: false,
    login: false,
    password: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setTouched((prev) => ({ ...prev, [name]: true }));

    if (error) setError("");
  };

  const isLoginValid = formData.login === "" || isValidEmail(formData.login);
  const isNameValid = !isSignUp ? formData.name.trim() !== "" : true;
  const isPasswordValid =
    formData.password === "" || formData.password.trim() !== "";

  const hasInvalidTouchedField =
    (touched.name && !isNameValid) ||
    (touched.login && !isLoginValid) ||
    (touched.password && !isPasswordValid);

  const isFormDisabled = hasInvalidTouchedField;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setTouched({ name: true, login: true, password: true });

    const finalLoginValid = isValidEmail(formData.login);
    const finalNameValid = isSignUp ? formData.name.trim() !== "" : true;
    const finalPasswordValid = formData.password.trim() !== "";

    if (!finalLoginValid || !finalPasswordValid || !finalNameValid) {
      setError(
        "Упс! Введенные вами данные некорректны. Введите данные корректно и повторите попытку.",
      );
      return;
    }

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

      // Сохраняем данные
      localStorage.setItem("token", user.token);
      localStorage.setItem("isAuth", "true");
      localStorage.setItem("userLogin", user.login);
      localStorage.setItem("userName", user.name);

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
                $isValid={isNameValid}
                $isTouched={touched.name}
              />
            )}
            <AuthFormInput
              type="email"
              name="login"
              placeholder="Эл. почта"
              value={formData.login}
              onChange={handleChange}
              $isValid={isLoginValid}
              $isTouched={touched.login}
            />
            <AuthFormInput
              type="password"
              name="password"
              placeholder="Пароль"
              value={formData.password}
              onChange={handleChange}
              $isValid={isPasswordValid}
              $isTouched={touched.password}
            />

            {error && (
              <div
                style={{
                  color: "rgba(248, 77, 77, 1)",
                  fontSize: "12px",
                  textAlign: "center",
                }}
              >
                {error}
              </div>
            )}

            <AuthFormBtnEnter type="submit" $disabled={isFormDisabled}>
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
