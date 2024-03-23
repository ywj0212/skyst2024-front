import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faSearch,
  faPlus,
  faHeart,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const BottomNavigation = () => {
  return (
    <div className="fixed inset-x-0 bottom-0 bg-white py-5 px-5">
      <div className="mx-auto max-w-2xl flex justify-around items-center">
        <div className="text-gray-500 hover:text-indigo-500">
          <FontAwesomeIcon icon={faHome} size="lg" />
        </div>
        <div className="text-gray-500 hover:text-indigo-500">
          <FontAwesomeIcon icon={faSearch} size="lg" />
        </div>
        <div className="w-16 h-16 absolute bg-indigo-600 flex items-center justify-center bottom-2 right-1/2 transform translate-x-1/2 mb-5 text-white rounded-full p-3 hover:bg-gradient-to-b hover:from-indigo-500 hover:via-indigo-600 hover:to-indigo-700">
          <FontAwesomeIcon icon={faPlus} size="xl" />
        </div>
        <div className="text-white hover:text-indigo-500">
          <FontAwesomeIcon icon={faHeart} size="lg" />
        </div>
        <div className="text-gray-500 hover:text-indigo-500">
          <FontAwesomeIcon icon={faHeart} size="lg" />
        </div>
        <div className="text-gray-500 hover:text-indigo-500">
          <FontAwesomeIcon icon={faUser} size="lg" />
        </div>
      </div>
    </div>
  );
};

export default BottomNavigation;
