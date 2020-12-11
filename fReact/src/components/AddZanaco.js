import React, { useState } from "react";
import ZanacDataService from "../services/ZanacoService";

const AddZanac = () => {
  const initialZanacotate = {
    id: null,    name1: "",    dept: "",
    post: "", salary: "",
    published: false
  };
  
  const [Zanac, setZanac] = useState(initialZanacotate);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = event => {
    const { name, value } = event.target;
    setZanac({ ...Zanac, [name]: value });
  };

  const saveZanac = () => {
    var data = {
      name1: Zanac.name1,
      dept: Zanac.dept,
      post: Zanac.post,
      salary: Zanac.salary
    };

    ZanacDataService.create(data)
      .then(response => {
        setZanac({
          id: response.data.id,
          name1: response.data.name1,
          dept: response.data.dept,
          post: response.data.post,
          salary: response.data.salary,
          published: response.data.published
        });
        setSubmitted(true);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  const newZanac = () => {
    setZanac(initialZanacotate);
    setSubmitted(false);
  };

  return (
    <div className="submit-form">
      {submitted ? (
        <div>
          <h4>You submitted successfully!</h4>
          <button className="btn btn-success" onClick={newZanac}>
            Add
          </button>
        </div>
      ) : (
          <div>
            <div className="form-group"> <label htmlFor="name1">Name1</label>
              <input type="text" className="form-control" id="name1"
                required value={Zanac.name1}
                onChange={handleInputChange} name="name1" />
            </div>

            <div className="form-group"><label htmlFor="dept">Dept</label>       
              <input  type="text" className="form-control" id="dept" required
                value={Zanac.dept} onChange={handleInputChange} name="dept" />
            </div>

            <div className="form-group"><label htmlFor="post">Post</label>            
              <input  type="text" className="form-control" id="post" required
                value={Zanac.post} onChange={handleInputChange} name="post" />
            </div>


            <div className="form-group"><label htmlFor="salary">salary</label>
            <input type="text" className="form-control" id="salary" required
                value={Zanac.salary} onChange={handleInputChange} name="salary" />
            </div>


            <button onClick={saveZanac} className="btn btn-success">
              Submit
          </button>
          </div>
        )}
    </div>
  );
};

export default AddZanac;