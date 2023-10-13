import React, { useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
// import instructor from "../../Data/Instructor";
import { AuthContext } from "../../App";
import imgCallback from "../../images/profile.jpeg";


const ListCoursesDetails = () => {
  const { courses, setCourses } = useContext(AuthContext);


  const navigate = useNavigate()

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
 // Responsible for the scrolling up of the nasted route in the dashboard
 useEffect(() => {
      

  window.scroll(0,0)
}, [])

  return (
    <div>
        {/* {clickedCourse.title} */}
        <div className="bg-white rounded-lg shadow-md mb-4 p-4">
              <div className=" flex  m-2">
                    <div className="group relative">
                      <button
                        onClick={() => navigate(-1)}
                        className=" bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded text-xs md:text-base"
                      >
                        Back
                      </button>
                      <div className="hidden group-hover:block absolute bg-gray-100 text-sm text-gray-700 p-2 rounded shadow-md">
                        Go back to previous page
                      </div>
                    </div>

              </div>
          <img
            src={imgCallback} // Add the image source here
            // src={clickedCourse.image.path} // Add the image source here
            alt={clickedCourse.title}
            className="w-full h-60 object-cover mb-4"
          />
        <div>
         <div>
            <h2 className="text-2xl font-semibold text-blue-600 mb-2">{clickedCourse.title}</h2>
            <p className="text-gray-600 mb-2">Capacity: {clickedCourse.capacity}</p>
            <p className="text-gray-600 mb-2">{clickedCourse.description}</p>
            <p className="text-gray-600 mb-2">Duration: {clickedCourse.duration}</p>
            <p className="text-gray-600 mb-2">Location: {clickedCourse.location}</p>
            <p className="text-gray-600 mb-2">Start Date: {clickedCourse.start_date}</p>
            <p className="text-gray-600 mb-2">End Date: {clickedCourse.end_date}</p>
         </div>
         <div>

            <div className=" flex justify-end m-2">
              <div className="group relative">
                <button
                  // onClick={() => setShowAddPop(true)}
                  className=" bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded text-xs md:text-base"
                >
                  Delete Course
                </button>
                <div className="hidden group-hover:block absolute bg-gray-100 text-sm text-gray-700 p-2 rounded shadow-md">
                  This Course will be deleted 
                </div>
              </div>

            </div>

         </div>

        </div>
    </div>
    </div>
  )
}

export default ListCoursesDetails








  