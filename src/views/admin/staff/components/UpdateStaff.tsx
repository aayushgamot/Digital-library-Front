import axios from "axios";
import { error } from "console";
import React, { Component } from "react";
import "./UpdateStaff.css";

class UpdateStaff extends Component {
  constructor(props: any) {
    super(props);

    this.state = {
      name: "",
      surname: "",
      email: "",
      Role: "",
    };
  }

  changeHandler = (e: { target: { name: any; value: any } }) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitHandler = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    axios
      .post("..................................", this.state)
      .then((resp: any) => console.log(resp, "staff data updated successfully"))
      .catch((error) => {
        console.log(error, "error in updating data of staff");
      });
  };

  render() {
    return (
      <div className="center">
        <h1>Update Staff</h1>
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
            <input type="text" name="Role" onChange={this.changeHandler} />
            <span>Role</span>
          </div>
          <div className="inputbox">
            <input type="button" value="submit" />
          </div>
        </form>
      </div>
    );
  }
}

export default UpdateStaff;
