import React, { useContext } from "react";
import { useParams } from "react-router-dom";
// import instructor from "../../Data/Instructor";
import { AuthContext } from "../../App";

const ListCoursesDetails = () => {
  const { courses, setCourses } = useContext(AuthContext);

  const { id } = useParams();

  const clickedCourse = courses.find(
    // (eachCourse) => eachCourse._id === (id)
    (eachCourse) => eachCourse.id === (id)
  );


  return (
    <div>
        {clickedCourse}
        <div className='w-full md:w-1/2 xl:w-1/3 p-3'>
            <div className=' bg-primaryGrayLightText w-full h-28'><img src="" alt="" /></div>
            <span>Engineering</span>
            <h2>Engineering 101</h2>
            <p>A basic course for 100l student in the facaulty of engineering...</p>
            <div className='flex justify-between'>
                {/* left side */}
                <div className='flex gap-2'>
                    <img src="" alt="" />
                    <div>
                        <h3>Jane Cooper</h3>
                        <p>2001 Enrolled</p>
                    </div>
                </div>

                {/* right side */}
                <button>Edit</button>
            </div>
        </div>
    </div>
  )
}

export default ListCoursesDetails








  