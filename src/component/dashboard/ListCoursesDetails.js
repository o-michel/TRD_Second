import React, { useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
// import instructor from "../../Data/Instructor";
import { AuthContext, BASEURL } from "../../App";
// import imgCallback from "../../images/profile.jpeg";
import axios, { AxiosError } from "axios";
import Cookies from "js-cookie";

const token = Cookies.get('token')


const ListCoursesDetails = () => {
  const { courses, setCourses } = useContext(AuthContext);

  const navigate = useNavigate()

  const {id}  = useParams();
  // const {id}  = useParams();

  console.log("id object",id);
  const params = {id}
  console.log("params", params);


  const clickedCourse = courses.find(
    (eachCourse) => eachCourse._id === (id)
    // (eachCourse) => eachCourse.id == (id)
    );



  // test data fetch start
useEffect(() => {
  axios({
    method: "get",
    url: `${BASEURL}/course/:id`,
    params:  { id } ,

    // data: formData,
    headers: {
      // 'Content-Type': 'text/html',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    },
    // withCredentials: true
  })
  .then((res) => {
    console.log("abc",res);
    // console.log("url", url)
    // const studentData = res.data.students
    // setItems(() => res.data.students)
     
  })
  .catch((err) => {
        console.log(err.message);
        if(err && err instanceof Error) {
          // alert(err.response?.err.message);
          alert(`${err.message} `)
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


// // get instructor start
// useEffect(() => {
//   axios({
//     method: "get",
//     url: `${BASEURL}/instructors`,

//     // data: formData,
//     headers: {
//       // 'Content-Type': 'text/html',
//       'Content-Type': 'application/json',
//       Authorization: `Bearer ${token}`
//     }
//     // withCredentials: true
//   })
//   .then((res) => {
//     console.log("yyy",res.data.instructors);
//     // console.log("url", url)
//     // const studentData = res.data.students
//     setInstructorList(() => res.data.instructors)
     
//   })
//   .catch((err) => {
//         console.log(err);
//         if(err && err instanceof Error) {
//           alert(`${err.message} fetching the list of instructor`)
//           // alert(err.response?.data.msg);
//         } else if(err && err instanceof AxiosError) {
//           alert(err.message)
//         } else {
//             alert('Error')
//         }
//         // props.handleAlert(false, e.response.data ? e.response.data : e.message, 'danger');
//       });

// },[])
// // get instructor end












 
  // console.log("a id", courses[0].id);
  
 
      // console.log("b id", clickedCourse.image.path);


//   const clickedInstructor = instructorList.find(
//     (eachInstructor) => eachInstructor._id === (id)
//   );
 // Responsible for the scrolling up of the nasted route in the dashboard
 useEffect(() => {
      

  window.scroll(0,0)
}, [])

  return (
    <div>
    <div className="bg-white rounded-lg shadow-md mb-4 p-4">
      <div className="flex flex-col md:flex-row items-center">
        <div className="md:w-1/3 md:pr-4">
          <img
            src={`https://trd-server.onrender.com/api/file/${clickedCourse.image.path}`}
            alt={clickedCourse.title}
            className="w-full h-60 object-cover mb-4"
          />
        </div>
        <div className="md:w-2/3">
          <div className="flex items-center md:justify-between m-2">
            <button
              onClick={() => navigate(-1)}
              className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded text-xs md:text-base"
            >
              Back
            </button>
            <div className="hidden group-hover:block absolute bg-gray-100 text-sm text-gray-700 p-2 rounded shadow-md">
              Go back to the previous page
            </div>
          </div>
          <h2 className="text-2xl font-semibold text-blue-600 mb-2">
            {clickedCourse.title}
          </h2>
          <p className="text-gray-600 mb-2">Capacity: {clickedCourse.capacity}</p>
          <p className="text-gray-600 mb-2">{clickedCourse.description}</p>
          <p className="text-gray-600 mb-2">Duration: {clickedCourse.duration}</p>
          <p className="text-gray-600 mb-2">Location: {clickedCourse.location}</p>
          <p className="text-gray-600 mb-2">Start Date: {clickedCourse.start_date}</p>
          <p className="text-gray-600 mb-2">End Date: {clickedCourse.end_date}</p>
          <div className="flex justify-end m-2">
            <button
              className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded text-xs md:text-base"
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
  )
}

export default ListCoursesDetails








  