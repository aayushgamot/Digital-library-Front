import axios from "axios";
import { error } from "console";
import React, { Component } from "react";
import "./UpdateBooks.css";

class AddStaff extends Component {
  constructor(props: any) {
    super(props);

    this.state = {
      Title: "",
      Author: "",
      Topic: "",
      Quantity: "",
      semester: "",
    };
  }

  changeHandler = (e: { target: { name: any; value: any } }) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitHandler = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    axios
      .post("..................................", this.state)
      .then((resp: any) => console.log(resp, "books data Updated successfully"))
      .catch((error) => {
        console.log(error, "error in Updating data of books ");
      });
  };

  render() {
    return (
      <div className="center">
        <h1>Update Books </h1>
        <form>
          <div className="inputbox">
            <input type="text" name="Title" onChange={this.changeHandler} />
            <span>Title</span>
          </div>
          <div className="inputbox">
            <input type="text" name="Author" onChange={this.changeHandler} />
            <span>Author</span>
          </div>
          <div className="inputbox">
            <input type="text" name="Topic" onChange={this.changeHandler} />
            <span>Topic</span>
          </div>
          <div className="inputbox">
            <input type="text" name="Quantity" onChange={this.changeHandler} />
            <span>Quantity</span>
          </div>
          <div className="inputbox">
            <input type="text" name="semester" onChange={this.changeHandler} />
            <span>semester</span>
          </div>
          <div className="inputbox">
            <input type="file" name='"image",' onChange={this.changeHandler} />
            <span>Image</span>
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
