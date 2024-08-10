/* eslint-disable no-unused-vars */
const Button = ({
  label,
  iconUrl,
  backgroundColor,
  borderColor,
  textColor,
}) => {
  return (
    <button className={`flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none
    
    ${backgroundColor ? `${backgroundColor} ${textColor} ${borderColor}` : "bg-coral-red text-white"}
     rounded-full   transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-orange-500 duration-300`}>
      {label}
      <img src={iconUrl} alt="arrow" className="ml-2 rounded-full w-5 h-5" />
    </button>
  );
};

export default Button;
