// import { faEllipsis } from '@fortawesome/free-solid-svg-icons'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import axios from 'axios';
import React, {useContext, useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import { AuthContext, BASEURL } from "../../App";
import axios, { AxiosError } from "axios";
import AddCourse from './AddCourse';
import ModelContainer from './ModelContainer';
import Cookies from 'js-cookie';
import imgCallback from "../../images/profile.jpeg";


const token = Cookies.get('token')


const ListCourses = () => {
  const {courses, setCourses} = useContext(AuthContext)
  const [showAddPop, setShowAddPop] = useState(false);


  const handleAddStudent = ( childData, imgChild) => {

    // const id = Math.floor(Math.random() * 1000) + 1

    // const newPost = { id, title: childData.title, description : childData.description,  duration: childData.duration,start_date: childData.start_date, end_date: childData.end_date, location: childData.location, capacity: childData.capacity, amount: childData.amount, image: imgChild  }
    // console.log('new post newPost', newPost);
    // console.log('new post imgChild', imgChild);
   


      // setCourses([...courses, newPost])

    // axios({
    //   method: "post",
    //   url: `${BASEURL}/course`,
    //   data: newPost,
    //   headers: {
    //     // 'Content-Type': 'text/html',
    //     'Content-Type': 'application/json',
    //     Authorization: `Bearer ${token}`
    //   }
    //   // withCredentials: true
    // })
    // .then((res) => {
    //   console.log("xxx created-courses",res.data.msg);
    //   // const allPost = [newPost, ...courses]

    //   // setCourses(allPost)
     
  
       
    // })
    // .catch((err) => {
    //       console.log(err);
    //       if(err && err instanceof Error) {
    //         alert(`${err.message} making the posting`)
    //         // alert(err.response?.data.msg);
    //       } else if(err && err instanceof AxiosError) {
    //         alert(err.message)
    //       } else {
    //           alert('Error')
    //       }
    //       // props.handleAlert(false, e.response.data ? e.response.data : e.message, 'danger');
    //     });










    // e.preventDefault()
    // const newItems = items.filter(item => item.id !== id);


  

    // const id = Math.floor(Math.random() * 1000) + 1

    // console.log("id", id);
    

  };

   // closing of the pop up
   const handleOnClose = () => {
    setShowAddPop(false);
  };


// console.log("ooo",courses.image.path);
// let check2 = BASEURL 
// let check1 = ""
// let check1 = courses[0].image.path 
// let check  = {...check2, check1}
// console.log("check", check);

  // const [currentItems, setCurrentItems] = useState([])


   // Responsible for the scrolling up of the nasted route in the dashboard
   useEffect(() => {  

    window.scroll(0,0)
}, [])
  return (
    <div className="max-w-screen-xl mx-auto bg-white p-6 rounded shadow  flex-colume align-middle justify-self-center justify-center ">
      {/* button start */}
      <div className=" flex justify-end m-2">
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
      {/* button end */}

      <h2 className="text-2xl font-semibold my-8">Students Taking Course</h2>


        <div className=' overflow-x-auto'>
      <table className="table-auto min-w-max  w-full x-overflow-scroll ">
        <thead>
          <tr className="bg-blue-500 text-white">
            <th className="py-2 px-4">Image</th>
            <th className="py-2 px-4">Title</th>
            <th className="py-2 px-4">Description</th>
            {/* <th className="py-2 px-4">Instructors</th> */}
            <th className="py-2 px-4">Duration</th>
            <th className="py-2 px-4">Capacity</th>
            <th className="py-2 px-4">Student Enrolled</th>
            <th className="py-2 px-4">Status</th>
            <th className="py-2 px-4">Actions</th>
          </tr>
        </thead>
        <tbody>
            
          {courses.map((student, index) => (
            <tr key={index} className="hover:bg-gray-100 group">
              <td className="py-2 px-4">
                 {/* <img src={img} alt={student.title}   className="w-10 h-10 rounded-full" /> */}
                 <img src='https://trd-server.onrender.com/api/file/e2a1fe6fa9d2595a081509245d9d0d7b.jpg' alt={student.title}   className="w-10 h-10 rounded-full" />
                {/* <img src={imgCallback} alt={student.title}   className="w-10 h-10 rounded-full" /> */}
                
              </td>
              <td className="py-2 px-4">{student.title} </td>
              <td className="py-2 px-4">{student.description}</td>
              <td className="py-2 px-4">{student.duration}</td>
              <td className="py-2 px-4">{student.capacity}</td>
              <td className="py-2 px-4">{student.amount}</td>
              <td className="py-2 px-4">{student.status ? student.status:"Upcoming"}</td>
              <td className="py-2 px-4  ">
                <div className='flex relative justify-between'>
                <Link to={`${student._id}`} className="text-blue-500 h-8 hover:underline">
                  View Profile
                </Link>
                {/* <div onClick={() => handleRemoveStudent(student.id)} className='bg-red-0 absolute sm:-right-10   md:-right-16 lg:-right-5 '>
                <svg className='hidden group-hover:block  animate-pulse cursor-pointer m-0 p-0  h-4  ' xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
                  <path fill="#f44336" d="M44,24c0,11-9,20-20,20S4,35,4,24S13,4,24,4S44,13,44,24z"></path><line x1="16.9" x2="31.1" y1="16.9" y2="31.1" fill="none" stroke="#fff" strokeMiterlimit="10" strokeWidth="4"></line><line x1="31.1" x2="16.9" y1="16.9" y2="31.1" fill="none" stroke="#fff" strokeMiterlimit="10" strokeWidth="4"></line>
                </svg>
                </div> */}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>

      <ModelContainer onClose={handleOnClose} visible={showAddPop}>
        <AddCourse
         onData={handleAddStudent}
          onClose={handleOnClose} />
      </ModelContainer>
    </div>
  )
}

export default ListCourses