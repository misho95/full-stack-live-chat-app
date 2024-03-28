import { ReactNode } from "react";

const AuthContent = ({ children }: { children: ReactNode }) => {
  return (
    <div className="bg-[#EEEEEE] p-5 rounded-md shadow-sm sm:min-w-80 w-11/12 sm:w-fit sm:h-fit">
      {children}
    </div>
  );
};

export default AuthContent;
