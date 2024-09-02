import React, { useEffect, useState } from 'react';
import { useNavigate , Link  } from 'react-router-dom';
import axios from 'axios';
import './ListEmployees.css'

function ListEmployees() {
      const [employees, setEmployees] = useState([]);
      const navigate = useNavigate();

  
      useEffect(() => {
          fetch('/employees')
              .then(response => response.json())
              .then(data => setEmployees(data))
              .catch(error => console.error('Error:', error));
      }, []);

      const handleDelete = async (id) => {
        try {
          await axios.delete(`/employees/${id}`);
          console.log('Employee deleted');
          navigate('/');
        } catch (error) {
          console.error('Error deleting employee:', error);
        }
      };

      const handleEdit = (id) => {
        const employeeToEdit = employees.find((emp) => emp.id === id);
        console.log('employee' +JSON.stringify(employeeToEdit));
        navigate('/add-employees', { state: { employee: employeeToEdit } });
      };

      const handleButtonClick = () =>{
        navigate('/add-employees');
      }

      
  
return (

<div class="content-wrapper">
<div class="content-header row">
  <div class="content-header-left col-md-6 col-12 mb-2">
    <h3 class="content-header-title">List Of Employees</h3>
    <div class="row breadcrumbs-top">
      <div class="breadcrumb-wrapper col-12">
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><a href="/">Dashboard</a>
          </li>
          <li class="breadcrumb-item"><a href="/list-employees">Employees</a>
          </li>
          <li class="breadcrumb-item active">List Of Employees
          </li>
        </ol>
      </div>
    </div>
  </div>
  <div class="content-header-right col-md-6 col-12">
    <div class="btn-group float-md-right" role="group" aria-label="Button group with nested dropdown">
      <button class="btn btn-info round dropdown-toggle dropdown-menu-right box-shadow-2 px-2"
      type="button" data-toggle="dropdown" aria-haspopup="true" onClick={handleButtonClick}
      aria-expanded="false"><i class="ft-plus icon-left"></i> Add new Employee</button>
    </div>
  </div>
</div>
<div class="content-body">
  <div class="row">
    <div class="col-12">
      <div class="card">
        <div class="card-header">
          <h4 class="card-title">Employees</h4>
          <a class="heading-elements-toggle"><i class="la la-ellipsis-v font-medium-3"></i></a>
          <div class="heading-elements">
            <ul class="list-inline mb-0">
              <li><a data-action="collapse"><i class="ft-minus"></i></a></li>
              <li><a data-action="reload"><i class="ft-rotate-cw"></i></a></li>
              <li><a data-action="expand"><i class="ft-maximize"></i></a></li>
              <li><a data-action="close"><i class="ft-x"></i></a></li>
            </ul>
          </div>
        </div>
        <div class="card-content collapse show">
          <div class="card-body">
  
            <p>
              <span class="text-bold-600">NASCO</span> Employees</p>
            <div class="table-responsive">
              <table class="table">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Full Name</th>
                    <th>Email</th>
                    <th>Departement</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                {employees.map(emp => (
                  <tr>
                    <th scope="row" key={emp.id}>{emp.id}</th>
                    <td>{emp.name}</td>
                    <td>{emp.email}</td>
                    <td>{emp.department}</td>
                    <td>
                      <button class="btn btn-primary icon" onClick={()=>handleEdit(emp.id)}><i className='ft-edit'></i></button> 
                      <button class="btn btn-danger icon" onClick={()=>handleDelete(emp.id)}><i className='ft-trash'></i></button>
                    </td>
                  </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</div>

  );
}


export default ListEmployees;