import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter, faWindowClose, faFileDownload,faArrowLeft, faArrowRight,faCaretDown  } from '@fortawesome/free-solid-svg-icons';


function ReportsDialog({ reports }) {
  return (
    <div className='w-100 p-4 bg-white m-12 rounded-lg'>
      <div className='flex justify-center items-center pb-8 pt-8'>
        <h1 className='text-2xl font-bold text-center'>Recently Generated Reports</h1>
       
          <FontAwesomeIcon icon={faFilter} className="mx-2 w-5 h-5 text-gray-500 hover:text-blue-700 cursor-pointer ml-20" />
          <FontAwesomeIcon icon={faWindowClose} className="w-5 h-5 text-gray-500 hover:text-blue-700 cursor-pointer" />
        
      </div>
      <div className='grid grid-cols-3 gap-4 font-bold bg-gray-100 p-3 text-lg text-slate-500	'>
        <h1>Date</h1>
        <h1>Report Name</h1>
        <h1>Download</h1>
      </div>
      {reports.map((report, index) => (
        <div key={index} className='grid grid-cols-3 gap-4 p-2 text-slate-600	'>
          <span>{report.date}</span>
          <span>{report.name}</span>
          <FontAwesomeIcon icon={faFileDownload} className="w-5 h-5 text-black-500 hover:text-blue-700 cursor-pointer self-center " />
        </div>
      ))}
    <hr className='mt-40'/>

<div className='flex mt-5 text-gray-400 justify-center '>
<FontAwesomeIcon icon={faArrowLeft} style={{marginTop:'8px'}} className="w-5 h-5 "/>
      <p className='pl-3 mt-1'>Prev</p>  
      <p className=' border-solid border-2 p-1 ml-2 rounded bg-orange-500 text-white' >1</p>
      <p className='border-solid border-2 p-1	ml-2 rounded'>2</p>

      <p className='border-solid border-2 p-1	ml-2 rounded'>3</p>

      <p className='border-solid border-2 p-1	ml-2 rounded'>4</p>
      <p className='pl-3 mt-1'>Next</p>
      <FontAwesomeIcon icon={faArrowRight} style={{marginTop:'8px'}} className="w-5 h-5 ml-2"/>

      <p className='pl-3 mt-1 ml-15'>Rows Per Page</p>
      <p className='border-solid border-2 p-1	ml-2 rounded'>10
      <FontAwesomeIcon icon={faCaretDown} style={{marginTop: '-23px',
    marginLeft: '20px'}}className="w-5 h-5 ml-2"/>

      </p>



        </div>


    </div>
    
  );
}

export default ReportsDialog;
