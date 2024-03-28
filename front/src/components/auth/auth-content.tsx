import { ReactNode } from "react";
import bg from "../../assets/bg.jpg";

const AuthContent = ({ children }: { children: ReactNode }) => {
  return (
    <div className="bg-[#EEEEEE] rounded-md shadow-sm sm:min-w-80 w-11/12 sm:w-fit sm:h-fit sm:flex overflow-hidden">
      <div className="p-5">{children}</div>
      <img
        src={bg}
        className="w-[300px] object-cover bg-red-500 hidden sm:block"
      />
    </div>
  );
};

export default AuthContent;
