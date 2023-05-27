import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const User = ({ list }) => {
    const [dataList, setDataList]= useState([])
    const navigate = useNavigate();

        const nextToDetails = (list) => {
            localStorage.setItem("item", JSON.stringify(list));
            console.log("Working")
             setDataList(list)
            //  navigate("/details")
    };
    
  return (
    <tbody onClick={()=>nextToDetails(list)} key={list.id}>
      <tr>
        <td>
          <a>{list.id}</a>
        </td>
        <td>
          <img src={list.avatar} alt="" />{" "}
        </td>
        <td>{list.email}</td>
        <td>{list.first_name}</td>
        <td>{list.last_name}</td>
      </tr>
    </tbody>
  );
}

export default User