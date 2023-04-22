import React, { useState, useEffect } from "react";
import { Box, Grid, Button } from "@chakra-ui/react";
import "./index.css";
import axios from "axios";

export default function Settings() {
  const [myData, setMyData] = useState([]);
  console.log(myData, "myData");
  useEffect(() => {
    axios
      .get("http://localhost:3030/find-issued-books")
      .then((response) => {
        console.log(response.data.result);
        setMyData(response.data.result);
        // this.setState({ posts: response.data });
      })
      .catch((error) => {
        console.log(error, "error in fatching data");
      });
  }, []);

  const deleteHandler = (id: any) => {
    axios
      .delete(`http://localhost:3030/delete-issued-user/${id}`)
      .then((response) => {
        axios
          .get("http://localhost:3030/find-issued-books")
          .then((response) => {
            console.log(response.data.result);
            setMyData(response.data.result);
            // this.setState({ posts: response.data });
          })
          .catch((error) => {
            console.log(error, "error in fatching data");
          });
        console.log("data deleted ....", id);
      })
      .catch((error) => {
        console.log(error, "error in Deleteing data");
      });
  };

  return (
    <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
      <div className="App">
        <Button
          bg="green"
          fontSize="sm"
          variant="brand"
          fontWeight="500"
          w="15%"
          h="50"
          mb="24px"
        >
          Add
        </Button>
        <table>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Title</th>
            <th>Topic</th>
            <th>Semester</th>
            <th>Quantity</th>
            <th>I D</th>
            <th>R D</th>
            <th>Status</th>
          </tr>
          {myData.map((val) => {
            return (
              <tr>
                <td>{val.id}</td>
                <td>{val.name}</td>
                <td>{val.email}</td>
                <td>{val.Title}</td>
                <td>{val.Topic}</td>
                <td>{val.semester}</td>
                <td>{val.Quantity}</td>
                <td>{val.issued_Date}</td>
                <td>{val.return_Date}</td>
                <td>
                  <Button
                    bg="blue"
                    fontSize="sm"
                    variant="brand"
                    fontWeight="500"
                    w="30%"
                    h="50"
                    mb="24px"
                  >
                    Update
                  </Button>
                  &nbsp;&nbsp;
                  <Button
                    bg="red"
                    fontSize="sm"
                    variant="brand"
                    fontWeight="500"
                    w="30%"
                    h="50"
                    mb="24px"
                    onClick={() => deleteHandler(val.id)}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            );
          })}
          &nbsp;&nbsp;&nbsp;
        </table>
      </div>
    </Box>
  );
}
