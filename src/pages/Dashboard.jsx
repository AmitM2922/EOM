import React from "react";
import "../styles/dashboard.css";
import SingleCard from "../components/reuseable/SingleCard";
import {FaDatabase,FaFileCode,FaEnvira,FaMicrochip} from "react-icons/fa";
import MileChart from "../charts/MileChart";
import CarStatsChart from "../charts/CarStatsChart";

const DBServer = {
  title: "DB Server Usage",
  totalNumber: "75%",
  icon: <FaDatabase/>,
};

const LogFile = {
  title: "Log File Size",
  totalNumber: "10 GB",
  icon: <FaFileCode/>,
};

const clientObj = {
  title: "Current TNP / Total TNP",
  totalNumber: "1 / 10",
  icon: <FaMicrochip/>,
};

const distanceObj = {
  title: "Environment",
  totalNumber: "POD 1-QA",
  icon: <FaEnvira/>,
};

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="dashboard__wrapper">
        <div className="dashboard__cards">
          <SingleCard item={DBServer} />
          <SingleCard item={LogFile} />
          <SingleCard item={clientObj} />
          <SingleCard item={distanceObj} />
        </div>
        <div className="card mt-5">
          <div className="card-header">
            Runbook Statementing Steps
          </div>
          <div className="card-body">
            <table className="table table-hover table-striped table-light " >
              <thead>
                <tr>
                  <th scope="col">Step No</th>
                  <th scope="col">Step Name</th>
                  <th scope="col">Status</th>
                  <th scope="col">Remark</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>Larry</td>
                  <td>the Bird</td>
                  <td>@twitter</td>
                </tr>
                <tr>
                  <th scope="row">1</th>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>Larry</td>
                  <td>the Bird</td>
                  <td>@twitter</td>
                </tr>
                <tr>
                  <th scope="row">1</th>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>Larry</td>
                  <td>the Bird</td>
                  <td>@twitter</td>
                </tr>
              </tbody>
            </table>

          </div>
        </div>
  

      
      </div>
    </div>
  );
};

export default Dashboard;
