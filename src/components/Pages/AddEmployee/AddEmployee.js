import React, { useEffect, useState } from 'react';
import { useNavigate ,useLocation  } from 'react-router-dom';
import axios from 'axios';

function AddEmployees() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [department, setDepartment] = useState('R&D');
  const navigate = useNavigate();
  const location = useLocation();
  const { employee } = location.state || {};



  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      let response;
      if (employee) {
        console.log('employee' +JSON.stringify(employee));
        response = await axios.put(`/employees/${employee.id}`, { name, email, department });
      } else {
        response = await axios.post('employees', { name,email,department});
      }
      
      console.log('Employee data saved:', response.data);
      // Reset form fields after successful submission
      setName('');
      setEmail('');
      setDepartment('');
      navigate('/list-employees');
    } catch (error) {
          console.error('Error saving employee data:', error);
    }
  };

  
  useEffect(() => {
    if (employee) {
      const { name, email, department } = employee;
      setName(name);
      setEmail(email);
      setDepartment(department);
    }
  }, [location.state]);

  const handleButtonClick = () =>{
    navigate('/list-employees');
  }


  return (

<div>
  <div className="content-wrapper">
  <div className="content-header row">
    <div className="content-header-left col-md-6 col-12 mb-2">
      <h3 className="content-header-title">Add New Employee</h3>
      <div className="row breadcrumbs-top">
        <div className="breadcrumb-wrapper col-12">
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><a href="/">Home</a>
            </li>
            <li className="breadcrumb-item"><a href="list-employees">Employees</a>
            </li>
            <li className="breadcrumb-item active">Add new Employee
            </li>
          </ol>
        </div>
      </div>
    </div>
    <div className="content-header-right col-md-6 col-12">
      <div className="btn-group float-md-right" role="group" aria-label="Button group with nested dropdown">
        <div className="dropdown-menu" aria-labelledby="btnGroupDrop1"><a className="dropdown-item" href="card-bootstrap.html">Cards</a><a className="dropdown-item"
          href="component-buttons-extended.html">Buttons</a></div>
      </div>
    </div>
  </div>
  <div className="content-body">
    <section id="basic-form-layouts">
      <div className="row match-height">
        <div className="col-md-12">
          <div className="card">
            <div className="card-header">
              <a className="heading-elements-toggle"><i className="la la-ellipsis-v font-medium-3"></i></a>
              <div className="heading-elements">
                <ul className="list-inline mb-0">
                  <li><a data-action="collapse"><i className="ft-minus"></i></a></li>
                  <li><a data-action="reload"><i className="ft-rotate-cw"></i></a></li>
                  <li><a data-action="expand"><i className="ft-maximize"></i></a></li>
                  <li><a data-action="close"><i className="ft-x"></i></a></li>
                </ul>
              </div>
            </div>
            <div className="card-content collapse show">
              <div className="card-body">
                <form className="form"  onSubmit={handleSubmit}>
                  <div className="form-body">
                    <h4 className="form-section"><i className="ft-user"></i> Employee Info</h4>
                    <div className="row">
                      <div className="col-md-12">
                        <div className="form-group">
                          <label for="projectinput1">Full Name</label>
                          <input type="text" className="form-control" placeholder="Full Name" value={name} onChange={(e) => setName(e.target.value)}/>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                          <label for="projectinput3">E-mail</label>
                          <input type="text" id="projectinput3" className="form-control" placeholder="E-mail" value={email} onChange={(e) => setEmail(e.target.value)}/>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label for="projectinput6">Departement</label>
                          <select className="form-control" value={department} onChange={(e)=> setDepartment(e.target.value)}>
                            <option value="R&D" selected="" disabled="">Research & Developement</option>
                            <option value="Insurance">Insurance</option>
                            <option value="HR">Human Ressources</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="form-actions">
                    <button type="button" className="btn btn-warning mr-1" onClick={handleButtonClick}>
                      <i className="ft-x"></i> Cancel
                    </button>
                    <button type="submit" className="btn btn-primary">
                      <i className="la la-check-square-o"></i> {employee ? 'Save' : 'Add'}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
  </div>
</div>
);
}
export default AddEmployees;