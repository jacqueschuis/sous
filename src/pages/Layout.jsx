import RegisterForm from "../components/RegisterForm";
import LoginForm from "../components/LoginForm";

const Layout = ({ content }) => {
  return (
    <>
      {content === "register" && <RegisterForm />}
      {content === "login" && <LoginForm />}
    </>
  );
};

export default Layout;
