import React, { useEffect } from 'react'
import Courses from '../../courses'

const AdminCourse = () => {
   // Responsible for the scrolling up of the nasted route in the dashboard
   useEffect(() => {
    window.scroll(0,0)
}, [])


  return (
    <div>
        <div className=' float-right m-10 '>
        <div className=" flex justify-center ">
          <div className="group relative">

            <button
              // onClick={() => setShowAddPop(true)}
              className=" bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded text-xs md:text-base"
            >
              Add Course
            </button>
            <div className="hidden group-hover:block absolute bg-gray-100 text-sm text-gray-700 p-2 rounded shadow-md">
              You can add Course
            </div>

          </div>
        </div>
        </div>
        <Courses/>
    </div>
  )
}

export default AdminCourse