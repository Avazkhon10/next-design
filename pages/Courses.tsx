// pages/course/[id].tsx
import React from "react";
import { useRouter } from "next/router";
import CourseListing from "/@components/CourseListing";

const CourseListing: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;

  // Dummy data (replace with real data fetching logic)
  const course = {
    id: id as string,
    title: "Course Title",
    instructor: "Instructor Name",
    price: 49.99,
    description: "This is a sample course description.",
  };

  return (
    <div>
      <CourseListing {...course} />
    </div>
  );
};

export default CourseListing;
