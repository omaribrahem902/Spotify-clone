import { albumsData } from "../assets/assets";

const SongDetails = ({ name, image, index, duration, id }) => {
  return (
    <>
      <div className="grid grid-cols-3 sm:grid-cols-4 gap-2 p-2 items-center text-[#a7a7a7] hover:bg-[#ffffff2b] cursor-pointer">
        <p className="text-white">
          <b className="mr-4 text-[#a7a7a7]">{index + 1}</b>
          <img className="inline w-10 mr-5" src={image} alt="" />
          {name}
        </p>
        <p className="text-[15px]">{albumsData[id].name}</p>
        <p className="text-[15px] hidden sm:block">5 Days ago</p>
        <p className="text-[15px] text-center">{duration}</p>
      </div>
    </>
  );
};

export default SongDetails;
