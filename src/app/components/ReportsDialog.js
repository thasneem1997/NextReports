import React from 'react'

function ReportsDialog({reports}) {
  return (
    <div>
      <h1>Recently generated Reports</h1>
      
      {reports.map((report, index) => 
    
            (
                <div key ={index}>
                     <h2>{report.date}</h2>
                    <h1>{report.title}</h1>
                    <button>Download</button>
                   

                </div>
            ) )}

    </div>
  )
}

export default ReportsDialog
