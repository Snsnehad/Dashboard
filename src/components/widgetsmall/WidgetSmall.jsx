import './widgetsmall.css'
import VisibilityIcon from "@mui/icons-material/Visibility";

function WidgetSmall(){
  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">New Join Members</span>
      <ul className="widgetSmList">
        <li className="widgetSmListItem">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMUYCyLYq79S0HC-ILJ96n9K_8SVcgYh0LHg&usqp=CAU"
            alt="pic"
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Anna Keller</span>
            <span className="widgetsmUserTitle">Software Engineer</span>
          </div>
          <button className="widgetSmButton">
            <VisibilityIcon className="widgetSmIcon" />
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMUYCyLYq79S0HC-ILJ96n9K_8SVcgYh0LHg&usqp=CAU"
            alt="pic"
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Anna Keller</span>
            <span className="widgetsmUserTitle">Software Engineer</span>
          </div>
          <button className="widgetSmButton">
            <VisibilityIcon className="widgetSmIcon" />
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMUYCyLYq79S0HC-ILJ96n9K_8SVcgYh0LHg&usqp=CAU"
            alt="pic"
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Anna Keller</span>
            <span className="widgetsmUserTitle">Software Engineer</span>
          </div>
          <button className="widgetSmButton">
            <VisibilityIcon className="widgetSmIcon" />
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMUYCyLYq79S0HC-ILJ96n9K_8SVcgYh0LHg&usqp=CAU"
            alt="pic"
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Anna Keller</span>
            <span className="widgetsmUserTitle">Software Engineer</span>
          </div>
          <button className="widgetSmButton">
            <VisibilityIcon className="widgetSmIcon" />
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMUYCyLYq79S0HC-ILJ96n9K_8SVcgYh0LHg&usqp=CAU"
            alt="pic"
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Anna Keller</span>
            <span className="widgetsmUserTitle">Software Engineer</span>
          </div>
          <button className="widgetSmButton">
            <VisibilityIcon className="widgetSmIcon" />
            Display
          </button>
        </li>
      </ul>
    </div>
  );

}

export default WidgetSmall