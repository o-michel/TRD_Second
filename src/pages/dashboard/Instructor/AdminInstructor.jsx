import React, { useEffect, useState } from 'react'
import InstructorsProfile from "../../../component/dashboard/InstructorsList";
import ModelContainer from '../../../component/dashboard/ModelContainer';

import AddInstructor from '../../../component/dashboard/AddInstructor';
import InstructorsList from '../../../component/dashboard/InstructorsList';


const AdminInstructor = () => {
   // show pop up state
   const [showAddPop, setShowAddPop] = useState(false);

   // closing of the pop up
     const handleOnClose = () =>{
       setShowAddPop(false)
     }
   


   // Responsible for the scrolling up of the nasted route in the dashboard
   useEffect(() => {
      

    window.scroll(0,0)
}, [])


  return (
    <div>

<div className='max-w-screen-xl mx-auto flex-colume align-middle justify-self-center justify-center container mt-8 pt-8 relative '>
      <div className=' flex justify-end'>
       
      
        <div className="group relative">

          <button onClick={() => setShowAddPop(true)} className=" bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded text-xs md:text-base">
            Add Instructor
          </button>
          <div className="hidden group-hover:block absolute bg-gray-100 text-sm text-gray-700 p-2 rounded shadow-md">
              You can add and assign course to an instructor 
          </div>
        </div>
       
      </div>     
                   
      </div>


        <InstructorsList/>
        <ModelContainer onClose={handleOnClose} visible={showAddPop}>
          <AddInstructor/>
        </ModelContainer>
    </div>
  )
}

export default AdminInstructor