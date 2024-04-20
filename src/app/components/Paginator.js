import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
   
    faArrowLeft,
    faArrowRight,
  } from "@fortawesome/free-solid-svg-icons";



function Paginator({currentpage,setcurrentpage,totalpages,reportsperpage,handleRowsPerPageChange}) {
   

  return (//ui of pagination
    <div className='flex mt-5 text-gray-400 justify-center '>
    <FontAwesomeIcon icon={faArrowLeft} style={{marginTop:'8px'}} className="w-5 h-5 "  onClick={() => setcurrentpage(currentpage - 1)}
        disabled={currentpage === 1} />

      <button className='pl-3 mt-1'
       
      >
        Previous
      </button>
      {Array.from({ length: totalpages }, (_, index) => (
        <button
      key={index}
      className={`px-4 py-2 border ${currentpage === index + 1 ? 'bg-orange-500 ml-2 text-white' : 'bg-white  ml-2'}`}         
      
          onClick={() => setcurrentpage(index + 1)}
          disabled={currentpage === index + 1}
        >
          {index + 1}
        </button>
      ))}
      <button className='pl-3 mt-1'
        
      >
        Next
      </button>
      <FontAwesomeIcon icon={faArrowRight} style={{marginTop:'8px'}} className="w-5 h-5 ml-2" onClick={() => setcurrentpage(currentpage + 1)}
        disabled={currentpage === totalpages} />
      <p className='pl-3 mt-1 ml-20'>Rows Per Page</p>
      <p>
      
        <select className='border-solid border-2 p-1	ml-2 rounded'
          id="rows-per-page"
          value={reportsperpage}
          onChange={handleRowsPerPageChange}
        >
          <option value={5}>5</option>
          <option value={10}>8</option>
          <option value={15}>15</option>
          <option value={20}>20</option>
        
        </select>

      </p>

    </div>
  );
}

export default Paginator
