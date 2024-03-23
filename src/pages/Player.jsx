import ReactPlayer from "react-player";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRef, useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

function Player() {
  const location = useLocation();
  const [nowPlaying, setNowPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [showControl, setShowControl] = useState(false);
  const ref = useRef(null);

  const url = location.state["url"];

  const totalTime = (ref && ref.current && ref.current.duration) || 0;
  const videoElement = ref && ref.current;

  // 동영상 시간 업데이트 함수
  const addTimeUpdate = () => {
    const observedVideoElement = ref && ref.current;
    if (observedVideoElement) {
      observedVideoElement.addEventListener("timeupdate", function () {
        setCurrentTime(observedVideoElement.currentTime);
      });
      setNowPlaying(false);
      observedVideoElement.play();
    }
  };

  useEffect(() => {
    addTimeUpdate();
  }, []);

  const timebarClick = (e) => {
    onProgressChange(e.clientX / window.screen.width);
  };
  // progress 이동시켰을때 실행되는 함수
  const onProgressChange = (percent) => {
    if (!showControl) {
      setShowControl(true);
    }

    if (videoElement) {
      const playingTime = videoElement.duration * (percent / 100);
      console.log(videoElement);
      setCurrentTime(playingTime);
    }
  };

  // play icon 클릭했을떄 실행되는 함수
  const onPlayIconClick = () => {
    if (videoElement) {
      if (nowPlaying) {
        setNowPlaying(false);
        videoElement.pause();
      } else {
        setNowPlaying(true);
        videoElement.play();
      }
    }
  };

  // control bar visible 관련 함수
  const handleControlVisible = () => {
    if (!showControl) {
      setShowControl(true);
      setTimeout(() => {
        setShowControl(false);
      }, 2000);
    }
  };

  return (
    <>
      <video
        className="w-full h-full object-cover"
        loop={true}
        ref={ref}
        playsInline={true}
        onClick={handleControlVisible}
      >
        <source src={url} />
      </video>
      {showControl ? (
        <div
          onClick={onPlayIconClick}
          className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 size-24 rounded-full bg-slate-400 hover:bg-slate-300"
        >
          {!nowPlaying ? (
            <FontAwesomeIcon
              className="absolute left-1/2 top-1/2 transform translate-x-[-45%] -translate-y-1/2 text-white size-12"
              icon="fa-solid fa-play"
            />
          ) : (
            <FontAwesomeIcon
              className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white size-12"
              icon="fa-solid fa-pause"
            />
          )}
        </div>
      ) : null}
      <div
        onClick={timebarClick}
        className="absolute bg-gray-400 w-full h-3 bottom-0"
      >
        <div
          style={{
            transformOrigin: "left",
            transform: "scaleX(" + currentTime / totalTime + ")",
          }}
          className="absolute left-0 bg-red-600 w-full h-3 bottom-0"
        ></div>
      </div>
    </>
  );
}

export default Player;
