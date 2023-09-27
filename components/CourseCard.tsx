// components/CourseCard.tsx
import React from "react";

interface CourseCardProps {
  title: string;
  instructor: string;
  price: number;
  image: string;
}

const CourseCard: React.FC<CourseCardProps> = ({
  title,
  instructor,
  price,
  image,
}) => {
  return (
    <div className="border rounded-lg p-4 shadow-md">
      <img src={image} alt={title} className="mb-2" />
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-gray-600">Instructor: {instructor}</p>
      <p className="text-blue-500 font-semibold">${price}</p>
    </div>
  );
};

export default CourseCard;
