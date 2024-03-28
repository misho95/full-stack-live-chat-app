type PropsType = {
  type: string;
  title: string;
  placeholder: string;
};

const AuthInput = ({ type, title, placeholder }: PropsType) => {
  return (
    <fieldset className="border-[2px] border-[#31363F] rounded-md group has-[:focus]:border-[#76ABAE] group">
      <legend className="bg-[#31363F] group-has-[:focus]:bg-[#76ABAE] px-5 mx-3 rounded-full text-[#EEEEEE] group-has-[:focus]:text-[#222831] font-semibold select-none">
        {title}
      </legend>
      <input
        type={type}
        placeholder={placeholder}
        name={title}
        className="w-full p-2 bg-transparent focus:outline-none placeholder-black/50 text-black"
        autoComplete={title.toLowerCase()}
        required
      />
    </fieldset>
  );
};

export default AuthInput;
