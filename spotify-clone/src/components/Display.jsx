import { albumsData } from "../assets/assets";
import Navbar from "./Navbar";
import Displayhome from "./Displayhome";
import { Route, Routes, useLocation } from "react-router-dom";
import DisplayAlbum from "./DisplayAlbum";
import { useEffect, useRef } from "react";
const Display = () => {
  const ref = useRef();
  const location = useLocation();
  const isAlbum = location.pathname.includes("album");
  const albumID = isAlbum ? location.pathname.slice(-1) : "";
  const bgColor = albumsData[Number(albumID)].bgColor;

  useEffect(() => {
    if (isAlbum) {
      ref.current.style.background = `linear-gradient(${bgColor},#121212)`;
    } else {
      ref.current.style.background = `#121212`;
    }
  });
  return (
    <>
      <div ref={ref} className="w-[80%] px-2  flex flex-col bg-[#121212]">
        <Navbar />
        <Routes>
          <Route path="/" element={<Displayhome />} />
          <Route path="/album/:id" element={<DisplayAlbum />} />
        </Routes>
      </div>
    </>
  );
};

export default Display;
