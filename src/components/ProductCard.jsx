import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import VideoThumbnail from "react-video-thumbnail";
import { useState } from "react";

const ProductCard = ({
  date,
  today,
  question,
  profileUrl,
  name,
  videoUrl,
  availableAfter = "",
}) => {
  const [thumbnail, setThumbnail] = useState("");
  return (
    <div className="max-w-2xl mt-8 overflow-hidden bg-white rounded-2xl shadow-xl shadow-slate-200 dark:bg-gray-800">
      <div className="hidden">
        <VideoThumbnail
          videoUrl={videoUrl}
          thumbnailHandler={(thumbnail) => setThumbnail(thumbnail)}
          width={0}
          height={0}
        />
      </div>
      {availableAfter === "" ? (
        <div className="w-full h-64">
          <img
            className="object-cover w-full h-full"
            src={thumbnail}
            alt="Video Thumbnail"
          />
        </div>
      ) : (
        <>
          <div className="relative w-full h-64">
            <VideoThumbnail
              videoUrl={videoUrl}
              thumbnailHandler={(thumbnail) => console.log(thumbnail)}
              width={1000}
              height={1000}
            />
            <p className="absolute bottom-0 right-0 m-4 text-white">
              <FontAwesomeIcon icon="fa-solid fa-lock" /> &nbsp;&nbsp;
              {availableAfter}에 열림
            </p>
          </div>
        </>
      )}
      <div className="p-6">
        <div>
          {today ? (
            <span className="text-xs font-medium text-blue-600 uppercase dark:text-blue-400">
              오늘의 질문
            </span>
          ) : null}
          <a
            href="#"
            className="block mt-2 text-xl font-semibold text-gray-800 transition-colors duration-300 transform dark:text-white hover:text-gray-600 hover:underline"
            tabIndex="0"
            role="link"
          >
            {question}
          </a>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400"></p>
        </div>
        <div className="mt-4">
          <div className="flex items-center">
            <div className="flex items-center">
              <img
                className="object-cover w-10 h-10 rounded-full"
                src={profileUrl}
                alt="Avatar"
              />
              <a
                href="#"
                className="mx-2 font-semibold text-gray-700 dark:text-gray-200"
                tabIndex="0"
                role="link"
              >
                {name}
              </a>
            </div>
            <span className="mx-1 text-xs text-gray-600 dark:text-gray-300">
              {date}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
