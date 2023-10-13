import { createContext, useEffect, useState } from 'react';
import { createBrowserRouter, createRoutesFromElements, Route, Outlet, RouterProvider } from 'react-router-dom';
import cookies from 'js-cookie';
import jwtDecode from 'jwt-decode';
import Courses from './pages/courses';
// import { loadCourses } from './pages/courses';
// import CourseDetails from './pages/courseDetails';
// import StudentDashboard, { loadMyCourses } from './pages/student/dashboard';
// import StudentRoutes from './pages/student/StudentRoutes';
import Navbarr from './component/header/navbar';
import SignUp from './pages/auth/signUp';
import SignIn from './pages/auth/signIn';
// import OtpForm from './pages/auth/otp';
// import OtpForm from './forms/auth/OTP';
import TwoFA from './pages/auth/twoFA';
// import InstructorDashboard from './pages/instructor/dashboard';
// import ViewAssignedCourseStudent from './pages/instructor/viewAssignedCourseStudent';
// import AdminMainBody from './pages/admin/AdminMainBody';
// import AdminNavigation from './pages/admin/AdminNavigation';
// import MetricCard from './pages/admin/MetricCard';
// import Instructors from './pages/admin/instructors';
// import Students from './pages/admin/students';
// import ViewStudent from './pages/admin/viewStudent';
// import AllCourses from './pages/admin/courses';
import Landing from './pages/landing';
import Footer from './component/footer';
import "./App.css";
import Contact from './pages/contact';
import AboutPage from './pages/about';
import Events from './pages/events';
// import StudentDashboard from './pages/dashboard/student';
// import AdminDashboard from './pages/dashboard/admin';
// import StudentDetail from './pages/detail/student';
// import Home from './components/home';

import AdminDashboard from './pages/dashboard/Admin/AdminDashboard';
import InstructorDashboard from './pages/dashboard/Instructor/InstructorDashboard';
import UserDashboard from './pages/dashboard/Student/StudentDashboard';
// import Students from './component/dashboard/InstructorsProfile';
import Home from './component/dashboard/Home';
// import cookies from "js-cookie";
import axios, { AxiosError } from "axios";


export const AuthContext = createContext();

const token = cookies.get('token')
// console.log("useParams",useParams);
// export const BASEURL = 'http://localhost:5001/api';
export const BASEURL = 'https://trd-server.onrender.com/api'

