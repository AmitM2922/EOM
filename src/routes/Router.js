import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Dashboard from "../pages/Dashboard";
import Bookings from "../pages/Bookings";
import SellCar from "../pages/SellCar";
import Settings from "../pages/Settings";
import SqlJobs from "../components/SQL Jobs/SqlJobs";
import ScheduleJobs from "../components/ScheduleJobs/ScheduleJobs";
import ReconProcess from "../components/ReconProcess/ReconProcess";
import Process from "../components/Process/Process";
import PDFGeneration from "../components/PDFGeneration/PDFGeneration";

const Router = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={<Navigate to="/dashboard" element={<Dashboard />} />}
      />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/sqljobs" element={<SqlJobs />} />
      <Route path="/schedulejobs" element={<ScheduleJobs />} />
      <Route path="ReconProcess" element={<ReconProcess />} />
      <Route path="Process" element={<Process />} />
      <Route path="PDFGeneration" element={<PDFGeneration />} />
    </Routes>
  );
};

export default Router;
