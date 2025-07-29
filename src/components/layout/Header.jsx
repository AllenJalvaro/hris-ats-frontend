import { useHeader } from "@/context/HeaderContext";

const Header = () => {
  const { headerConfig } = useHeader();
  const { title, description, button } = headerConfig;

  return (
    <div className="flex items-center justify-between pb-10">
      <div className="w-full bg-gray-100 sticky top-0 border-gray-200 ">
        <p className="m-0 text-2xl font-bold">{title}</p>
        <p className="text-gray-500 text-sm">{description}</p>
      </div>

      {button && <div className="flex justify-end items-center ">{button}</div>}
    </div>
  );
};

export default Header;
