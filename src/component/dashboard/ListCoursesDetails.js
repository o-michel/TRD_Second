import React, { useContext } from "react";
import { useParams } from "react-router-dom";
// import instructor from "../../Data/Instructor";
import { AuthContext } from "../../App";

const ListCoursesDetails = () => {
  const { courses, setCourses } = useContext(AuthContext);

  const { id } = useParams();
  // console.log("a id", courses[0].id);
  
  const clickedCourse = courses.find(
      (eachCourse) => eachCourse._id === (id)
      // (eachCourse) => eachCourse.id == (id)
      );
      console.log("b id", clickedCourse.image.path);


//   const clickedInstructor = instructorList.find(
//     (eachInstructor) => eachInstructor._id === (id)
//   );

  return (
    <div>
        {/* {clickedCourse.title} */}
        <div className="bg-white rounded-lg shadow-md mb-4 p-4">
      <img
        src={clickedCourse.image.path} // Add the image source here
        alt={clickedCourse.title}
        className="w-full h-60 object-cover mb-4"
      />
      <h2 className="text-2xl font-semibold text-blue-600 mb-2">{clickedCourse.title}</h2>
      <p className="text-gray-600 mb-2">Capacity: {clickedCourse.capacity}</p>
      <p className="text-gray-600 mb-2">{clickedCourse.description}</p>
      <p className="text-gray-600 mb-2">Duration: {clickedCourse.duration}</p>
      <p className="text-gray-600 mb-2">Location: {clickedCourse.location}</p>
      <p className="text-gray-600 mb-2">Start Date: {clickedCourse.start_date}</p>
      <p className="text-gray-600 mb-2">End Date: {clickedCourse.end_date}</p>
    </div>
    </div>
  )
}

export default ListCoursesDetails








  