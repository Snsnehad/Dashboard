import FeaturedInfo from "../../components/featuredinfo/FeauturedInfo";
import "./home.css"
import Chart from "../../components/charts/Chart";
import { userData } from "./dummydata";
import WidgetSmall from "../../components/widgetsmall/WidgetSmall";
import WidgetLarge from "../../components/widgetlarge/WidgetLarge";

function Home(){
  return(
    <div className="home">
      <FeaturedInfo/>
      <Chart data={userData} title="User Analytics" grid dataKey="Active User"/>
      <div className="homeWidgets">
        <WidgetSmall/>
        <WidgetLarge/>
      </div>
    </div>
  )
}

export default Home;