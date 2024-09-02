import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Bonus() {
  const [firstPerson, setFirstPerson] = useState(null);

  useEffect(() => {
      fetchData();
  }, []);

  const fetchData = async () => {
      try {
          const res = await axios.get('https://randomuser.me/api/');
          setFirstPerson(res.data.results[0]);
          console.log(firstPerson);
      } catch (error) {
          console.error('Error retrieving data:', error);
          alert(error);
      }
  };

  return (

<div>
  <div className="content-wrapper">
  <div className="content-header row">
    <div className="content-header-left col-md-6 col-12 mb-2">
      <h3 className="content-header-title">Get The First Employee</h3>
      <div className="row breadcrumbs-top">
        <div className="breadcrumb-wrapper col-12">
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><a href="/">Home</a>
            </li>
            <li className="breadcrumb-item"><a href="list-employees">Employees</a>
            </li>
            <li className="breadcrumb-item active">Get The First Employee
            </li>
          </ol>
        </div>
      </div>
    </div>
    <div className="content-header-right col-md-6 col-12">
      <div className="btn-group float-md-right" role="group" aria-label="Button group with nested dropdown">
        <div className="dropdown-menu" aria-labelledby="btnGroupDrop1"><a className="dropdown-item" href="card-bootstrap.html">Cards</a><a className="dropdown-item"
          href="#">Buttons</a></div>
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
                <form className="form">
                  <div className="form-body">
                    <h4 className="form-section"><i className="ft-user"></i> Employee Info</h4>
                    {firstPerson && (
                    <div className="row">
                      <div className="col-md-4">
                        <div className="form-group">
                          <label for="projectinput1">Title</label>
                          <input type="text" className="form-control" placeholder="Title" value={firstPerson.name.title} readOnly/>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="form-group">
                          <label for="projectinput1">First Name</label>
                          <input type="text" className="form-control" placeholder="First Name" value={firstPerson.name.first} readOnly />
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="form-group">
                          <label for="projectinput1">Last Name</label>
                          <input type="text" className="form-control"  value={firstPerson.name.last} readOnly />
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="form-group">
                          <label for="projectinput1">Gender</label>
                          <input type="text" className="form-control"  value={firstPerson.gender} readOnly />
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="form-group">
                          <label for="projectinput1">Street Number</label>
                          <input type="text" className="form-control"  value={firstPerson.location.street.number} readOnly />
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="form-group">
                          <label for="projectinput1">Street Name</label>
                          <input type="text" className="form-control"  value={firstPerson.location.street.name} readOnly />
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="form-group">
                          <label for="projectinput1">City Name</label>
                          <input type="text" className="form-control"  value={firstPerson.location.city} readOnly />
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="form-group">
                          <label for="projectinput1">State</label>
                          <input type="text" className="form-control"  value={firstPerson.location.state} readOnly />
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="form-group">
                          <label for="projectinput1">State</label>
                          <input type="text" className="form-control"  value={firstPerson.location.country} readOnly />
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="form-group">
                          <label for="projectinput1">PostCode</label>
                          <input type="text" className="form-control"  value={firstPerson.location.postcode} readOnly />
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="form-group">
                          <label for="projectinput1">Email</label>
                          <input type="text" className="form-control"  value={firstPerson.email} readOnly />
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="form-group">
                          <label for="projectinput1">Phone</label>
                          <input type="text" className="form-control"  value={firstPerson.phone} readOnly />
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="form-group">
                          <label for="projectinput1">Date Of Birth</label>
                          <input type="text" className="form-control"  value={firstPerson.dob.date} readOnly />
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="form-group">
                          <label for="projectinput1">AGE</label>
                          <input type="text" className="form-control"  value={firstPerson.dob.age} readOnly />
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="form-group">
                          <label for="projectinput1">Cell</label>
                          <input type="text" className="form-control"  value={firstPerson.cell} readOnly />
                        </div>
                      </div>
                      <div className="col-md-4"></div>
                      <div className="col-md-4">
                        <div className="form-group">
                          <img src={firstPerson.picture.thumbnail} />
                          <img src={firstPerson.picture.large} />
                          <img src={firstPerson.picture.medium} />
                        </div>
                      </div>

                    </div>
                    )}
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
export default Bonus;