import React, {useEffect}from "react";
import { useSelector, useDispatch } from "react-redux";
import { historyAPICreator} from "../redux/actions/history";
import "../pages/profile.css";

const HistoryAdmin = (props) => {
  const dispatch = useDispatch();
  const {dataHistory} = useSelector(state => state.historyAPI)
  useEffect(() => {
    dispatch(historyAPICreator())
  }, [dispatch])
  return (
    <>
      <div className='headhistoryuser'>
        <h4>History</h4>
      </div>
      <div className='row-history'>
        <table className='table table-striped text-center'>
          <thead>
            <tr>
              <th style={{ width: "10%" }} scope='col'>
                No.
              </th>
              <th style={{ width: "30%" }} scope='col'>
                Titles
              </th>
              <th style={{ width: "30%" }} scope='col'>
                Dates
              </th>
              <th style={{ width: "30%" }} scope='col'>
                Names
              </th>
            </tr>
          </thead>
          <tbody>
            {dataHistory.map((item, index)=>{
              return (
                <tr key={index}>
                  <th scope='row'>{index+1}</th>
                  <td>{item.title}</td>
                  <td>{item.borrow_date.toString().slice(0,10)}</td>
                  <td>{item.fullname}</td>
            </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default HistoryAdmin;
