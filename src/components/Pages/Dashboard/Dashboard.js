import React, { useEffect, useState } from 'react';

function Dashboard() {
    const [count, setCount] = useState([]);

    useEffect(() => {
        fetch('/employees/count')
            .then(response => response.json())
            .then(data => setCount(data.count))
            .catch(error => console.error('Error:', error));
    }, []);

    return (
        <div class="content-wrapper">
        <div class="content-header row">
        </div>
        <div class="content-body">
          <div class="row">
            <div class="col-xl-3 col-lg-6 col-12">
              <div class="card pull-up">
                <div class="card-content">
                  <div class="card-body">
                    <div class="media d-flex">
                      <div class="media-body text-left">
                        <h3 class="success">{count}</h3>
                        <h6>Employees</h6>
                      </div>
                      <div>
                        <i class="icon-user-follow success font-large-2 float-right"></i>
                      </div>
                    </div>
                    <div class="progress progress-sm mt-1 mb-0 box-shadow-2">
                      <div class="progress-bar bg-gradient-x-success" role="progressbar" style={{ width: '75%' }}
                      aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
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

export default Dashboard;