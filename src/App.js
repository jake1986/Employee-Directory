import React from 'react';
import Header from "./components/Header";
import EmployeeSearch from "./components/EmployeeSearch/EmployeeSearch";
import "./components/EmployeeSearch/employeeSearch.css";
import "./components/EmployeeCard/employeeCard.css";


function App() {

  return (
    <div>
      <Header />
      <EmployeeSearch />
    </div >
  )
}




export default App;
