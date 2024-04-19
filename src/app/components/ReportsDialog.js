'use client' 

import React from "react";

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFilter,
  faWindowClose,
  faFileDownload,
  faArrowLeft,
  faArrowRight,
  faCaretDown,
} from "@fortawesome/free-solid-svg-icons";
import Paginator from "./Paginator";

function ReportsDialog({ reports }) {
  const [currentpage, setcurrentpage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const reportsperpage = 5;
  const indexofLastreport=currentpage*reportsperpage;
  const indexofFirstreport=indexofLastreport-reportsperpage;
  const currentreports=reports.slice(indexofFirstreport,indexofLastreport);
  const handleRowsPerPageChange = (event) => {
    setRowsPerPage(parseInt(event.target.value, 5));
    setcurrentpage(1); 
  };
  return (
    <div className="w-100 p-4 bg-white m-12 rounded-lg">
      <div className="flex justify-center items-center pb-8 pt-8">
        <h1 className="text-2xl font-bold text-center">
          Recently Generated Reports
        </h1>

        <FontAwesomeIcon
          icon={faFilter}
          className="mx-2 w-5 h-5 text-gray-500 hover:text-blue-700 cursor-pointer ml-20"
        />
        <FontAwesomeIcon
          icon={faWindowClose}
          className="w-5 h-5 text-gray-500 hover:text-blue-700 cursor-pointer"
        />
      </div>
      <div className="grid grid-cols-3 gap-4 font-bold bg-gray-100 p-3 text-lg text-slate-500	">
        <h1>Date</h1>
        <h1>Report Name</h1>
        <h1>Download</h1>
      </div>
      {currentreports.map((report, index) => (
        <div key={index} className="grid grid-cols-3 gap-4 p-2 text-slate-600	">
          <span>{report.date}</span>
          <span>{report.name}</span>
          <FontAwesomeIcon
            icon={faFileDownload}
            className="w-5 h-5 text-black-500 hover:text-blue-700 cursor-pointer self-center "
          />
        </div>
      ))}
      <hr className="mt-40" />
      <Paginator
        currentpage={currentpage}
        reports={reports}
        rowsPerPage={rowsPerPage}
        handleRowsPerPageChange={handleRowsPerPageChange}
        setcurrentpage={setcurrentpage}
        totalpages={Math.ceil(reports.length / reportsperpage)}
      />

     
    </div>
  );
}

export default ReportsDialog;
