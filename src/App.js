import React,{ useRef }  from 'react';
import EmployeeList from './components/Pages/Dashboard/Dashboard';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import ListEmployees from './components/Pages/ListEmployees/ListEmployees';
import AddEmployees from './components/Pages/AddEmployee/AddEmployee';
import Dashboard from './components/Pages/Dashboard/Dashboard';
import Bonus from './components/Pages/Bonus/Bonus';

function App() {
 
    return (
      <Router>
            <Layout>
                <Routes> 
                  <Route path="/" element={ <Dashboard />} />
                  <Route path="/list-employees" element={ <ListEmployees />} />
                  <Route path="/add-employees" element={ <AddEmployees />} />
                  <Route path="/bonus" element={ <Bonus />} />
                </Routes>
            </Layout>
        </Router>
    );
}

export default App;