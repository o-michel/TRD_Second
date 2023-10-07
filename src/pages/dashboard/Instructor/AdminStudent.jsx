import React, { useEffect, useState } from "react";
import StudentsTakingCourse from "../../../component/dashboard/StudentTakingCourses";

const AdminStudent = () => {
  // show pop up state
 

  // Responsible for the scrolling up of the nasted route in the dashboard
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <div>
      <div className="max-w-screen-xl mx-auto flex-colume align-middle justify-self-center justify-center container mt-8 pt-8 relative ">
       
      </div>
      <StudentsTakingCourse />
      
    </div>
  );
};

export default AdminStudent;
