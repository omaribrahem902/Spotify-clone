import { useContext, useEffect, useState } from "react";
import { assets } from "../assets/assets";
import { PlayerContext } from "./PlayerContext";
const Player = () => {
  const {
    seekBar,
    seekBg,
    playStatus,
    play,
    pause,
    track,
    time,
    previous,
    next,
    seekSong,
  } = useContext(PlayerContext);

  return (
    <>
      <div className="h-[10%] bg-black flex justify-between text-white pl-4">
        <div className="hidden w-[20%] lg:flex items-center gap-4">
          <img className="w-12" src={track.image} alt="" />
          <div>
            <p>{track.name}</p>
            <p>{track.desc.slice(0, 12)}</p>
          </div>
        </div>
        <div className="w-[84%] bg-[#121212] flex justify-between items-center px-4">
          <div className="w-fit flex flex-col py-2 px-1">
            <div className="flex gap-5 justify-center items-center">
              <img
                className="w-5 cursor-pointer"
                src={assets.shuffle_icon}
                alt=""
              />
              <img
                onClick={previous}
                className="w-5 cursor-pointer"
                src={assets.prev_icon}
                alt=""
              />
              {playStatus ? (
                <img
                  onClick={pause}
                  className="w-5 cursor-pointer"
                  src={assets.pause_icon}
                  alt=""
                />
              ) : (
                <img
                  onClick={play}
                  className="w-5 cursor-pointer"
                  src={assets.play_icon}
                  alt=""
                />
              )}
              <img
                onClick={next}
                className="w-5 cursor-pointer"
                src={assets.next_icon}
                alt=""
              />
              <img
                className="w-5 cursor-pointer"
                src={assets.loop_icon}
                alt=""
              />
            </div>
            <div className="flex items-center gap-5 mt-3">
              <p>
                {time.currentTime.minute}:{time.currentTime.second}
              </p>
              <div
                ref={seekBg}
                onClick={seekSong}
                className="w-[60vw] max-w-[500px] bg-gray-300 rounded-full cursor-pointer"
              >
                <hr
                  ref={seekBar}
                  className="h-1 border-none w-0 bg-green-800 rounded-full"
                />
              </div>
              <p>
                {time.totalTime.minute}:{time.totalTime.second}
              </p>
            </div>
          </div>
          <div className="hidden lg:flex gap-2 items-end opacity-75">
            <img className="w-4" src={assets.play_icon} alt="" />
            <img className="w-4" src={assets.mic_icon} alt="" />
            <img className="w-4" src={assets.queue_icon} alt="" />
            <img className="w-4" src={assets.speaker_icon} alt="" />
            <img className="w-4" src={assets.volume_icon} alt="" />
            <div className="w-20 bg-slate-50 h-1 rounded"></div>
            <img className="w-4" src={assets.mini_player_icon} alt="" />
            <img className="w-4" src={assets.zoom_icon} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Player;
