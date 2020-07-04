import React, { Component } from "react";
import "../App.css";

class EmployeeList extends Component {
    render() {
        return (
            // returns table in JSX
            <table className="table">
                <thead className="employee-table">
                </thead>
                {/* map() method creates a new array populated with the results from data obtained */}
                <tbody className="employee-data">
                    {this.props.users.map((employee, i) => {
                        return (
                            <tr className="results" key={i}>
                                <td>
                                    {/* thumbnail image */}
                                    <img className="employee-image" src={employee.picture.thumbnail} aria-hidden alt="Image" />
                                </td>
                                {/* name - first and last */}
                                <td className="employee-name">
                                    {employee.name.first + " " + employee.name.last}
                                </td>
                                <td>
                                    {/* email */}
                                    {employee.email}
                                </td>
                                <td>
                                    {/* phone */}
                                    {employee.cell}
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        )
    }
}

export default EmployeeList;