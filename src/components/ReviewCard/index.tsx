import React from "react";
import Image from "next/image";

interface ReviewCardProps {
  image: string;
  name: string;
  text: string;
  review: string;
}

const ReviewCard = ({ image, name, text, review }: ReviewCardProps) => {
  return (
    <div className="py-8 px-8 bg-primary-dark_magenta rounded-md mt-8 lg:even:translate-y-8 lg:last:translate-y-16">
      <div className="flex gap-8 items-center">
        <figure className="rounded-ful w-12 h-12">
          <Image
            className="rounded-full object-contain w-full h-full"
            src={image}
            alt={name}
            height={50}
            width={50}
          ></Image>
        </figure>
        <div className="flex flex-col gap-0">
          <p className="text-neutral-white font-medium">{name}</p>
          <p className="text-primary-soft_pink font-medium">{text}</p>
        </div>
      </div>
      <div className="text-neutral-white font-medium mt-4 md:leading-7">
        {review}
      </div>
    </div>
  );
};

export default ReviewCard;
