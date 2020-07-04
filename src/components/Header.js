import React from "react";
import "../App.css";

function Header(props) {
    return (
        // more JSX in header component
        <div>
            <div className="jumbotron jumbotron-fluid">
                <div className="header-container">
                    <h1 className="display">Random Employee Directory</h1>
                    <p className="header">Employee Search</p>
                </div>
            </div>
            <form className="form-container">
                <div className="form-group">
                    <label>Search by Name:<br></br></label>
                    <input className="form-control" id="formControlInput1" onChange={(event) => { props.search(event.target.value) }} />
                </div>
                <div className="form-group">
                    <label>Search by Email:<br></br></label>
                    <input className="form-control" id="formControlInput1" onChange={(event) => { props.search(event.target.value) }} />
                </div>
                <div className="form-group">
                    <label>Search by Phone Number:<br></br></label>
                    <input className="form-control" id="formControlInput1" onChange={(event) => { props.search(event.target.value) }} />
                </div>
            </form>
        </div>
    )
}

export default Header;