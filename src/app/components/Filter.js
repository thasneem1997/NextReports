import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faFilter} from "@fortawesome/free-solid-svg-icons";



const Filter = ({toggledropdown,dropdown,FilterNotAll,FilterAll}) => {
  return (
    <div>
      <FontAwesomeIcon
          icon={faFilter}
          className="mx-2 w-5 h-5 text-gray-500 hover:text-blue-700 cursor-pointer ml-20"
       onClick={toggledropdown} />
       {dropdown&& (<div className="absolute bg-gray-100 min-w-xs shadow-lg p-3 z-10" style={{marginTop:'8px',marginLeft:'46px'}}>
        <ul >
          <li><a onClick={FilterAll}className="hover:bg-slate-200 p-1">All</a></li>
          <li><a onClick={FilterNotAll} className="hover:bg-slate-200 p-1">Last 30  Days</a></li>
        </ul>

       </div>)}
    </div>
  )
}

export default Filter
