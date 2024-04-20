"use client";

import React from "react";
import Filter from "./Filter";

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWindowClose,
  faFileDownload,
} from "@fortawesome/free-solid-svg-icons";
import Paginator from "./Paginator";

function ReportsDialog({ reports }) {
  const [dropdown, setdropdown] = useState(false);
  const toggledropdown = () => {
    setdropdown((prevState) => !prevState);
  };
  const [currentpage, setcurrentpage] = useState(1);
  const [reportsperpage, setreportsperpage] = useState(5);
  const [filteredReports, setFilteredReports] = useState(reports);
  // const [isFiltered, setIsFiltered] = useState(false);

  const FilterAll = () => {
    setFilteredReports(reports);
  };
  const FilterNotAll = () => {
    const thirtyDaysAgo = new Date();
    thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
    const filtered = reports.filter((report) => {
      const reportDate = new Date(report.date);
      return reportDate >= thirtyDaysAgo;
    });

    setFilteredReports(filtered);
  };

  const indexofLastreport = currentpage * reportsperpage;
  const indexofFirstreport = indexofLastreport - reportsperpage;
  const currentreports = filteredReports.slice(
    indexofFirstreport,
    indexofLastreport
  );
  const handleRowsPerPageChange = (event) => {
    setreportsperpage(parseInt(event.target.value, 10));
    setcurrentpage(1);
  };

  return (
    <div className="w-100 p-4 bg-white m-12 rounded-lg">
      <div className="flex justify-center items-center pb-8 pt-8">
        <h1 className="text-2xl font-bold text-center">
          Recently Generated Reports
        </h1>

        <Filter
          toggledropdown={toggledropdown}
          dropdown={dropdown}
          FilterAll={FilterAll}
          FilterNotAll={FilterNotAll}
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
          <h1>
            {report.date}
            <span className="text-slate-400 block">{report.time}</span>
          </h1>
          <span>{report.name}</span>
          <FontAwesomeIcon
            icon={faFileDownload}
            className="w-5 h-5 text-black-500 hover:text-orange-700 cursor-pointer self-center "
          />
        </div>
      ))}
      <hr className="mt-40" />
      <Paginator
        currentpage={currentpage}
        reports={reports}
        handleRowsPerPageChange={handleRowsPerPageChange}
        reportsperpage={reportsperpage}
        setcurrentpage={setcurrentpage}
        totalpages={Math.ceil(reports.length / reportsperpage)}
      />
    </div>
  );
}

export default ReportsDialog;
