import axios from "axios";
import { error } from "console";
import React, { Component } from "react";
import "./UpdateIssued.css";

class AddStaff extends Component {
  constructor(props: any) {
    super(props);

    this.state = {
      name: "",
      mobile: "",
      email: "",
      Title: "",
      Topic: "",
      semester: "",
      Quantity: "",
    };
  }

  changeHandler = (e: { target: { name: any; value: any } }) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitHandler = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    axios
      .post("..................................", this.state)
      .then((resp: any) =>
        console.log(resp, "Issued books data Updated successfully")
      )
      .catch((error) => {
        console.log(error, "error in updating data of Issued books ");
      });
  };

  render() {
    return (
      <div className="center">
        <h1>Update Issued book User</h1>
        <form>
          <div className="inputbox">
            <input type="text" name="name" onChange={this.changeHandler} />
            <span>Name</span>
          </div>
          <div className="inputbox">
            <input type="text" name="mobile" onChange={this.changeHandler} />
            <span>Mobile</span>
          </div>
          <div className="inputbox">
            <input type="text" name="email" onChange={this.changeHandler} />
            <span>Email</span>
          </div>
          <div className="inputbox">
            <input type="text" name="Title" onChange={this.changeHandler} />
            <span>Title</span>
          </div>
          <div className="inputbox">
            <input type="text" name="Topic" onChange={this.changeHandler} />
            <span>Topic</span>
          </div>
          <div className="inputbox">
            <input
              type="text"
              name='"semester",'
              onChange={this.changeHandler}
            />
            <span>semester</span>
          </div>
          <div className="inputbox">
            <input
              type="text"
              name='"Quantity",'
              onChange={this.changeHandler}
            />
            <span>Quantity</span>
          </div>
          <div className="inputbox">
            <input type="button" value="submit" />
          </div>
        </form>
      </div>
    );
  }
}

export default AddStaff;
