import './widgetlarge.css'

function WidgetLarge() {

  const Button =({type}) =>{
    return <button className={'widgetLgButton ' + type}>{type}</button>
  }

  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">Latest Transactions</h3>
      <table className="widgetLgTable">
        <tbody>
          <tr className="widgetLgTr">
            <th className="widgetLgTh">Customer</th>
            <th className="widgetLgTh">Date</th>
            <th className="widgetLgTh">Amount</th>
            <th className="widgetLgTh">Status</th>
          </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfrTuKkAex7hY8g24MiwlZTem69PKIWEofmw&usqp=CAU"
              alt="model pic"
              className="widgetLgImg"
            />
            <span className="widgetLgName">Susan Carol</span>
          </td>
          <td className="widgetLgDate" >2 june 2021</td>
          <td className="widgetLgAmount">Amount</td>
          <td className="widgetLgStatus">
            <Button type="Approved" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfrTuKkAex7hY8g24MiwlZTem69PKIWEofmw&usqp=CAU"
              alt="moel pic"
              className="widgetLgImg"
            />
            <span className="widgetLgName">Susan Carol</span>
          </td>
          <td className="widgetLgDate">2 june 2021</td>
          <td className="widgetLgAmount">Amount</td>
          <td className="widgetLgStatus">
            <Button type="Declined" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfrTuKkAex7hY8g24MiwlZTem69PKIWEofmw&usqp=CAU"
              alt="modelpic"
              className="widgetLgImg"
            />
            <span className="widgetLgName">Susan Carol</span>
          </td>
          <td className="widgetLgDate">2 june 2021</td>
          <td className="widgetLgAmount">Amount</td>
          <td className="widgetLgStatus">
            <Button type="Pending" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfrTuKkAex7hY8g24MiwlZTem69PKIWEofmw&usqp=CAU"
              alt="moel pic"
              className="widgetLgImg"
            />
            <span className="widgetLgName">Susan Carol</span>
          </td>
          <td className="widgetLgDate">2 june 2021</td>
          <td className="widgetLgAmount">Amount</td>
          <td className="widgetLgStatus">
            <Button type="Approved" />
          </td>
        </tr>
        </tbody>
      </table>
    </div>
  );
}

export default WidgetLarge;