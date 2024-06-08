import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'

const ViewAll = () => {
  const [data, changeData] = useState([])

  useEffect(() => {
    fetchData();
  }, [])

  const fetchData = () => {
    axios.get("https://jsonplaceholder.typicode.com/albums")
      .then(response => {
        changeData(response.data)
      })
      .catch()
      .finally()
  }

  return (
    <div>
      <Navbar />
      <table className="table">
        <thead>
          <tr>
            <th scope="col">userId</th>
            <th scope="col">id</th>
            <th scope="col">Title</th>
          </tr>
        </thead>
        <tbody>
          {data.map((value, index) => (
            <tr key={index}>
              <td>{value.userId}</td>
              <td>{value.id}</td>
              <td>{value.title}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ViewAll
