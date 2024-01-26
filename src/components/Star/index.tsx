import React from "react";
import Image from "next/image";

const Star = () => {
  return (
    <span>
      <Image
        src="/images/icon-star.svg"
        alt="Star"
        width={15}
        height={15}
      ></Image>
    </span>
  );
};

export default Star;
