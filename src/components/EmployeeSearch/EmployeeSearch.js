import React, { Component } from 'react';
import EmployeeCard from "../EmployeeCard/EmployeeCard";
import "../EmployeeCard/employeeCard.css";
import employees from "../../employees.json";

class EmployeeSearch extends Component {
    // Setting the component's initial state


    state = {
        employees
    }

    render() {
        return (
            <div>
                {
                    this.state.employees.map(employee => (
                        <EmployeeCard id={employee.id} name={employee.name} image={employee.image} occupation={employee.occupation} location={employee.location} />
                    ))
                }
            </div >
        )
    }
}



export default EmployeeSearch;