import React from "react";
import "../App.css";

function Header(props) {
    return (
        // more JSX in header component
        <div>
            <div className="jumbotron jumbotron-fluid">
                <div className="header-container">
                    <h1 className="display-4">Employee Directory</h1>
                    <p className="header-desc">Search and View Employees</p>
                </div>
            </div>
            <form className="form-container">
                <div className="form-group">
                    <label>Search by Name:<br></br></label>
                    <input className="form-control" id="exampleFormControlInput1" onChange={(event) => { props.search(event.target.value) }} />
                </div>
                <div className="form-group">
                    <label>Search by Email:<br></br></label>
                    <input className="form-control" id="exampleFormControlInput1" onChange={(event) => { props.search(event.target.value) }} />
                </div>
                <div className="form-group">
                    <label>Search by Phone #:<br></br></label>
                    <input className="form-control" id="exampleFormControlInput1" onChange={(event) => { props.search(event.target.value) }} />
                </div>
            </form>
        </div>
    )
}

export default Header;