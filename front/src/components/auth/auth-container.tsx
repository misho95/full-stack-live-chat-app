import { ReactNode } from "react";

const AuthContainer = ({ children }: { children: ReactNode }) => {
  return (
    <main className="w-[100%] min-h-[100dvh]  bg-gradient-to-r from-[#222831] to-[#76ABAE] flex justify-center items-center p-5">
      {children}
    </main>
  );
};

export default AuthContainer;
