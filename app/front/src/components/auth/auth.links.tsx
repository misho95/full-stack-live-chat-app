import { FaGithub, FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const AuthLinks = () => {
  return (
    <div className="flex gap-2">
      <button>
        <FaGithub className="size-5" />
      </button>
      <button>
        <FcGoogle className="size-5" />
      </button>
      <button>
        <FaFacebook className="size-5 text-[#0866FF]" />
      </button>
    </div>
  );
};

export default AuthLinks;
