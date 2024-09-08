import { albumsData, songsData } from "../assets/assets";
import Albumitem from "./Albumitem";
import Songsitem from "./Songsitem";
const Displayhome = () => {
  return (
    <>
      <div className="p-2 sm:p-5  text-white overflow-auto">
        <h1 className="text-white font-bold mb-4 text-2xl">Featured Charts</h1>
        <div className="flex overflow-auto">
          {albumsData.map((item, index) => (
            <Albumitem
              image={item.image}
              name={item.name}
              desc={item.desc}
              id={index}
              key={index}
            />
          ))}
        </div>
        <h1 className="text-2xl font-bold mt-6 mb-4">Todays biggest hits</h1>
        <div className="flex overflow-auto">
          {songsData.map((item, index) => (
            <Songsitem
              image={item.image}
              name={item.name}
              desc={item.desc}
              id={index}
              key={index}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Displayhome;
