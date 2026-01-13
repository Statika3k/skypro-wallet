import AuthForm from "../AuthForm/AuthForm";
import Header from "../Header/Header";

export default function LoginPage() {
  return (
    <>
      <Header />
      <AuthForm isSignUp={false} />
    </>
  );
}


