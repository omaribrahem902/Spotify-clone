import { useParams } from "react-router-dom";
import { albumsData, assets, songsData } from "../assets/assets";
import SongDetails from "./SongDetails";
const DisplayAlbum = () => {
  const { id } = useParams();
  const albumData = albumsData[id];
  return (
    <>
      <div className="max-h-[80%]">
        <div className="text-white mt-10 flex gap-8 flex-col md:flex-row md:items-end">
          <img className="w-48 rounded" src={albumData.image} alt="" />
          <div className="flex flex-col">
            <p>Playlist</p>
            <h1 className="text-5xl font-bold mb-4 md:text-7xl ">
              {albumData.name}
            </h1>
            <p>{albumData.desc}</p>
            <p className="mt-1">
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
        <div className="grid grid-cols-3 sm:grid-cols-4 mt-10 mb-4 pl-2 text-[#a7a7a7]">
          <p>
            <b className="mr-4 ">#</b>Title
          </p>
          <p>Album</p>
          <p className="hidden sm:block">Date Added</p>
          <img className="m-auto w-4" src={assets.clock_icon} alt="" />
        </div>
        <hr />
        <div className="max-h-[50%] overflow-auto">
          {songsData.map((item, index) => (
            <SongDetails
              name={item.name}
              image={item.image}
              index={index}
              duration={item.duration}
              id={id}
              key={index}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default DisplayAlbum;
