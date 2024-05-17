import React, {useState} from 'react';


function OffCanvas(){

   const [show,setShow]=useState(true)


return (
    <>

            {/* icon bar */}
                <div>
                    <svg id="hamburger-menu" xmlns="http://www.w3.org/2000/svg" height="32px" viewBox="0 -960 960 960" width="32px" fill="#ffffff">
                        <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/>
                    </svg>
                </div>    
                <div>
                    <svg id="close-menu" xmlns="http://www.w3.org/2000/svg" height="32px" viewBox="0 -960 960 960" width="32px" fill="#ffffff">
                        <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/>
                    </svg>
                </div>

               {/* menu wrapper */}
                <div id="menu-wrapper" className="justify-center py-3 fixed top-0 left-0 z-40 h-screen p-4 overflow-y-auto transition-transform bg-slate-700 w-64 dark:bg-gray-800 transform-none">

                  <button onClick={()=>setShow(show)} ></button>
                  <div id="iconbar" className="flex flex-row justify-between">

                  <div className=''>
            {
              show?<h1> ...menu goes here...</h1>:null  
            }
         	<button onClick={()=>setShow(!show)}>Icon button</button> 
        </div>  

                  </div>

                  <div id="Subheading" className="px-4 mx-2 pt-6 font-semibold text-slate-100">Tags</div>
                  <div id="inner-content-wrapper" className="flex flex-col px-4 py-6">

                        {/* --- wrap list items --- */}
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
)
}
export default OffCanvas;