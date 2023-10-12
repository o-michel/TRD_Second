import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import instructor from "../../Data/Instructor";
import { AuthContext } from "../../App";

function InstructorsProfile() {
  const { instructorList, setInstructorList } = useContext(AuthContext);

  // const [items, setItems] = useState(instructor);

  const { id } = useParams();
  console.log("params", id);

  // const handleRemoveStudent = () => {
  //   const newItems = items.filter(item => item.id !== 2000);
  //   setItems(newItems);
  //   console.log("items",items);
  //   // console.log("student", id);
  //   console.log("newItems", newItems);
  // };
  // Fetch student details based on studentId
  // For simplicity, let's assume you have a students array somewhere
  // const instructor = [
  //   { id: 1, name: 'Student 1', details: 'Details about Student 1' },
  //   { id: 2, name: 'Student 2', details: 'Details about Student 2' },
  //   { id: 3, name: 'Student 3', details: 'Details about Student 3' },
  //   // Add more students...
  // ];

  const clickedInstructor = instructorList.find(
    (eachInstructor) => eachInstructor._id === (id)
  );
  // console.log("student",student);

  return (
    <div>
      
      <div className="bg-white min-h-screen p-6 flex flex-col items-center">
        <button>Remove Student</button>
        {clickedInstructor && (
          <div className="bg-gray-100 w-full sm:w-2/3 md:w-3/4 lg:w-1/2 xl:w-2/3 rounded-lg shadow-lg p-8">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:mr-6">
                <img
                  src="https://via.placeholder.com/150"
                  alt="Profile"
                  className="h-32 w-32 rounded-full mx-auto"
                />
              </div>
              <div className="text-center mt-4 md:mt-0">
                <h1 className="text-4xl font-semibold text-gray-900">
                  {clickedInstructor.gender} {clickedInstructor.firstName} {clickedInstructor.lastName}{" "}
                </h1>
                <p className="text-gray-600 text-lg">
                  student Front-end Developer
                </p>
                <p className="text-gray-700 text-sm mt-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  viverra scelerisque tortor ac posuere.
                </p>
              </div>
            </div>
            <div className="mt-6">
              <h2 className="text-xl font-semibold text-gray-900">Skills</h2>
              <ul className="mt-2">
                <li className="mb-2">
                  <span className="text-indigo-600 font-semibold">
                    Web Development:
                  </span>{" "}
                  HTML, CSS, JavaScript, React
                </li>
                <li className="mb-2">
                  <span className="text-indigo-600 font-semibold">Design:</span>{" "}
                  Adobe Photoshop, Figma
                </li>
                <li className="mb-2">
                  <span className="text-indigo-600 font-semibold">
                    Backend:
                  </span>{" "}
                  Node.js, Express.js
                </li>
              </ul>
            </div>
            <div className="mt-6">
              <h2 className="text-xl font-semibold text-gray-900">
                Experience
              </h2>
              <div className="mt-2">
                <div className="mb-4">
                  <h3 className="text-lg font-semibold">
                    Front-end Developer - Company A
                  </h3>
                  <p className="text-gray-600">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
                <div className="mb-4">
                  <h3 className="text-lg font-semibold">
                    Web Designer - Company B
                  </h3>
                  <p className="text-gray-600">
                    Sed viverra scelerisque tortor ac posuere.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold">
                    Freelance Web Developer
                  </h3>
                  <p className="text-gray-600">
                    Pellentesque habitant morbi tristique senectus et netus et
                    malesuada fames ac turpis egestas.
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-6">
              <h2 className="text-xl font-semibold text-gray-900">Contact</h2>
              <p className="mt-2 text-gray-600">Email: johndoe@example.com</p>
            </div>
          </div>
        )}
      </div>

      {/* second card start */}
      
<div className="bg-white min-h-screen p-6 flex flex-col items-center">
      {clickedInstructor &&(<div className="bg-gray-100 w-full sm:w-2/3 md:w-3/4 lg:w-1/2 xl:w-2/3 rounded-lg shadow-lg p-8">
        <div className="mt-6">
          <h2 className="text-xl font-semibold text-gray-900">More info</h2>
          <ul className="mt-2">
            <li className="mb-2">
              <span className="text-indigo-600 font-semibold">No of courses taking:</span> 3 courses
            </li>
            <li className="mb-2">
              <span className="text-indigo-600 font-semibold">No of student taking the course:</span> 25 students
            </li>
            <li className="mb-2">
              <span className="text-indigo-600 font-semibold">Others:</span> I myself dont know
            </li>
          </ul>
        </div>
    
      </div>)}
    </div>
      {/* second card end */}
      
      {/* <h2>Student Detail</h2>
      {clickedInstructor && (
        <div>
          <h3>{clickedInstructor.name}</h3>
          <p>{clickedInstructor.details}</p>
        </div>
      )}
 */}
    </div>
  );
}

export default InstructorsProfile;
// export default StudentDetail;
