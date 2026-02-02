import axios from "axios";

const AUTH_URL = "https://wedev-api.sky.pro/api/user";

export async function signIn({ login, password }) {
  try {
    const response = await axios.post(
      `${AUTH_URL}/login`,
      { login, password },
      {
        headers: {
          "Content-Type": "",
        },
      }
    );
    const user = response.data.user;
    if (!user || !user.token) {
      throw new Error("Сервер не вернул токен");
    }
    localStorage.setItem('token', user.token);
    return user;
  } catch (error) {
    throw new Error(error.response?.data?.error);
  }
}

export async function signUp({ login, name, password }) {
  try {
    const response = await axios.post(
      AUTH_URL,
      { login, name, password },
      {
        headers: {
          "Content-Type": "",
        },
      }
    );
    const user = response.data.user;
    if (!user || !user.token) {
      throw new Error("Сервер не вернул токен после регистрации");
    }
    localStorage.setItem("token", user.token);
    return user;
  } catch (error) {
    throw new Error(error.response?.data?.error);
  }
}
