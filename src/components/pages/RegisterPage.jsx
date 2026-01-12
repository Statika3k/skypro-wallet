import AuthForm from "../AuthForm/AuthForm";
import Header from "../Header/Header";

export default function RegisterPage() {
  return (
    <>
      <Header />
      <AuthForm isSignUp={true} />
    </>
  );
}