function App() {
 const [items, setItems] = useState([])
 const [instructorList, setInstructorList] = useState([])



 
  




 
  
// test data fetch start
useEffect(() => {
  axios({
    method: "get",
    url: `${BASEURL}/students`,

    // data: formData,
    headers: {
      // 'Content-Type': 'text/html',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    }
    // withCredentials: true
  })
  .then((res) => {
    console.log("zzz",res.data.students);
    // console.log("url", url)
    // const studentData = res.data.students
    setItems(() => res.data.students)
     
  })
  .catch((err) => {
        console.log(err.message);
        if(err && err instanceof Error) {
          // alert(err.response?.err.message);
          alert(`${err.message} fetching the list of student`)
          console.log("www",err.response);
        } else if(err && err instanceof AxiosError) {
          alert(err.message)
        } else {
            alert('Error')
        }
        // props.handleAlert(false, e.response.data ? e.response.data : e.message, 'danger');
      });

},[])

// test fetch end


// get instructor start
useEffect(() => {
  axios({
    method: "get",
    url: `${BASEURL}/instructors`,

    // data: formData,
    headers: {
      // 'Content-Type': 'text/html',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    }
    // withCredentials: true
  })
  .then((res) => {
    console.log("yyy",res.data.instructors);
    // console.log("url", url)
    // const studentData = res.data.students
    setInstructorList(() => res.data.instructors)
     
  })
  .catch((err) => {
        console.log(err);
        if(err && err instanceof Error) {
          alert(`${err.message} fetching the list of instructor`)
          // alert(err.response?.data.msg);
        } else if(err && err instanceof AxiosError) {
          alert(err.message)
        } else {
            alert('Error')
        }
        // props.handleAlert(false, e.response.data ? e.response.data : e.message, 'danger');
      });

},[])
// get instructor end


const [courses, setCourses] = useState([]);
const [shouldMakeApiCall, setShouldMakeApiCall] = useState(true);
// get created-courses start
useEffect(() => {
  axios({
    method: "get",
    url: `${BASEURL}/created-courses`,

    // data: formData,
    headers: {
      // 'Content-Type': 'text/html',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    }
    // withCredentials: true
  })
  .then((res) => {
    console.log("xxx created-courses",res.data.data.courses);
    if (shouldMakeApiCall) {
      setCourses(res.data.data.courses)
      // Make the API request
      // Update state if necessary
      setShouldMakeApiCall(false)
    }
    // console.log("url", url)
    // const studentData = res.data.students
    
     
  })
  .catch((err) => {
        console.log(err);
        if(err && err instanceof Error) {
          alert(`${err.message} fetching the list of created-courses`)
          // alert(err.response?.data.msg);
        } else if(err && err instanceof AxiosError) {
          alert(err.message)
        } else {
            alert('Error')
        }
        // props.handleAlert(false, e.response.data ? e.response.data : e.message, 'danger');
      });

},[courses, shouldMakeApiCall])
// get created-courses end

// // Separate effect to update the courses state
// useEffect(() => {
//   // Update the courses state when the data is available
//   // This effect will run whenever the 'courses' dependency changes
//   setCourses(dataFromApi);
// }, [dataFromApi]);



  

  const [authenticatedUser, setAuthenticatedUser] = useState({
    authenticated: false,
    firstName: '',
    lastName: '',
    courses: [],
    role: '',
    token: ''
  })

  const handleAuth = () => {
    const token = cookies.get('token')
    if (token) {
      const decoded = jwtDecode(token);
      console.log(decoded)
      setAuthenticatedUser(prev => ({
        authenticated: true,
        firstName: decoded.firstName,
        lastName: decoded.lastName,
        // courses: decoded.courses
        role: decoded.role,
        token
      }))
    }
  }

  // const [alert, setAlert] = useState({
  //   show: false,
  //   msg: '',
  //   type: ''
  // }) 

  // const handleAlert = (show, msg, type) => {
  //   setAlert({
  //       show,
  //       msg,
  //       type
  //   })
  // }

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route >
        <Route path='/' element={<Root />}>
          <Route path='/' element={<Landing />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/events' element={<Events />} />
          <Route path='/courses' element={<Courses />} 
          // loader={loadCourses} 
          />
          {/* <Route path='/course/:id' element={<CourseDetails />} /> */}
          <Route path='/signup' element={<SignUp />} />
          <Route path='/signin' element={<SignIn />} />
          {/* <Route path='/otpForm' element={<OtpForm />} /> */}
          <Route path='/verify' element={<TwoFA />} />
          {/* <Route element={<StudentRoutes />}> */}
            {/* <Route path='/dashboard/student' element={<StudentDashboard />} /> */}

            {/* <Route path='/student/:id' element={<StudentDetail />} /> */}

            {/* <Route path='/student/dashboard' element={<StudentDashboard />} loader={loadMyCourses} /> */}
          {/* </Route> */}
          <Route  path='admin/*' element={<AdminDashboard />} >
            <Route path='admin' element={<Home />}/>
            {/* <Route path='instructor/:id' element={<Students />}/> */}
            {/* <Route path='students/:studentId' element={<StudentDetail />}/> */}
            

            {/* <Route path='/dashboard/instructor' element={<AdminDashboard />} /> */}
            {/* <Route path='/instructor/dashboard' element={<InstructorDashboard />} />
            <Route path='/instructor/course/:id' element={<ViewAssignedCourseStudent />} /> */}
          </Route>
          <Route  path='instructor/*' element={<InstructorDashboard />} >
            <Route path='instructor' element={<Home />}/>
          </Route>
          <Route  path='user/*' element={<UserDashboard />} >
            <Route path='user' element={<Home />}/>
          </Route>
          <Route >
            {/* <Route path='/admin/dashboard' element={<AdminMainBody />} />
            <Route path='/admin/instructors' element={<Instructors />} />
            <Route path='/admin/students' element={<Students />} /> */}
            {/* <Route path='/instructor/:id' element={<ViewStudent />} /> */}
            {/* <Route path='/student/:id' element={<ViewStudent />} />
            <Route path='/admin/courses' element={<AllCourses />} /> */}
            {/* <Route path='/admin/users' element={<AdminMainBody />} /> */}
            {/* <Route path='/admin/navigation' element={<AdminNavigation />} />
            <Route path='/admin/metric' element={<MetricCard />} /> */}
          </Route>
        </Route>
      </Route>
    )
  )

  return (
    <AuthContext.Provider value={{ authenticatedUser, handleAuth, items, setItems, setInstructorList, instructorList, courses, setCourses, setShouldMakeApiCall }}>
      {/* <> */}
      {/* <Navbarr /> */}

      {/* <div>Temp</div> */}
      <RouterProvider router={router} />
      {/* </> */}
    </AuthContext.Provider>
  );
}

const Root = () => {
  return (
    <>
      <Navbarr />
      <div>
        <Outlet />
      </div>
      <Footer />
    </>
  )
}

export default App;