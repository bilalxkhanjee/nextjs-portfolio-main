import React, { useState } from "react";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import ImageModal from "./ImageModel";

const ProjectCard = ({ imgUrl, title, description, gitUrl, previewUrl }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="flex flex-col items-center justify-center">
      <div
        className="h-52 md:h-72 w-full rounded-t-xl relative group"
        style={{ background: `url(${imgUrl}) center center / cover no-repeat` }}
      >
        <div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500">
          <button
            onClick={openModal}
            className="h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
          >
            <EyeIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white" />
          </button>
        </div>
      </div>
      <div className="text-white rounded-b-xl mt-3 bg-[#181818] py-6 px-4 w-full">
        <h5 className="text-xl font-semibold mb-2 text-center">{title}</h5>
        <p className="text-[#ADB7BE] text-center">{description}</p>
      </div>
      <ImageModal isOpen={isModalOpen} closeModal={closeModal} imgUrl={imgUrl} />
    </div>
  );
};

export default ProjectCard;
