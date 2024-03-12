import axios from 'axios'
import React, { useEffect, useState } from 'react'
import HeaderApi from './HeaderApi'

const ViewApi = () => {
    const[data,changeData]=useState([])
    const fetchData=()=>{
        axios.get("https://api.publicapis.org/entries").then(
            response=>{
                fetchData(changeData.data)
            }
        )
    }
    useEffect(()=>{fetchData()},[])
  return (
    <div>
        <HeaderApi/>

        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        <div className="col col-12 col-sm-12 col-md-12 col-xl-12 col-xxl-12">

                        <table class="table table-dark table-striped">
  
  <thead>
    <tr>
      <th scope="col">Api</th>
      <th scope="col">Description</th>
      <th scope="col">Auth</th>
      <th scope="col">Https</th>
      <th scope="col">cors</th>
      <th scope="col">Link</th>
      <th scope="col">Category</th>
    </tr>
  </thead>
  {data.map(
    (value,index)=>{
        return<tbody>
        <tr>
          <th scope="row">{value.Api}</th>
          <td>{value.Description}</td>
          <td>{value.Auth}</td>
          <td>{value.HTTPS}</td>
          <td>{value.cors}</td>
          <td>{value.Link}</td>
          <td>{value.Category}</td>
        </tr>
       
      </tbody>
    }
  )}
</table>
                            

                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ViewApi