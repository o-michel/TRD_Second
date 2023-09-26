import React, { useEffect, useState } from "react";
import StudentsTakingCourse from "../../../component/dashboard/StudentTakingCourses";
import ModelContainer from "../../../component/dashboard/ModelContainer";

import AddStudent from "../../../component/dashboard/AddStudent";
const AdminStudent = () => {
  // show pop up state
  const [showAddPop, setShowAddPop] = useState(false);

  // closing of the pop up
  const handleOnClose = () => {
    setShowAddPop(false);
  };

  // Responsible for the scrolling up of the nasted route in the dashboard
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <div>
      <div className="max-w-screen-xl mx-auto flex-colume align-middle justify-self-center justify-center container mt-8 pt-8 relative ">
        
        <div className=" flex justify-end">
          <div className="group relative">
            <button
              onClick={() => setShowAddPop(true)}
              className=" bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded text-xs md:text-base"
            >
              Add Student
            </button>
            <div className="hidden group-hover:block absolute bg-gray-100 text-sm text-gray-700 p-2 rounded shadow-md">
              You can add student
            </div>
          </div>
        </div>

      </div>
      <StudentsTakingCourse />
      <ModelContainer onClose={handleOnClose} visible={showAddPop}>
        <AddStudent />
      </ModelContainer>
    </div>
  );
};

export default AdminStudent;
