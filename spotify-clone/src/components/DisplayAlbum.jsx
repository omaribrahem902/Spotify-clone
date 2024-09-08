import { useParams } from "react-router-dom";
import { albumsData, assets, songsData } from "../assets/assets";
import { useContext } from "react";
import { PlayerContext } from "./PlayerContext";
const DisplayAlbum = () => {
  const { id } = useParams();
  const albumData = albumsData[id];
  const { playWithId } = useContext(PlayerContext);
  return (
    <>
      <div className="max-h-[80%]">
        <div className="text-white mt-3 sm:mt-10 flex gap-4 sm:gap-8 flex-col md:flex-row md:items-end">
          <img className="ml-3 w-48 rounded" src={albumData.image} alt="" />
          <div className="mx-2 flex flex-col">
            <p>Playlist</p>
            <h1 className="text-4xl sm:text-5xl font-bold mb-4 md:text-7xl ">
              {albumData.name}
            </h1>
            <p className="text-xs sm:text-sm">{albumData.desc}</p>
            <p className="mt-1 text-xs sm:text-sm">
              <img
                className="inline-block w-5"
                src={assets.spotify_logo}
                alt=""
              />
              <b>Spotify</b>. 1,323,154 likes . <b>50 songs,</b>
              about 2 hr 30 min
            </p>
          </div>
        </div>
        <div className="grid grid-cols-3 sm:grid-cols-4 mt-5 mb-2 sm:mt-10 sm:mb-4 pl-2 text-[#a7a7a7]">
          <p>
            <b className="mr-4 ">#</b>Title
          </p>
          <p>Album</p>
          <p className="hidden sm:block">Date Added</p>
          <img className="m-auto w-4" src={assets.clock_icon} alt="" />
        </div>
        <hr />
        <div className=" max-h-[35%] sm:max-h-[50%] overflow-auto">
          {songsData.map((item, index) => (
            <div
              key={index}
              onClick={() => playWithId(item.id)}
              className="grid grid-cols-3 sm:grid-cols-4 gap-2 p-2 items-center text-[#a7a7a7] hover:bg-[#ffffff2b] cursor-pointer"
            >
              <p className="text-white">
                <b className="mr-4 text-[#a7a7a7]">{index + 1}</b>
                <img className="inline w-10 mr-5" src={item.image} alt="" />
                {item.name}
              </p>
              <p className="text-[15px]">{albumsData[id].name}</p>
              <p className="text-[15px] hidden sm:block">5 Days ago</p>
              <p className="text-[15px] text-center">{item.duration}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default DisplayAlbum;
