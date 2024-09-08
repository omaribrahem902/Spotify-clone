import { useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";
const Navbar = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="flex flex-col">
        <div className="flex justify-between px-2 py-3 items-center">
          <div className="flex items-center gap-2">
            <img
              onClick={() => navigate(-1)}
              className="cursor-pointer bg-black w-8 h-8 p-2 rounded-2xl"
              src={assets.arrow_left}
              alt=""
            />
            <img
              onClick={() => navigate(1)}
              className="cursor-pointer bg-black w-8 h-8 p-2 rounded-2xl"
              src={assets.arrow_right}
              alt=""
            />
          </div>
          <div className="flex items-center gap-4">
            <button className="mobile-button sm:button">Explore Premium</button>
            <p className="bg-black text-white py-1 px-3 rounded-full text-[12px] sm:text-[15px] cursor-pointer">
              Install App
            </p>
            <p className="bg-green-400 cursor-pointer text-black w-7 h-7 rounded-full flex justify-center items-center font-bold">
              O
            </p>
          </div>
        </div>
      </div>
      <div className="w-full mb-3">
        <button className="text-white px-5 rounded-b-2xl pt-0 hover:text-black hover:bg-white">
          All
        </button>
        <button className="text-white px-5 rounded-b-2xl pt-0 hover:text-black hover:bg-white">
          Music
        </button>
        <button className="text-white px-5 rounded-b-2xl pt-0 hover:text-black hover:bg-white">
          Podcasts
        </button>
      </div>
    </>
  );
};

export default Navbar;
