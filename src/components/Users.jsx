import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import User from "./User"
import Details from './Details';

const Users = ({dataList}) => {
    const [usersList, setUsersList] = useState([]);

    const baseUrl = import.meta.env.VITE_BASE_URL;

    useEffect(() => {
          fetch(`${baseUrl}/users`)
              .then(response => {
                  return response.json()
                 // console.log(response.json());
              })
              .then((data) => {
                  console.log(data.data)
                  setUsersList(data.data)
              })
            .catch((error) => console.log(error));
    }, []) 
    console.log(dataList)
  return (
    <div className="w-3/5 mx-auto">
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>Avatar</th>
            <th>Email</th>
            <th> First Name</th>
                      <th> Last Name</th>
                      <th>Updates Delete</th>
          </tr>
        </thead>
        {usersList.map((list) => (
        <User key={list.id} list={list} dataList={dataList}  />
        ))}
          </table>
          <Details dataList={ dataList} />
          {/* {usersList.id === storageValues.id && (<Details storageValues={storageValues } />) } */}
    </div>
  );
}

export default Users