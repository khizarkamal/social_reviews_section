import React from "react";

import Star from "../Star";

interface ReviewCardProps {
  starsCount: number;
  review: string;
}

const ReviewCard = (props: ReviewCardProps) => {
  const { starsCount, review } = props;
  return (
    <div className="flex justify-center items-center p-4 flex-col gap-4 rounded-md bg-neutral-light_grayish_magenta md:flex-row md:items-center md:even:translate-x-8 md:last:translate-x-16">
      <div className="flex flex-row gap-2">
        {Array.from({ length: starsCount }).map((item: any) => {
          return <Star></Star>;
        })}
      </div>
      <p className="font-bold text-primary-dark_magenta">{review}</p>
    </div>
  );
};

export default ReviewCard;
