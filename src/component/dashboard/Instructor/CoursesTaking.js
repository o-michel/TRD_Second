import React, { useState } from 'react';
import { BsSearch } from "react-icons/bs";
import { Link, useParams } from 'react-router-dom';

import studentData from '../../Data/User'

import ModelContainer from "./ModelContainer";

import AddStudent from "./AddStudent";

const StudentsTakingCourse = () => {
  const [items, setItems] = useState(studentData);

  const [searchQuery, setSearchQuery] = useState("");
  const [datachild, setdDatachild] = useState("");
  // const [courses, setCourses] = useState(studentData);

  const [showAddPop, setShowAddPop] = useState(false);





  // closing of the pop up
  const handleOnClose = () => {
    setShowAddPop(false);
  };


  // const { id } = useParams();
  // console.log("params", id);
  
  // Handle search
const handleSearch = (event) => {
  const newSearchQuery = event.target.value || "";
  setSearchQuery(newSearchQuery);

  const filtered = studentData.filter((course) =>
    course.name.toLowerCase().includes(newSearchQuery.toLowerCase())
  );
  setItems(filtered);
};
  

  const handleRemoveStudent = (id) => {
    alert("Are you sure you want to delete this user?")
    const newItems = items.filter(item => item.id !== id);
    setItems(() => newItems);
    // console.log("items",items);
    console.log("student", id);
    console.log("newItems", newItems);
  };
  // const handleRemoveStudent = () =>{
  //   const indexToRemove = studentData.findIndex(item => item.id === studentData.id);
  //   if (indexToRemove !== -1) {
  //     studentData.splice(indexToRemove, 1);
  //   }
  // }
  
  const handleAddStudent = ( childData) => {
    // e.preventDefault()
    // const newItems = items.filter(item => item.id !== id);
    const id = Math.floor(Math.random() * 1000) + 1

    // const newItems = items.map(item => item.id !== id);
    // setItems(() => newItems);
    // console.log("items",items);
    // console.log("student", id);
    // console.log("newItems", newItems);
    setdDatachild(childData)
    // console.log("callback check", childData);
    console.log("callback check", datachild);
    const newPost = {id, name: datachild.name, studentId: datachild.studentId, phoneNumber: datachild.phoneNumber }
    const allPost = [...items, newPost]
    setItems(allPost)

    // const id = Math.floor(Math.random() * 1000) + 1

    // console.log("id", id);
    // const newPost = {id, ...childData}
    // setItems([...items, newPost])

  };


    // let diffImg = Math.floor(Math.random()*100)
    // Example student data (you can replace this with your backend data)
//     const studentDatas = [
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
    <div className="max-w-screen-xl mx-auto  bg-white p-6 rounded shadow  flex-colume align-middle justify-self-center justify-center ">
      <div className="flex justify-center w-[90%] mt-6">

          
      <div className=" flex justify-end">
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


        <form
          className="flex flex-row items-center w-4/5 p-2 bg-gray-100 border border-gray-300 rounded-lg md:w-3/5 md:p-3"
          onSubmit={(event) => {
            event.preventDefault();
          }}
        >
          <input
            className="flex-1 bg-transparent outline-none"
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={(event) => {
              handleSearch(event);
            }}
          />
          <BsSearch className="ml-2 text-2xl text-blue-600" />
        </form>
      </div>
      <h2 className="text-2xl font-semibold my-8">Students Taking Course</h2>
     
      <div className=' overflow-x-auto'>
      <table className="table-auto min-w-max  w-full x-overflow-scroll ">
        <thead>
          <tr className="bg-blue-500 text-white">
            <th className="py-2 px-4">Image</th>
            <th className="py-2 px-4">Student Name</th>
            <th className="py-2 px-4">Student ID</th>
            <th className="py-2 px-4">Phone Number</th>
            <th className="py-2 px-4">Enrollment Date</th>
            <th className="py-2 px-4">Actions</th>
          </tr>
        </thead>
        <tbody>
            
          {items.map(student => (
            <tr key={student.id} className="hover:bg-gray-100 group">
              <td className="py-2 px-4">
                <img src={`${student.imageUrl}${student.id}`} alt={student.name} className="w-10 h-10 rounded-full" />
                
              </td>
              <td className="py-2 px-4">{student.name}</td>
              <td className="py-2 px-4">{student.studentId}</td>
              <td className="py-2 px-4">{student.phoneNumber}</td>
              <td className="py-2 px-4">{student.enrollmentDate}</td>
              <td className="py-2 px-4  ">
                <div className='flex relative justify-between'>
                <Link to={`${student.id}`} className="text-blue-500 h-8 hover:underline">
                  View Profile
                </Link>
                <div onClick={() => handleRemoveStudent(student.id)} className='bg-red-0 absolute sm:-right-10   md:-right-16 lg:-right-5 '>
                <svg className='hidden group-hover:block  animate-pulse cursor-pointer m-0 p-0  h-4  ' xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
                  <path fill="#f44336" d="M44,24c0,11-9,20-20,20S4,35,4,24S13,4,24,4S44,13,44,24z"></path><line x1="16.9" x2="31.1" y1="16.9" y2="31.1" fill="none" stroke="#fff" strokeMiterlimit="10" strokeWidth="4"></line><line x1="31.1" x2="16.9" y1="16.9" y2="31.1" fill="none" stroke="#fff" strokeMiterlimit="10" strokeWidth="4"></line>
                </svg>
                </div>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>

      <ModelContainer onClose={handleOnClose} visible={showAddPop}>
        <AddStudent onData={handleAddStudent} onClose={handleOnClose} />
      </ModelContainer>
    </div>
  );
};

export default StudentsTakingCourse;