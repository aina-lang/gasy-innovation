import { Tooltip } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";

function CustomLink({ url, icon, Title, titleHidden }) {
  return (
    <div className="w-full">
      <Tooltip  content={Title} placement="right" className="flex  items-center ">
        <Link
          to={url}
          className="p-3 py-2 min-w-full flex  flex-grow items-center rounded-md hover:bg-gray-200 "
        >
          {icon}
          {titleHidden === false && (
            <span className="ml-3  text-gray-600"> {Title}</span>
          )}
        </Link>
      </Tooltip>
    </div>
  );
}

export default CustomLink;
