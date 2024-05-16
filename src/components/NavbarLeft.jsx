function NavbarLeft() {

   return (
     <>
          
<div id="left-menu-box-wrapper" className="justify-center py-3 fixed top-0 left-0 z-40 h-screen p-4 overflow-y-auto transition-transform bg-white w-64 dark:bg-gray-800 transform-none">

<div id="icon-container" className="flex flex-row justify-end">

  <svg id="filters" xmlns="http://www.w3.org/2000/svg" height="32px" viewBox="0 -960 960 960" width="32px" fill="#5f6368">
     <path d="M440-120v-240h80v80h320v80H520v80h-80Zm-320-80v-80h240v80H120Zm160-160v-80H120v-80h160v-80h80v240h-80Zm160-80v-80h400v80H440Zm160-160v-240h80v80h160v80H680v80h-80Zm-480-80v-80h400v80H120Z"/>
  </svg>

  <svg id="arrow-left" xmlns="http://www.w3.org/2000/svg" height="32px" viewBox="0 -960 960 960" width="32px" fill="#5f6368">
     <path d="m313-440 224 224-57 56-320-320 320-320 57 56-224 224h487v80H313Z"/>
  </svg>

  <svg id="hamburger-menu" xmlns="http://www.w3.org/2000/svg" height="32px" viewBox="0 -960 960 960" width="32px" fill="#5f6368">
     <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/>
  </svg>

  <svg id="menu-open" xmlns="http://www.w3.org/2000/svg" height="32px" viewBox="0 -960 960 960" width="32px" fill="#5f6368">
     <path d="M120-240v-80h520v80H120Zm664-40L584-480l200-200 56 56-144 144 144 144-56 56ZM120-440v-80h400v80H120Zm0-200v-80h520v80H120Z"/>
  </svg>

</div>

<div id="left-bar-menu-box" className="flex flex-col px-4 py-6">

     <div id="left-menu-box-title" className="px-4 mx-2 my-4 font-semibold text-slate-800">Tags</div>
        <ul className="flex flex-col items-start justify-start">
{/*                
--- Column --- */}
              
        <li className="my-1 px-2">
              <div className="py-1 px-4 gap-2 font-semibold text-sm rounded-full text-slate-300 dark:text-gray-400 bg-sky-200">
                 <a href="" className=" text-sky-900">Entertainment</a>
                 </div>
              </li>

              <li className="my-1 px-2">
              <div className="py-1 px-4 gap-2 font-semibold text-sm rounded-full text-slate-300 dark:text-gray-400 bg-sky-200">
                 <a href="" className=" text-sky-900">Data</a>
                 </div>
              </li>

              <li className="my-1 px-2">
              <div className="py-1 px-4 gap-2 font-semibold text-sm rounded-full text-slate-300 dark:text-gray-400 bg-sky-200">
                 <a href="" className=" text-sky-900">Music</a>
                 </div>
              </li>

              <li className="my-1 px-2">
              <div className="py-1 px-4 gap-2 font-semibold text-sm rounded-full text-slate-300 dark:text-gray-400 bg-sky-200">
                 <a href="" className=" text-sky-900">AI</a>
                 </div>
              </li>

              <li className="my-1 px-2">
              <div className="py-1 px-4 gap-2 font-semibold text-sm rounded-full text-slate-300 dark:text-gray-400 bg-sky-200">
                 <a href="" className=" text-sky-900">Education</a>
                 </div>
              </li>

              <li className="my-1 px-2">
              <div className="py-1 px-4 gap-2 font-semibold text-sm rounded-full text-slate-300 dark:text-gray-400 bg-sky-200">
                 <a href="" className=" text-sky-900">Social</a>
                 </div>
              </li>

              <li className="my-1 px-2">
              <div className="py-1 px-4 gap-2 font-semibold text-sm rounded-full text-slate-300 dark:text-gray-400 bg-sky-200">
                 <a href="" className=" text-sky-900">Weather</a>
                 </div>
              </li>

              <li className="my-1 px-2">
              <div className="py-1 px-4 gap-2 font-semibold text-sm rounded-full text-slate-300 dark:text-gray-400 bg-sky-200">
                 <a href="" className=" text-sky-900">Finance</a>
                 </div>
              </li>

              <li className="my-1 px-2">
              <div className="py-1 px-4 gap-2 font-semibold text-sm rounded-full text-slate-300 dark:text-gray-400 bg-sky-200">
                 <a href="" className=" text-sky-900">e-commerce</a>
                 </div>
              </li>             
        </ul>

        {/* --- Wrap --- */}
        <br></br>
        <br></br>

        <ul className="flex flex-wrap items-start justify-start">
              
              <li className="my-1 px-2">
                    <div className="py-1 px-4 gap-2 font-semibold text-sm rounded-full text-slate-300 dark:text-gray-400 bg-sky-200">
                       <a href="" className=" text-sky-900">Entertainment</a>
                       </div>
                    </li>
     
                    <li className="my-1 px-2">
                    <div className="py-1 px-4 gap-2 font-semibold text-sm rounded-full text-slate-300 dark:text-gray-400 bg-sky-200">
                       <a href="" className=" text-sky-900">Data</a>
                       </div>
                    </li>
     
                    <li className="my-1 px-2">
                    <div className="py-1 px-4 gap-2 font-semibold text-sm rounded-full text-slate-300 dark:text-gray-400 bg-sky-200">
                       <a href="" className=" text-sky-900">Music</a>
                       </div>
                    </li>
     
                    <li className="my-1 px-2">
                    <div className="py-1 px-4 gap-2 font-semibold text-sm rounded-full text-slate-300 dark:text-gray-400 bg-sky-200">
                       <a href="" className=" text-sky-900">AI</a>
                       </div>
                    </li>
     
                    <li className="my-1 px-2">
                    <div className="py-1 px-4 gap-2 font-semibold text-sm rounded-full text-slate-300 dark:text-gray-400 bg-sky-200">
                       <a href="" className=" text-sky-900">Education</a>
                       </div>
                    </li>
     
                    <li className="my-1 px-2">
                    <div className="py-1 px-4 gap-2 font-semibold text-sm rounded-full text-slate-300 dark:text-gray-400 bg-sky-200">
                       <a href="" className=" text-sky-900">Social</a>
                       </div>
                    </li>
     
                    <li className="my-1 px-2">
                    <div className="py-1 px-4 gap-2 font-semibold text-sm rounded-full text-slate-300 dark:text-gray-400 bg-sky-200">
                       <a href="" className=" text-sky-900">Weather</a>
                       </div>
                    </li>
     
                    <li className="my-1 px-2">
                    <div className="py-1 px-4 gap-2 font-semibold text-sm rounded-full text-slate-300 dark:text-gray-400 bg-sky-200">
                       <a href="" className=" text-sky-900">Finance</a>
                       </div>
                    </li>
     
                    <li className="my-1 px-2">
                    <div className="py-1 px-4 gap-2 font-semibold text-sm rounded-full text-slate-300 dark:text-gray-400 bg-sky-200">
                       <a href="" className=" text-sky-900">e-commerce</a>
                       </div>
                    </li>             
              </ul>

     </div>
   </div>

     </>
   );
 }
 
 export default NavbarLeft;