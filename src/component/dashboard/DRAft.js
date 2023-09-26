// the navigation for the admin dashboard start
<div class="w-full flex-grow lg:flex  lg:items-center lg:w-auto hidden  mt-2 lg:mt-0 bg-white z-20" id="nav-content">
                <ul class="list-reset lg:flex flex-1 items-center px-4 md:px-0">
                    {/* <li class="mr-6 my-2 md:my-0">
                    {buttonsContent.map((content, index) => 
                       ( <Link key={index} to="/admin" class="block py-1 md:py-3 pl-1 align-middle text-pink-600 no-underline hover:text-gray-900 border-b-2 border-orange-600 hover:border-orange-600"  style={isActive ? {color:"blue", border:"none"} :{color:'initial'}}>
                           <i class="fas fa-home fa-fw mr-3 text-pink-600"></i><span class="pb-1 md:pb-0 text-sm">{content}</span>
                        </Link>)
                    )}
        
                    </li> */}
                    <li class="mr-6 my-2 md:my-0">
                        <Link onClick={() =>handleButtonClick('home')} to="/admin" className={`block py-1 md:py-3 pl-1 align-middle  border-b-2  hover:border-blue-600 ${isActive === 'home' ? 'text-pink-600 no-underline hover:text-gray-900 border-b-2 border-orange-600 hover:border-orange-600 ' : ''}`}  >
                            <i class="fas fa-home fa-fw mr-3 text-pink-600"></i><span class="pb-1 md:pb-0 text-sm">Home</span>
                        </Link>
                    </li>
                    <li class="mr-6 my-2 md:my-0">
                        <Link onClick={() =>handleButtonClick('Student')} to="students" className={`block py-1 md:py-3 pl-1 align-middle border-b-2 hover:border-blue-600 ${isActive === 'Student' ? 'text-pink-600 no-underline hover:text-gray-900 border-b-2 border-orange-600 hover:border-orange-600 ' : ''}`}>
                            <i class="fas fa-tasks fa-fw mr-3"></i><span class="pb-1 md:pb-0 text-sm">Student</span>
                        </Link>
                    </li>
                    <li class="mr-6 my-2 md:my-0">
                        <Link onClick={() =>handleButtonClick('Instructors')} to="instructors" className={`block py-1 md:py-3 pl-1 align-middle border-b-2 hover:border-blue-600 ${isActive === 'Instructors' ? 'text-pink-600 no-underline hover:text-gray-900 border-b-2 border-orange-600 hover:border-orange-600 ' : ''}`}>
                            <i class="fa fa-envelope fa-fw mr-3"></i><span class="pb-1 md:pb-0 text-sm">Instructors</span>
                        </Link>
                    </li>
                    <li  class="mr-6 my-2 md:my-0">
                        <Link onClick={() =>handleButtonClick('Courses')} to="courses" className={`block py-1 md:py-3 pl-1 align-middle border-b-2 hover:border-blue-600 ${isActive === 'Courses' ? 'text-pink-600 no-underline hover:text-gray-900 border-b-2 border-orange-600 hover:border-orange-600 ' : ''}`}>
                            <i class="fas fa-chart-area fa-fw mr-3"></i><span class="pb-1 md:pb-0 text-sm">Courses</span>
                        </Link>
                    </li>
                    <li class="mr-6 my-2 md:my-0">
                        <Link onClick={() =>handleButtonClick('Completed course')} to="completed" className={`block py-1 md:py-3 pl-1 align-middle border-b-2 hover:border-blue-600 ${isActive === 'Completed course' ? 'text-pink-600 no-underline hover:text-gray-900 border-b-2 border-orange-600 hover:border-orange-600 ' : ''}`}>
                         <i class="fa fa-wallet fa-fw mr-3"></i><span class="pb-1 md:pb-0 text-sm">Completed course</span>
                        </Link>
                    </li>
                    <li class="mr-6 my-2 md:my-0">
                        <Link onClick={() =>handleButtonClick('placeholder')} to="#" className={`block py-1 md:py-3 pl-1 align-middle border-b-2 hover:border-blue-600 ${isActive === 'placeholder' ? 'text-pink-600 no-underline hover:text-gray-900 border-b-2 border-orange-600 hover:border-orange-600 ' : ''}`} >                           
                        <i class="fa fa-wallet fa-fw mr-3"></i><span class="pb-1 md:pb-0 text-sm">placeholder</span>
                        </Link>
                    </li>
                    {/* <li class="mr-6 my-2 md:my-0">
                    <ResponsiveNavbar
                        activeKey={activeKey}
                         list={list}
                         onSelect={(href) => { props.router.push(href); }}
                     />
                    </li> */}
                </ul>

                <div class="relative pull-right pl-4 pr-4 md:pr-0">
                    <input type="search" placeholder="Search" class="w-full bg-gray-100 text-sm text-gray-800 transition border focus:outline-none focus:border-gray-700 rounded py-1 px-2 pl-10 appearance-none leading-normal"/>
                    <div class="absolute search-icon" style={{top: '0.375rem', left: '1.75rem',}}>
                        <svg class="fill-current pointer-events-none text-gray-800 w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                            <path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"></path>
                        </svg>
                    </div>
                </div>
                

            </div>

// the navigation for the admin dashboard end