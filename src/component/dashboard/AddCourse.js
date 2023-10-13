// CourseForm.js
import React, { useContext, useState } from 'react';
import { AuthContext, BASEURL } from "../../App";
import Icon_x from "../../Assets/Icons/x-close.png";
import axios, { AxiosError } from 'axios';
import Cookies from 'js-cookie';

const token = Cookies.get('token')


const AddCourse = ({onClose, onData}) => {
  const {courses, setCourses} = useContext(AuthContext)

    // const [sm, setSm] = useState(null)

    const [Course, setCourse] = useState({
        title: '',
        description : '',
        duration: '',
        start_date: '',
        end_date: '',
        location: '',
        capacity: '',
        amount: '',
        image: null, //should I change this to empty string ni? 
    });



    


  const handleChange = (e) => {
    const { name, value } = e.target;


    setCourse({ ...Course, [name]: value });
    
  };
  
  const [selectedImage, setSelectedImage] = useState(null);

  
//   image seperate start
const onFileChange = (e) => {
  
  const file = e.target.files[0]; // Get the selected file
  // This if statement prevent an error that arises when an img has previously being selected
    if (file) {
      setCourse({ ...Course, image:file });
    setSelectedImage(URL.createObjectURL(file));
    };

  };
//   image seperate end


//   HandleAddCourse
  const handleSubmit = (e) => {
    e.preventDefault();

    // const id = Math.floor(Math.random() * 1000) + 1

    // const newPost = { id, title: Course.title, description : Course.description,  duration: Course.duration,start_date: Course.start_date, end_date: Course.end_date, location: Course.location, capacity: Course.capacity, amount: Course.amount, image: selectedImage  }
    // console.log('new post newPost', newPost);
    // console.log('new post selectedImage', selectedImage);
    // onData(Course, selectedImage);


    // // Axios request start
    axios({
      method: "post",
      url: `${BASEURL}/course`,
      data: Course,
      headers: {
        // 'Content-Type': 'text/html',
        // 'Content-Type': 'application/json',
        'Content-Type': 'multipart/form-data',
        Authorization: `Bearer ${token}`
      }
      // withCredentials: true
    })
    .then((res) => {
      console.log("xxx created-courses",res.data.msg);
      // const allPost = [newPost, ...courses]

      // setCourses(allPost)
     
  
       
    })
    .catch((err) => {
          console.log(err);
          if(err && err instanceof Error) {
            alert(`${err.message} making the posting`)
            // alert(err.response?.data.msg);
          } else if(err && err instanceof AxiosError) {
            alert(err.message)
          } else {
              alert('Error')
          }
          // props.handleAlert(false, e.response.data ? e.response.data : e.message, 'danger');
        });
    // // Axios request end



    onClose()

  };
  
  const handleCancel = () => {
    // e.preventDefault();
    onClose()
    // You can add your logic here to handle the form submission, e.g., sending data to a server or updating state.
  };
  // console.log("YES Course",Course);

  return (
    // <div className="min-h-screen flex items-center justify-center bg-blue-50">
      <div className="bg-white p-8 rounded-lg shadow-md w-full md:w-1/2 lg:w-1/3 overflow-y-auto ">
        <button className='float-right' onClick={handleCancel}><img src={Icon_x} alt='Icon x close' /></button>
        <h2 className="text-3xl font-semibold text-blue-600 mb-4">Add Course</h2>
        <form  onSubmit={handleSubmit}>
          {/* <div className='flex  flex-wrap gap-2 justify-center items-center '> */}
          <div className=' flex gap-5 justify-between'>

          {/* first section start */}
          <div>
                <div className="mb-4">
                  <label className="block text-gray-600 font-semibold mb-2" htmlFor="name">
                    Title
                  </label>
                  <input
                    className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-blue-200  outline-none"
                    type="text"
                    id="title"
                    name="title"
                    value={Course.title}
                    onChange={handleChange}
                    placeholder="Course Title"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-600 font-semibold mb-2" htmlFor="CourseId">
                  Description 
                  </label>
                  <input
                    className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-blue-200  outline-none"
                    type="text"
                    id="description"
                    name="description"
                    value={Course.description }
                    onChange={handleChange}
                    placeholder="Description "
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-600 font-semibold mb-2" htmlFor="CourseId">
                    Duration 
                  </label>
                  <input
                    className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-blue-200  outline-none"
                    type="text"
                    id="duration"
                    name="duration"
                    value={Course.duration}
                    onChange={handleChange}
                    placeholder=" Course Duration"
                    required
                  />
                </div>
                <div className="mb-1">
                  <label className="block text-gray-600 font-semibold mb-2" htmlFor="CourseId">
                  start_date 
                  </label>
                  <input
                    className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-blue-200  outline-none"
                    type="number"
                    id="start_date"
                    name="start_date"
                    value={Course.start_date}
                    onChange={handleChange}
                    placeholder=" start date"
                    required
                  />
                </div>
          </div>
          {/* first section end */}
          
          {/* second section start */}
          <div>
          <div className="mb-4">
            <label className="block text-gray-600 font-semibold mb-2" htmlFor="CourseId">
              Duration 
            </label>
            <input
              className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-blue-200  outline-none"
              type="text"
              id="end_date"
              name="end_date"
              value={Course.end_date}
              onChange={handleChange}
              placeholder=" end date"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-600 font-semibold mb-2" htmlFor="CourseId">
            location 
            </label>
            <input
              className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-blue-200  outline-none"
              type="text"
              id="location"
              name="location"
              value={Course.location}
              onChange={handleChange}
              placeholder="location"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-600 font-semibold mb-2" htmlFor="CourseId">
            capacity 
            </label>
            <input
              className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-blue-200  outline-none"
              type="number"
              id="capacity"
              name="capacity"
              value={Course.capacity}
              onChange={handleChange}
              placeholder="capacity"
              required
            />
          </div>
          
          <div className="mb-1">
            <label className="block text-gray-600 font-semibold mb-2" htmlFor="enrollmentDate">
              Enrolled
            </label>
            <input
              className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-blue-200  outline-none"
              type="number"
              id="amount"
              name="amount"
              value={Course.amount}
              onChange={handleChange}
              placeholder='Amount '
              required
            />
          </div>
          
          </div>
          {/* second section end */}
          

          </div>
          {/* overall 2 side end */}
          <div className="mb-4">
            <label className="block text-gray-600 font-semibold mb-2" htmlFor="phoneNumber">
              File
            </label>
            <input
              className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-blue-200  outline-none"
              type="file"
              id="image"
              name="image"
            //   value={Course.file}
            accept='image/*'
              onChange={onFileChange}
              placeholder="Upload img"
              required
            />
          </div>

          {/* {selectedImage && <img src={selectedImage} alt="Selected Image" />} */}
          <button
            className="bg-blue-500 text-white font-semibold px-4 py-2 rounded-lg hover:bg-blue-600"
            type="submit"
          >
            Add Course
          </button>
        </form>
      </div>
    // </div>
  );
};

export default AddCourse;
