import React, {useState} from 'react';


function OffCanvas(){

   const [show,setShow]=useState(true)


return (
    <>
            {/* icon bar */}
                {/* <div>
                    <svg id="hamburger-menu" xmlns="http://www.w3.org/2000/svg" height="32px" viewBox="0 -960 960 960" width="32px" fill="#ffffff">
                        <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/>
                    </svg>
                </div>    
                <div>
                    <svg id="close-menu" xmlns="http://www.w3.org/2000/svg" height="32px" viewBox="0 -960 960 960" width="32px" fill="#ffffff">
                        <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/>
                    </svg>
                </div> */}

               {/* menu wrapper */}
                <div id="menu-wrapper" className="justify-center fixed h-screen overflow-y-auto transition-transform bg-slate-700 w-64 dark:bg-gray-800 transform-none">

                  <div id="iconbar" className="flex flex-row justify-between">

                     <div className='p-6' onClick={()=>setShow(!show)}>
                        <svg id="close-menu" xmlns="http://www.w3.org/2000/svg" height="32px" viewBox="0 -960 960 960" width="32px" fill="#ffffff">
                           <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/>
                        </svg>
                     </div>
               
               
            {show?<div>  
               

               <div id="inner-content-wrapper" className="p-6 -ml-20 bg-slate-600 w-64 dark:bg-gray-800">
                  <div className='pb-4 flex flex-row justify-start'>
                  <div className="">
                     <svg id="close-menu" onClick={()=>setShow(!show)}  xmlns="http://www.w3.org/2000/svg" height="32px" viewBox="0 -960 960 960" width="32px" fill="#ffffff">
                        <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/>
                     </svg>
                  </div>
                  </div>
                  <div id="Subheading" className="pl-2 pb-2 font-bold text-slate-100">Tags</div>

                        {/* --- wrap list items --- */}
                        <ul className="flex flex-wrap justify-start">
                              
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

              </div>:null  
            }
               </div>
            </div>    
      </>
)
}
export default OffCanvas;