
import React, { useState } from 'react';

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faSun } from '@fortawesome/free-solid-svg-icons';
// import MetricCard from '../../component/dashboard/MetricCard';
import NavBar from '../../../component/dashboard/NavBar';
import Home from '../../../component/dashboard/Home';
import { Outlet, Route, Routes } from 'react-router-dom';
// import InstructorsProfile from '../../../component/dashboard/InstructorsProfile';
// import Courses from '../../courses';
import StudentProfile from '../../StudentProfile';
// import Student from './student';
import AdminStudent from './AdminStudent';
// import StudentDetail from '../../../component/dashboard/StudentDetail';
import CompletedCourses from '../../CompletedCourses';
import AdminCourse from './AdminCourse';
import AdminInstructor from './AdminInstructor';
// import InstructorsList from '../../../component/dashboard/InstructorsList';
import InstructorsProfile from '../../../component/dashboard/InstructorsProfile';
import ListCoursesDetails from '../../../component/dashboard/ListCoursesDetails';

// function DropdownMenuToggle({ children, menuId, buttonId }) {
//   const [isVisible, setIsVisible] = useState(false);

  // const handleToggle = () => {
  //   setIsVisible(!isVisible);
  // };

  // const handleClickOutside = (e) => {
  //   if (!document.getElementById(menuId).contains(e.target) && !document.getElementById(buttonId).contains(e.target)) {
  //     setIsVisible(false);
  //   }
  // };

  // React.useEffect(() => {
  //   document.addEventListener('mousedown', handleClickOutside);
  //   return () => {
  //     document.removeEventListener('mousedown', handleClickOutside);
  //   };
  // }, []);

  // return (
  //   <h2>hello</h2>
    // <div className="relative inline-block float-right">
    //   <button id={buttonId} className="flex items-center focus:outline-none mr-3" onClick={handleToggle}>
    //     {children}
    //   </button>
    //   <div
    //     id={menuId}
    //     className={`bg-white rounded shadow-md mt-2 absolute mt-12 top-0 right-0 min-w-full overflow-auto ${
    //       isVisible ? '' : 'invisible'
    //     }`}
    //   >
    //     {isVisible && <ul className="list-reset">{children}</ul>}
    //   </div>
    // </div>
  // );
// }

function AdminDashboard() {
  return (
    <div className="bg-gray-100 mt-10 font-sans leading-normal tracking-normal">

        {/* Nav */}
        <NavBar />
        <div className="top-5 mt-20 ">
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="students" element={<AdminStudent />} />
              <Route path="students/:id" element={<StudentProfile />} />
              <Route path="instructors" element={<AdminInstructor />} />
              {/* </Route> */}
              <Route path='instructors/:id' element={<InstructorsProfile/>} />
              <Route path="courses" element={<AdminCourse />} />
              <Route path="courses/:id" element={<ListCoursesDetails />} />
              <Route path="completed" element={<CompletedCourses />} />
              {/* <Route path="settings" element={<Settings />} /> */}
          </Routes>
        </div>
        {/* <Outlet /> */}

        {/* <Home /> */}
           
      
    </div>
  );
}

export default AdminDashboard;