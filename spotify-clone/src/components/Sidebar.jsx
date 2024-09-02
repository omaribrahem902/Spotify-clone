import { assets } from "../assets/assets";
const Sidebar = () => {
  return (
    <div className="w-[20%] h-screen p-2 bg-black flex-col gap-2 text-white hidden lg:flex">
      <div className="bg-[#121212] h-[15%] rounded p-1 flex flex-col justify-around">
        <div className="flex items-center gap-3 pl-8 cursor-pointer">
          <img className="w-6" src={assets.home_icon} alt="" />
          <p className="font-bold">Home</p>
        </div>
        <div className="flex items-center gap-3 pl-8 cursor-pointer">
          <img className="w-6" src={assets.search_icon} alt="" />
          <p className="font-bold">Search</p>
        </div>
      </div>
      <div className="bg-[#121212] h-[85%] rounded">
        <div className="p-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img className="w-8" src={assets.stack_icon} alt="" />
            <p className="font-semibold">Your Library</p>
          </div>
          <div className="flex items-center gap-3">
            <img className="w-5" src={assets.arrow_icon} alt="" />
            <img className="w-5" src={assets.plus_icon} alt="" />
          </div>
        </div>
        <div className="p-4 bg-[#242424] m-2 rounded font-semibold flex flex-col items-start gap-1 pl-4">
          <h1>Create Your First Playlist</h1>
          <p className="font-light">its easy we will help you</p>
          <button className="button mt-4">Create playlist</button>
        </div>
        <div className="p-4 bg-[#242424] m-2 rounded font-semibold flex flex-col items-start gap-1 pl-4 mt-4">
          <h1>lets find some podcasts to follow</h1>
          <p className="font-light">we will keep you updated on new episodes</p>
          <button className="button mt-4">Browse Podcasts</button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
