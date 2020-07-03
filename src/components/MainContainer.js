import React from "react";
import Header from "./Header";
import EmployeeList from "./EmployeeList";
import getUsers from "../utils/API";

// container fetches data and renders cooresponding subcomponent
class MainContainer extends React.Component {
    state = {
        users: [],
        filteredUsers: []
    }

    // component mounts when it is created and first inserted into the DOM 
    // i.e when it is rendered for the first time
    componentDidMount() {
        getUsers().then((res) => {
            this.setState({ users: res.data.results, filteredUsers: res.data.results })
        })
    }

    // defining function to search employees by checking whether or not property searched for is
    // included in the array of data
    search = (term) => {
        const filteredEmployees = this.state.users.filter((employee) => {
            if (employee.cell.includes(term) || (employee.name.first + " " + employee.name.last).includes(term) || employee.email.includes(term)) {
                return employee
            }
        });
        // passing an object to setState(). 
        // the object contains the part of the state we want to update 
        // which = the value of filteredUsers
        this.setState({ filteredUsers: filteredEmployees });
    }
    // renders components to the dom using props
    render() {
        return (
            <div>
                <Header search={this.search} />
                <EmployeeList users={this.state.filteredUsers} />
            </div>
        )
    }
}

export default MainContainer;