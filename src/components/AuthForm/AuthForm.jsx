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

const isValidEmail = (email) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

export default function AuthForm({ isSignUp = false }) {
  const navigate = useNavigate();
  const { updateUserInfo } = useContext(AuthContext);
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

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));    
    if (error) setError("");
  };

  const handleBlur = (e) => {
    const { name } = e.target;    
      setTouched((prev) => ({ ...prev, [name]: true }));
    
  };

  const isNameValid = formData.name.trim() !== "";
  const isLoginValid = formData.login.trim() !== "" && isValidEmail(formData.login);
  const isPasswordValid = formData.password.trim() !== "";

  const hasNameError = isSignUp && touched.name && !isNameValid;
  const hasLoginError = touched.login && !isLoginValid;
  const hasPasswordError = touched.password && !isPasswordValid;

  const isFormValid = () => {
    if (!formData.login.trim() || !isValidEmail(formData.login)) return false;
    if (!formData.password.trim()) return false;
    if (isSignUp && !formData.name.trim()) return false;
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitted(true);

    setTouched({
      name: isSignUp,
      login: true,
      password: true,
    });

    if (!isFormValid()) {
      setError(
        "Упс! Введенные вами данные некорректны. Введите данные корректно и повторите попытку.",
      );
      return;
    }
    

    try {
      let user;

      if (isSignUp) {        
        user = await signUp({
          login: formData.login.trim(),
          name: formData.name.trim(),
          password: formData.password,
        });
      } else {        
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

  const isButtonDisabled = isSubmitted && !isFormValid();

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
                onBlur={handleBlur}
                $isValid={isNameValid}
                $isTouched={touched.name}
                $hasError={hasNameError}
              />
            )}
            <AuthFormInput
              type="email"
              name="login"
              placeholder="Эл. почта"
              value={formData.login}
              onChange={handleChange}
              onBlur={handleBlur}
              $isValid={isLoginValid}
              $isTouched={touched.login}
              $hasError={hasLoginError}
            />
            <AuthFormInput
              type="password"
              name="password"
              placeholder="Пароль"
              value={formData.password}
              onChange={handleChange}
              onBlur={handleBlur}
              $isValid={isPasswordValid}
              $isTouched={touched.password}
              $hasError={hasPasswordError}
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

            <AuthFormBtnEnter type="submit" $disabled={isButtonDisabled}>
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
