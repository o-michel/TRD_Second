import React, { useEffect } from 'react'

// import Courses from '../../courses'
// import AddStudent from '../../../component/dashboard/AddStudent'
// import ModelContainer from '../../../component/dashboard/ModelContainer'
// import { AuthContext } from '../../../App'

// import AddCourse from '../../../component/dashboard/AddCourse'
import ListCourses from '../../../component/dashboard/ListCourses'
// import Cookies from 'js-cookie'
export const BASEURL = 'https://trd-server.onrender.com/api'





const AdminCourse = () => {

  
  
   // Responsible for the scrolling up of the nasted route in the dashboard
   useEffect(() => {
      

    window.scroll(0,0)
}, [])







 

  
 


  return (
    <div className='max-w-screen-xl mx-auto flex-colume align-middle justify-self-center justify-center container mt-8 pt-8 relative '>
        
        <ListCourses/>
        
    </div>
  )
}

export default AdminCourse