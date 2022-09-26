import {MdDashboard} from "react-icons/md"
import {FaDatabase,FaMicrochip,FaFilePdf} from "react-icons/fa"
import {GiProcessor} from "react-icons/gi"
import {BiAbacus} from "react-icons/bi"

const navLinks = [
  {
    path: "/dashboard",
    icon: <MdDashboard/>,
    display: "Dashboard",
  },
  {
    path: "/sqljobs",
    icon:<FaDatabase/>,
    display: "SQL Jobs",
  },
  {
    path: "/Process",
    icon: <FaMicrochip/>,
    display: "Process",
  },
  {
    path: "/ReconProcess",
    icon: <GiProcessor/>,
    display: "Recon Process",
  },
  {
    path: "/schedulejobs",
    icon: <BiAbacus/>,
    display: "Schedule Jobs",
  },
  {
    path: "/PDFGeneration",
    icon: <FaFilePdf/>,
    display: "PDF Generation",
  }
];

export default navLinks;
