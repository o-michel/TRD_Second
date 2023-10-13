import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
// import Instructo from '../../Data/Instructor'
import { AuthContext } from '../../App';

const InstructorsList = () => {
  const { instructorList } = useContext(AuthContext);

//   const {pathname} = useLocation()
//  console.log('location', pathname);

  // const [showAddPop, setShowAddPop] = useState(false);



  // const handleOnClose = () =>{
  //   setShowAddPop(false)
  // }


    // const students = [
    //     { id: 1, name: 'Student 1' },
    //     { id: 2, name: 'Student 2' },
    //     { id: 3, name: 'Student 3' },
    //     { id: 4, name: 'Student 4' },
    //     { id: 5, name: 'Student 5' },
    //     { id: 6, name: 'Student 6' },
    //     { id: 7, name: 'Student 7' },
    //     { id: 8, name: 'Student 8' },
    //     // Add more students...
    //   ];


    //   const Instructor = [
    //     {
    //       id: 1,
    //       name: 'John Doe',
    //       studentId: '12345',
    //       phoneNumber: '123-456-7890',
    //       enrollmentDate: '2023-08-09',
    //       imageUrl: 'https://placeimg.com/50/50/people'
    //     },
    //     {
    //       id: 2,
    //       name: 'Jane Smith',
    //       studentId: '67890',
    //       phoneNumber: '987-654-3210',
    //       enrollmentDate: '2023-08-10',
    //       imageUrl: 'http://i.pravatar.cc/3'
    //     //   imageUrl: 'https://placeimg.com/50/50/people'
    //     },
    //     {
    //       id: 3,
    //       name: 'laurence Smith',
    //       studentId: '67890',
    //       phoneNumber: '987-654-3210',
    //       enrollmentDate: '2023-08-10',
    //       imageUrl: `http://i.pravatar.cc/3`
    //     //   imageUrl: 'https://placeimg.com/50/50/people'
    //     },
    //     {
    //       id: 4,
    //       name: 'Jane Smith',
    //       studentId: '67890',
    //       phoneNumber: '987-654-3210',
    //       enrollmentDate: '2023-08-10',
    //       imageUrl: `http://i.pravatar.cc/3`
    //     //   imageUrl: 'https://placeimg.com/50/50/people'
    //     },
    //     {
    //       id: 5,
    //       name: 'Jane Smith',
    //       studentId: '67890',
    //       phoneNumber: '987-654-3210',
    //       enrollmentDate: '2023-08-10',
    //       imageUrl: `http://i.pravatar.cc/3`
    //     //   imageUrl: 'https://placeimg.com/50/50/people'
    // },
    //     {
    //       id: 6,
    //       name: 'Jane Smith',
    //       studentId: '67890',
    //       phoneNumber: '987-654-3210',
    //       enrollmentDate: '2023-08-10',
    //       imageUrl: `http://i.pravatar.cc/3`
    //       //   imageUrl: 'https://placeimg.com/50/50/people'
    //     },
    //     {
    //       id: 7,
    //       name: 'Jane Smith',
    //       studentId: '67890',
    //       phoneNumber: '987-654-3210',
    //       enrollmentDate: '2023-08-10',
    //       imageUrl: `http://i.pravatar.cc/3`
    //       //   imageUrl: 'https://placeimg.com/50/50/people'
    //     },
    //     {
    //       id: 8,
    //       name: 'Jane Smith',
    //       studentId: '67890',
    //       phoneNumber: '987-654-3210',
    //       enrollmentDate: '2023-08-10',
    //       imageUrl: `http://i.pravatar.cc/3`
    //     //   imageUrl: 'https://placeimg.com/50/50/people'
    //     },
    //     {
    //       id: 9,
    //       name: 'Jane Smith',
    //       studentId: '67890',
    //       phoneNumber: '987-654-3210',
    //       enrollmentDate: '2023-08-10',
    //       imageUrl: `http://i.pravatar.cc/3`
    //     //   imageUrl: 'https://placeimg.com/50/50/people'
    //     },
    //     {
    //       id: 10,
    //       name: 'Jane Smith',
    //       studentId: '67890',
    //       phoneNumber: '987-654-3210',
    //       enrollmentDate: '2023-08-10',
    //       imageUrl: `http://i.pravatar.cc/3`
    //     //   imageUrl: 'https://placeimg.com/50/50/people'
    //     },
    //     {
    //       id: 11,
    //       name: 'Jane Smith',
    //       studentId: '67890',
    //       phoneNumber: '987-654-3210',
    //       enrollmentDate: '2023-08-10',
    //       imageUrl: `http://i.pravatar.cc/3`
    //     //   imageUrl: 'https://placeimg.com/50/50/people'
    //     },
    //     {
    //       id: 12,
    //       name: 'Jane Smith',
    //       studentId: '67890',
    //       phoneNumber: '987-654-3210',
    //       enrollmentDate: '2023-08-10',
    //       imageUrl: `http://i.pravatar.cc/3`
    //     //   imageUrl: 'https://placeimg.com/50/50/people'
    //     },
    //     {
    //       id: 13,
    //       name: 'Jane Smith',
    //       studentId: '67890',
    //       phoneNumber: '987-654-3210',
    //       enrollmentDate: '2023-08-10',
    //       imageUrl: `http://i.pravatar.cc/3`
    //     //   imageUrl: 'https://placeimg.com/50/50/people'
    //     },
    //     {
    //       id: 14,
    //       name: 'Jane Smith',
    //       studentId: '67890',
    //       phoneNumber: '987-654-3210',
    //       enrollmentDate: '2023-08-10',
    //       imageUrl: `http://i.pravatar.cc/3`
    //     //   imageUrl: 'https://placeimg.com/50/50/people'
    // },
    //     {
    //       id: 15,
    //       name: 'Jane Smith',
    //       studentId: '67890',
    //       phoneNumber: '987-654-3210',
    //       enrollmentDate: '2023-08-10',
    //       imageUrl: `http://i.pravatar.cc/3`
    //     //   imageUrl: 'https://placeimg.com/50/50/people'
    //     },
       
    //     // I can keep adding more students here
    //   ];



    
      return (
        <div className='max-w-screen-xl mx-auto  bg-white p-6 rounded shadow  flex-colume align-middle justify-self-center justify-center' >


              <div className=' flex justify-end'>
                
                
                <div className="group relative">

                  <button 
                  //  onClick={() => setShowAddPop(true)}
                    className=" bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded text-xs md:text-base">
                    Assign Instructor
                  </button>
                  <div className="hidden group-hover:block absolute bg-gray-100 text-sm text-gray-700 p-2 rounded shadow-md">
                      You can assign instructor to a course 
                  </div>
                </div>
                
              </div> 


          {/* <div className="bg-white p-6 rounded shadow"> */}
            <h2 className="text-2xl font-semibold my-8">Students Taking Course</h2>
            <div className=' overflow-x-auto'>
            <table className="w-full">
              <thead>
                <tr className="bg-blue-500 text-white">
                  <th className="py-2 px-4 ">Image</th>
                  <th className="py-2 px-4">Instructor Name</th>
                  <th className="py-2 px-4">instructor Email</th>
                  <th className="py-2 px-4">Phone Number</th>
                  <th className="py-2 px-4">Enrollment Date</th>
                  <th className="py-2 px-4">Actions</th>
                </tr>
              </thead>
              <tbody >
                  
                {instructorList.map((Instructor, index) => (
                  <tr key={index} className="hover:bg-gray-100 group">
                    <td className="py-2 px-4">
                      <img src={`${Instructor.imageUrl}${Instructor.id}`} alt={Instructor.name} className="w-10 h-10 rounded-full" />
                      
                    </td>
                    <td className="py-2 px-4">{Instructor.firstName} {Instructor.lastName}</td>
                    <td className="py-2 px-4">{Instructor.email}</td>
                    <td className="py-2 px-4">{Instructor.phoneNumber}</td>
                    <td className="py-2 px-4">{Instructor.createdDate}</td>
                    <td className="py-2 px-4 ">
                <div className='flex relative justify-between'>
                <Link to={`${Instructor._id}`} className="text-blue-500 h-8 hover:underline">
                  View Profile
                </Link>
                {/* <div className='bg-red-0 absolute sm:-right-10   md:-right-16 lg:-right-5 '>
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
          {/* </div> */}


        </div>
      );
}

export default InstructorsList
// export default InstructorsProfile