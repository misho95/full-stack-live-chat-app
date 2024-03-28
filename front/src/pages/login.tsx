import { Link } from "react-router-dom";
import AuthContainer from "../components/auth/auth-container";
import AuthContent from "../components/auth/auth-content";
import AuthInput from "../components/auth/auth-input";
import AuthLinks from "../components/auth/auth.links";

const LoginPage = () => {
  return (
    <AuthContainer>
      <AuthContent>
        <form className="flex flex-col gap-5 justify-between font-mono">
          <h1 className="text-lg font-semibold text-black/70 select-none">
            Auth - Login
          </h1>
          <div className="flex flex-col gap-3">
            <AuthInput
              type={"email"}
              title={"Email"}
              placeholder={"email@example.com"}
            />
            <AuthInput
              type={"password"}
              title={"Password"}
              placeholder={"********"}
            />
          </div>
          <div className="flex gap-[4px]">
            <p className="text-black/50 capitalize">don't have an account?</p>
            <Link to={"/registration"} className="uppercase">
              Registrate
            </Link>
          </div>
          <AuthLinks />
          <button className="bg-[#76ABAE] py-2 rounded-sm text-[#31363F] font-semibold active:bg-[#31363F] active:text-[#76ABAE]">
            Login
          </button>
        </form>
      </AuthContent>
    </AuthContainer>
  );
};

export default LoginPage;
