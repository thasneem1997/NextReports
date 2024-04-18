import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter, faWindowClose,faFileDownload } from '@fortawesome/free-solid-svg-icons';

function ReportsDialog({reports}) {
  return (
    <div className=''>
    <div className='flex justify-center	'>
      <h1 className='text-center font-bold	text-2xl pt-9 pb-0'>Recently Generated Reports</h1>
        <FontAwesomeIcon icon={faFilter} className="w-5 h-5 text-black-500 hover:text-blue-700 cursor-pointer self-center " />
            <FontAwesomeIcon icon={faWindowClose}  className="w-5 h-5 text-black-500 hover:text-blue-700 cursor-pointer self-center m-20"  />
      </div>
      <div >
      {reports.map((report, index) => 
    
            (
                <div key ={index} className='flex ml-8 justify-around'>
                     <h2>{report.date}</h2>
                    <h1>{report.name}</h1>
                    <FontAwesomeIcon icon={faFileDownload} className="w-5 h-5 text-black-500 hover:text-blue-700 cursor-pointer self-center " />
                   

                </div>
            ) )}

    </div>
    </div>
  )
}

export default ReportsDialog
