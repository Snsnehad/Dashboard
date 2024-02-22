import "./sidebar.css";
import LineStyleIcon from "@mui/icons-material/LineStyle";
import TimelineIcon from "@mui/icons-material/Timeline";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import PaidOutlinedIcon from "@mui/icons-material/PaidOutlined";
import EqualizerOutlined from "@mui/icons-material/EqualizerOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import Feedback from "@mui/icons-material/Feedback";
import ChatBubbleOutlineOutlined from "@mui/icons-material/ChatBubbleOutlineOutlined";
import HomeRepairService from "@mui/icons-material/HomeRepairService";
import ReportIcon from "@mui/icons-material/Report";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <Link to="/home" className="link">
              <li className="sidebarlistItem active">
                <LineStyleIcon className="sidebarIcon" />
                Home
              </li>
            </Link>

            <li className="sidebarlistItem">
              <TimelineIcon className="sidebarIcon" />
              Analytics
            </li>
            <li className="sidebarlistItem">
              <TrendingUpIcon className="sidebarIcon" />
              Sales
            </li>
          </ul>
          <h3 className="sidebarTitle">Quick Menu</h3>
          <ul className="sidebarList">
            <Link to="/users" className="link">
              <li className="sidebarlistItem">
                <PermIdentityIcon className="sidebarIcon" />
                Users
              </li>
            </Link>
            <Link to="/products" className="link">
              <li className="sidebarlistItem">
                <Inventory2OutlinedIcon className="sidebarIcon" />
                Products
              </li>
            </Link>
            <li className="sidebarlistItem">
              <PaidOutlinedIcon className="sidebarIcon" />
              Transactions
            </li>
            <li className="sidebarlistItem">
              <EqualizerOutlined className="sidebarIcon" />
              Reports
            </li>
          </ul>
          <h3 className="sidebarTitle">Notifications</h3>
          <ul className="sidebarList">
            <li className="sidebarlistItem">
              <EmailOutlinedIcon className="sidebarIcon" />
              Mail
            </li>
            <li className="sidebarlistItem">
              <Feedback className="sidebarIcon" />
              Feedback
            </li>
            <li className="sidebarlistItem">
              <ChatBubbleOutlineOutlined className="sidebarIcon" />
              Messages
            </li>
          </ul>
          <h3 className="sidebarTitle">Staff</h3>
          <ul className="sidebarList">
            <li className="sidebarlistItem">
              <HomeRepairService className="sidebarIcon" />
              Manage
            </li>
            <li className="sidebarlistItem">
              <TimelineIcon className="sidebarIcon" />
              Analytics
            </li>
            <li className="sidebarlistItem">
              <ReportIcon className="sidebarIcon" />
              Reports
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
