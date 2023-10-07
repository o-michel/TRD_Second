
import React from 'react';

import NavBar from '../../../component/dashboard/Instructor/NavBar';
import Home from '../../../component/dashboard/Instructor/Home';
import { Route, Routes } from 'react-router-dom';
import StudentProfile from '../../StudentProfile';
import AdminStudent from './AdminStudent';
// import CompletedCourses from '../../CompletedCourses';
import InstructorCourse from './InstructorCourse';
// import InstructorsProfile from '../../../component/dashboard/InstructorsProfile';


 
function AdminDashboard() {
  return (
    <div className="bg-gray-100 mt-10 font-sans leading-normal tracking-normal">

        {/* Nav */}
        <NavBar />
        <div className="top-5 mt-20 ">
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="courses" element={<InstructorCourse />} />
              <Route path="students" element={<AdminStudent />} />
              <Route path="students/:id" element={<StudentProfile />} />
              {/* <Route path="instructors" element={<AdminInstructor />} /> */}
            
              {/* <Route path='instructors/:id' element={<InstructorsProfile/>} /> */}
              {/* <Route path="completed" element={<CompletedCourses />} /> */}

              {/* <Route path="settings" element={<Settings />} /> */}
          </Routes>
        </div>
        {/* <Outlet /> */}

     
           
      
    </div>
  );
}

export default AdminDashboard;