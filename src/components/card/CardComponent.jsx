'use client'
import React, { useState } from 'react';
import { Star } from "lucide-react";

const CardComponent = ({ property }) => {
  const [imageError, setImageError] = useState(false);
  const rate = (property?.review_scores_rating * 5) / 100;
  if (!property?.xl_picture_url || imageError) return null;

  return (
    <div className='flex flex-col gap-4 h-[450px] w-[340px]'>
      {/* image area */}
      <div className="h-[350px] w-full cursor-pointer rounded-3xl bg-primary flex items-center justify-center overflow-hidden">
        <img
          src={property?.xl_picture_url}
          className="h-full w-full object-cover"
          alt="Property"
          onError={() => setImageError(true)}
        />
      </div>
      {/* image area end */}
  
      <div className="flex-col px-2">
        <div className="flex justify-between w-full ">
          <h3>{property?.name.slice(0, 25)}...</h3>
          <h3 className="text-primary font-bold flex gap-1 items-center">
            <Star size={20} /> {rate}
          </h3>
        </div>
        <div className="flex-col">
          <h3 className="text-gray-500 text-sm">{property?.smart_location}</h3>
          <h3 className="text-primary font-bold">${property?.price} for a night</h3>
        </div>
      </div>
    </div>
  );
};

export default CardComponent;