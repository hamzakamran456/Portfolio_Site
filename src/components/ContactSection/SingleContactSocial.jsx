import React from "react";

const SingleContactSocial = ({ Icon, Link }) => {
  return (
    <div className="text-2xl w-12 h-12 border border-orange text-orange rounded-full p-3 flex items-center">
      <a
        href={Link}
        target="_blank"
        rel="noopener noreferrer"
        className="cursor-pointer"
      >
        {Icon && <Icon />}
      </a>
    </div>
  );
};

export default SingleContactSocial;
