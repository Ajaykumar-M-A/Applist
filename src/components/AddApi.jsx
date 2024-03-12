    import React, { useState } from 'react'
import HeaderApi from './HeaderApi'
    
    const AddApi = () => {
        const[inputdata,setInputData]=useState(
            {
                "API": "",
                "Description": "",
                "Auth": "",
                "HTTPS": "",
                "Cors": "",
                "Link": "https://www.adoptapet.com/public/apis/pet_list.html",
                "Category": "Animals"
            }

            
        )
        const inputHandler=(event)=>{
             setInputData ({...inputdata,[event.target.name]:event.target.value})
        }
   const readValue=()=>{
    console.log(inputdata)
   }
      return (
        <div>
            <HeaderApi/>

     <div className="container">
        <div className="row">
            <div className="col col-12 col-sm-12 col-md-12 col-xl-12 col-xxl-12">
                <div className="row g-3">
                    <div className="col col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <label htmlFor="" className="form-label">Api name</label>
                        <input type="text" className="form-control" name='API' value={inputdata.API} onChange={inputHandler} />
                    </div>
                    <div className="col col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label htmlFor="" className="form-label">Description</label>
                        <input type="text" className="form-control" name='Description' value={inputdata.Description} onChange={inputHandler} />
                    </div>
                    <div className="col col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label htmlFor="" className="form-label">Http</label>
                        <input type="text" className="form-control" name='HTTPS' value={inputdata.HTTPS} onChange={inputHandler} />

                    </div>
                    <div className="col col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label htmlFor="" className="form-label">Auth</label>
                        <input type="text" className="form-control"name='Auth' value={inputdata.Auth} onChange={inputHandler} />
                    </div>
                    <div className="col col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label htmlFor="" className="form-label">Cors</label>
                        <input type="text" className="form-control" name='Cors' value={inputdata.Cors} onChange={inputHandler}/>
                    </div>
                    <div className="col col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label htmlFor="" className="form-label">Link</label>
                        <input type="text" className="form-control" name='Link' value={inputdata.Link} onChange={inputHandler} />
                    </div>
                    <div className="col col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label htmlFor="" className="form-label">Category</label>
                        <input type="text" className="form-control" name='Category' value={inputdata.Category} onChange={inputHandler} />
                        
                    </div>
                    <div className="col col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <button className="btn btn-success" onClick={readValue}>Add</button>
                    </div>
                </div>
            </div>
        </div>
     </div>


        </div>
      )
    }
    
    export default AddApi