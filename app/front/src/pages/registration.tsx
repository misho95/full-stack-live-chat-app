import { Link } from "react-router-dom";
import AuthContainer from "../components/auth/auth-container";
import AuthContent from "../components/auth/auth-content";
import AuthInput from "../components/auth/auth-input";
import AuthLinks from "../components/auth/auth.links";

const RegistrationPage = () => {
  return (
    <AuthContainer>
      <AuthContent>
        <form className="flex flex-col gap-5 justify-between font-mono h-full">
          <h1 className="text-lg font-semibold text-black/70 select-none">
            Auth - Registration
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
            <AuthInput
              type={"password"}
              title={"Re-Password"}
              placeholder={"********"}
            />
          </div>
          <div className="flex flex-col gap-3">
            <div className="flex gap-[4px]">
              <p className="text-black/50 capitalize">
                already have an account?
              </p>
              <Link to={"/login"} className="uppercase">
                Login
              </Link>
            </div>
            <AuthLinks />
          </div>
          <button className="bg-[#76ABAE] py-2 rounded-sm text-[#31363F] font-semibold active:bg-[#31363F] active:text-[#76ABAE]">
            Registrate
          </button>
        </form>
      </AuthContent>
    </AuthContainer>
  );
};

export default RegistrationPage;
