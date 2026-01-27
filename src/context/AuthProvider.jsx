import { useState } from "react";
import { AuthContext } from "./AuthContext";

const getStoredUser = () => {
  const isAuth = localStorage.getItem("isAuth") === "true";
  const token = localStorage.getItem("token");
  const userLogin = localStorage.getItem("userLogin");
  const userName = localStorage.getItem("userName");

  if (isAuth && token && userLogin) {
    return {
      login: userLogin,
      name: userName,
      token,
    };
  }
  return null;
};

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(getStoredUser);

  const updateUserInfo = (userData) => {
    if (userData) {
      localStorage.setItem("token", userData.token);
      localStorage.setItem("isAuth", "true");
      localStorage.setItem("userLogin", userData.login);
      localStorage.setItem("userName", userData.name);

      setUser(userData);
    } else {
      localStorage.removeItem("token");
      localStorage.removeItem("isAuth");
      localStorage.removeItem("userLogin");
      localStorage.removeItem("userName");

      setUser(null);
    }
  };

  return (
    <AuthContext.Provider value={{ user, updateUserInfo }}>
      {children}
    </AuthContext.Provider>
  );
}
