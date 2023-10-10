import React, { useEffect } from 'react'
import Courses from '../../courses'

const AdminCourse = () => {
   // Responsible for the scrolling up of the nasted route in the dashboard
   useEffect(() => {
      

    window.scroll(0,0)
}, [])


  return (
    <div>
        <div className=' float-right  '>
            <button className='p-5 m-5 text-gray-500 bg-blue-50 shadow rounded-2xl'>Assign Courses</button>
            <button className='p-5 m-5  text-gray-500 bg-blue-50 shadow-sm rounded-2xl '>Completed Courses</button>
            <button className='p-5 m-5  text-gray-500 bg-blue-50 shadow-sm rounded-2xl '>Add Courses</button>
        </div>
        <Courses/>
    </div>
  )
}

export default AdminCourse