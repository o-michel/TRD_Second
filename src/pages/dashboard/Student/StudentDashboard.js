
import React, { useState } from 'react';


import NavBar from '../../../component/dashboard/User/NavBar';
import Home from '../../../component/dashboard/Home';
import { Outlet, Route, Routes } from 'react-router-dom';

import StudentProfile from '../../StudentProfile';
// import AdminStudent from './AdminStudent';
import CompletedCourses from '../../CompletedCourses';
import AdminCourse from './AdminCourse';
import AdminInstructor from './AdminInstructor';
import InstructorsProfile from '../../../component/dashboard/InstructorsProfile';
import UserHome from '../../../component/dashboard/User/UserHome';


function StudentDashboard() {
  return (
    <div className="bg-gray-100 mt-10 font-sans leading-normal tracking-normal">

        {/* Nav */}
        <NavBar />
        <div className="top-5 mt-20 ">
          <Routes>
              <Route path="/" element={<UserHome />} />

              {/* <Route path="students" element={<AdminStudent />} /> */}
              {/* <Route path="students/:id" element={<StudentProfile />} /> */}
              <Route path="instructors" element={<AdminInstructor />} />
              {/* </Route> */}
              <Route path='instructors/:id' element={<InstructorsProfile/>} />
              <Route path="courses" element={<AdminCourse />} />
              <Route path="completed" element={<CompletedCourses />} />
              {/* <Route path="settings" element={<Settings />} /> */}
          </Routes>
        </div>
        {/* <Outlet /> */}

        {/* <Home /> */}
           
      
    </div>
  );
}

export default StudentDashboard;