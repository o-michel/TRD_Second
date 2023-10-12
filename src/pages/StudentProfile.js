import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
// import students from '../Data/User'
import { AuthContext } from '../App';

function StudentProfile() {
  const { items } = useContext(AuthContext);

const {id} = useParams()

console.log('id',id);

  // const students = [
  //   {id:1, name: "john", studID:"NDAE001", phoneNumber:"08034037821", enrollmentDate: "02-04-2020", Skills:"frontend", experience: {title:"frontend Dev -company A", description:"I work with a team and I am the one that handle there UI" }, img:"https..." },
  //   {id:2, name: "Sam", studID:"NDAE001", phoneNumber:"08034037821", enrollmentDate: "02-04-2020", Skills:"frontend", experience: {title:"frontend Dev -company A", description:"I work with a team and I am the one that handle there UI" }, img:"https..." },
  //   {id:3, name: "Dan", studID:"NDAE001", phoneNumber:"08034037821", enrollmentDate: "02-04-2020", Skills:"frontend", experience: {title:"frontend Dev -company A", description:"I work with a team and I am the one that handle there UI" }, img:"https..." },
  //   {id:4, name: "Ema", studID:"NDAE001", phoneNumber:"08034037821", enrollmentDate: "02-04-2020", Skills:"frontend", experience: {title:"frontend Dev -company A", description:"I work with a team and I am the one that handle there UI" }, img:"https..." },
  // ]
  
  // const student = items.find(student => student._id === parseInt(id));
  const student = items.find(student => student._id === (id));
  console.log('student',student);
  
  return (
    <div>
      <div className="bg-gray-100 min-h-screen p-6 flex flex-col items-center">
      {student &&(<div className="bg-white w-full sm:w-2/3 md:w-3/4 lg:w-1/2 xl:w-2/3 rounded-lg shadow-lg p-8">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:mr-6">
            <img
              src="https://via.placeholder.com/150"
              alt="Profile"
              className="h-32 w-32 rounded-full mx-auto"
            />
          </div>
          <div className="text-center mt-4 md:mt-0">
            <h1 className="text-4xl font-semibold text-gray-900">{student.firstName} {student.lastName} </h1>
            <p className="text-gray-600 text-lg">Front-end Developer</p>
            <p className="text-gray-700 text-sm mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed viverra
              scelerisque tortor ac posuere.
            </p>
          </div>
        </div>
        <div className="mt-6">
          <h2 className="text-xl font-semibold text-gray-900">Skills</h2>
          <ul className="mt-2">
            <li className="mb-2">
              <span className="text-indigo-600 font-semibold">Web Development:</span> HTML, CSS, JavaScript, React
            </li>
            <li className="mb-2">
              <span className="text-indigo-600 font-semibold">Design:</span> Adobe Photoshop, Figma
            </li>
            <li className="mb-2">
              <span className="text-indigo-600 font-semibold">Backend:</span> Node.js, Express.js
            </li>
          </ul>
        </div>
        <div className="mt-6">
          <h2 className="text-xl font-semibold text-gray-900">Experience</h2>
          <div className="mt-2">
            <div className="mb-4">
              <h3 className="text-lg font-semibold">Front-end Developer - Company A</h3>
              <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div className="mb-4">
              <h3 className="text-lg font-semibold">Web Designer - Company B</h3>
              <p className="text-gray-600">Sed viverra scelerisque tortor ac posuere.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Freelance Web Developer</h3>
              <p className="text-gray-600">Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>
            </div>
          </div>
        </div>
        <div className="mt-6">
          <h2 className="text-xl font-semibold text-gray-900">Contact</h2>
          <p className="mt-2 text-gray-600">
            Email: johndoe@example.com
          </p>
        </div>
      </div>)}
      
    </div>

    {/* second card start  */}

    <div className="bg-gray-100 min-h-screen p-6 flex flex-col items-center">
      {student &&(<div className="bg-white w-full sm:w-2/3 md:w-3/4 lg:w-1/2 xl:w-2/3 rounded-lg shadow-lg p-8">
      
        <div className="mt-6">
          <h2 className="text-xl font-semibold text-gray-900">Other info</h2>
          <ul className="mt-2">
            <li className="mb-2">
              <span className="text-indigo-600 font-semibold">Enrolled courses:</span> 3 courses
            </li>
            <li className="mb-2">
              <span className="text-indigo-600 font-semibold">Completed courses:</span> 1 courses
            </li>
            <li className="mb-2">
              <span className="text-indigo-600 font-semibold">Ongoing courses:</span> 2 courses
            </li>
            <li className="mb-2">
              <span className="text-indigo-600 font-semibold">Other info:</span> I don't know yet o
            </li>
          </ul>
        </div>
        
        
      </div>)}
      
    </div>
    {/* second card end */}


    </div>


  );
}

export default StudentProfile;






// export default studentProfile