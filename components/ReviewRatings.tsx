import React from 'react';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';

export default function ReviewRatings({ ratings }: { ratings: number }) {
  const totalStars = 5;
  return (
    <div className="flex gap-1 text-[20px] text-[#FF9529]">
      {Array.from({ length: totalStars }, (_, index) => {
        const ratingValue = index + 1;
        return ratingValue <= ratings ? (
          <AiFillStar key={index} />
        ) : (
          <AiOutlineStar key={index} />
        );
      })}
    </div>
  );
}
