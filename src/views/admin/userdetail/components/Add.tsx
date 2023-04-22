import axios from "axios";
import { error } from "console";
import React, { Component } from "react";
import "./Add.css";

class Add extends Component {
  constructor(props: any) {
    super(props);

    this.state = {
      name: "",
      surname: "",
      email: "",
      mobile: "",
      gender: "",
      dob: "",
      address: "",
    };
  }

  changeHandler = (e: { target: { name: any; value: any } }) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitHandler = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    axios
      .post("..................................", this.state)
      .then((resp: any) => console.log(resp, "user data added successfully"))
      .catch((error) => {
        console.log(error, "error in posting data of user");
      });
  };

  render() {
    return (
      <div className="center">
        <h1>Add User</h1>
        <form>
          <div className="inputbox">
            <input type="text" name="name" onChange={this.changeHandler} />
            <span>Name</span>
          </div>
          <div className="inputbox">
            <input type="text" name="surname" onChange={this.changeHandler} />
            <span>Surname</span>
          </div>
          <div className="inputbox">
            <input type="text" name="email" onChange={this.changeHandler} />
            <span>Email</span>
          </div>
          <div className="inputbox">
            <input type="text" name="mobile" onChange={this.changeHandler} />
            <span>Mobile</span>
          </div>
          <div className="inputbox">
            <input type="text" name="gender" onChange={this.changeHandler} />
            <span>Gender</span>
          </div>
          <div className="inputbox">
            <input type="text" name='"dob",' onChange={this.changeHandler} />
            <span>Dob</span>
          </div>
          <div className="inputbox">
            <input
              type="text"
              name='"address",'
              onChange={this.changeHandler}
            />
            <span>Address</span>
          </div>
          <div className="inputbox">
            <input type="button" value="submit" />
          </div>
        </form>
      </div>
    );
  }
}

export default Add;
