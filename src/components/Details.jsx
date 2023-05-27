import React, { useState } from 'react'

const Details = ({dataList}) => {
    const storageItems = JSON.parse(localStorage.getItem("item"))
    const baseUrl = import.meta.env.VITE_BASE_URL; 
    const [storageValues , setStorageValues] = useState(storageItems)

    // const handleEdits = () => {
        
    // }

    const updateUser = (id) => {
        let item = { storageValues }
        console.log("Working")
        fetch(`${baseUrl}/${id}`, {
            method: "PUT",
            headers: {
                "Accept": "appliction/json",
                "Content-Type": "application/json"
            },
            body:JSON.stringify(item)
        }).then((result) => {
            return result.json().then(resp => {
               console.log(resp)
           })
        })
    }
    console.log(storageValues)

  return (
    <div className="w-3/5 mx-auto">
      <img src={storageValues.avatar} alt="" />
      <form action="">
        <input
          onChange={(e) => {
            setStorageValues(e.target.value);
          }}
          //   value={storageValues.email}
          defaultValue={storageValues.email}
          type="text"
        />
        <br />
        <input
          onChange={(e) => {
            setStorageValues(e.target.value);
          }}
          //   value={storageValues.first_name}
          defaultValue={storageValues.first_name}
          type="text"
        />{" "}
        <br />
        <input
          onChange={(e) => {
            setStorageValues(e.target.value);
          }}
          //   value={storageValues.last_name}
          defaultValue={storageValues.last_name}
          type="text"
        />{" "}
        <br />
        <button
          onClick={() => updateUser(storageValues.id)}
          className="p-2 bg-green-500 rounded-lg"
          type="submit"
        >
          Update
        </button>
        <button className="p-2 ml-1 bg-red-500 rounded-lg" type="submit">
          Delete
        </button>
      </form>
    </div>
  );
}

export default Details