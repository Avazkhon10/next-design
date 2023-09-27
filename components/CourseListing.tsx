// components/CourseListing.tsx
import React from "react";
import CourseCard from "./CourseCard";

const CourseListing: React.FC = () => {
  // Dummy data (replace with real data)
  const courses = [
    {
      title: "Course 1",
      instructor: "Instructor 1",
      price: 49.99,
      image: "/course1.jpg",
    },
    {
      title: "Course 2",
      instructor: "Instructor 2",
      price: 39.99,
      image: "/course2.jpg",
    },
    {
      title: "Course 3",
      instructor: "Instructor 3",
      price: 59.99,
      image: "/course3.jpg",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {courses.map((course, index) => (
        <CourseCard key={index} {...course} />
      ))}
    </div>
  );
};

export default CourseListing;
