import "./user.css"
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LocationSearchingOutlinedIcon from "@mui/icons-material/LocationSearchingOutlined";
import PublishIcon from "@mui/icons-material/Publish";
import { Link } from "react-router-dom";


function User(){
  return (
    <div className="user">
      <div className="userTitleContainer">
        <h1 className="userTitle">Edit User</h1>
        <Link to="/newUser">
          <button className="userAddButton">Create</button>
        </Link>
      </div>
      <div className="userContainer">
        <div className="userShow">
          <div className="userShowTop">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT00rejWha1fvpXc8Njcbd4oSt27V8EDKosCA&usqp=CAU"
              alt="img"
              className="userShowImg"
            />
            <div className="userShowTopTitle">
              <span className="userShowUserName">Joy Becker</span>
              <span className="userShowUserTitle">Software Enginner</span>
            </div>
          </div>
          <div className="userShowBottom">
            <span className="userShowTitle">Account Details</span>
            <div className="userShowInfo">
              <PermIdentityIcon className="userShowIcon" />
              <span className="usershowInfoTitle">joybeck99</span>
            </div>
            <div className="userShowInfo">
              <CalendarTodayIcon className="userShowIcon" />
              <span className="usershowInfoTitle">10.12.1999</span>
            </div>
            <span className="userShowTitle">Contact Details</span>
            <div className="userShowInfo">
              <PhoneAndroidIcon className="userShowIcon" />
              <span className="usershowInfoTitle">+ 1 123 456 67</span>
            </div>
            <div className="userShowInfo">
              <EmailOutlinedIcon className="userShowIcon" />
              <span className="usershowInfoTitle">joybeck99@gmail.com</span>
            </div>
            <div className="userShowInfo">
              <LocationSearchingOutlinedIcon className="userShowIcon" />
              <span className="usershowInfoTitle">New York | USA</span>
            </div>
          </div>
        </div>
        <div className="userUpdate">
          <span className="userUpdateTitle">Edit</span>
          <form className="userUpdateForm">
            <div className="userUpdateLeft">
              <div className="userUpdateItem">
                <label>Username</label>
                <input
                  type="text"
                  placeholder="joybeck99"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Fullname</label>
                <input
                  type="text"
                  placeholder="Joy Becker"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Email</label>
                <input
                  type="text"
                  placeholder="joybeck99@gmail.com"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Phone</label>
                <input
                  type="text"
                  placeholder="+ 1 123 456 67"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Address</label>
                <input
                  type="text"
                  placeholder="joybeck99"
                  className="userUpdateInput"
                />
              </div>
            </div>
            <div className="userUpdateRight">
              <div className="userUpdateUpload">
                <img
                  className="userUpdateImg"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT00rejWha1fvpXc8Njcbd4oSt27V8EDKosCA&usqp=CAU"
                  alt=""
                  type="file"
                />
                <label htmlFor="file"><PublishIcon className="userUpdateIcon" /></label>
                <input type="file"  id="file" style={{display:"none"}}/>
              </div>
              <button className="userUpdateButton">Update</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default User