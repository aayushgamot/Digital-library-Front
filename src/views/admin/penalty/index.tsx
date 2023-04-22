import React, { useState, useEffect } from "react";
import { Box, Grid, Button } from "@chakra-ui/react";
import "./index.css";
import axios from "axios";
import { SearchBar } from "components/navbar/searchBar/SearchBar";

export default function Marketplace() {
  // Chakra Color Mode
  const [myData, setMyData] = useState([]);
  console.log(myData, "myData");
  useEffect(() => {
    axios
      .get("http://localhost:3030/penalty-issued-books")
      .then((response) => {
        // console.log(response.data.result);
        setMyData(response?.data?.result);
        // this.setState({ posts: response.data });
      })
      .catch((error) => {
        console.log(error, "error in fatching data");
      });
  }, []);

  return (
    <Box pt={{ base: "180px", md: "80px", xl: "80px" }}>
      <div className="App">
        <table>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Title</th>
            <th>Topic</th>
            <th>Quantity</th>
            <th>Return Date</th>
            <th>Late Days</th>
            <th>Panalty</th>
            <th>Status</th>
          </tr>
          {myData?.map((val) => {
            return (
              <tr>
                <td>{val?.id}</td>
                <td>{val?.name}</td>
                <td>{val?.email}</td>
                <td>{val?.Title}</td>
                <td>{val?.Topic}</td>
                <td>{val?.Quantity}</td>
                <td>{val?.return_Date}</td>
                <td>{val?.obj}</td>
                <td>{val?.panalty}</td>
                <td>
                  <Button
                    bg="red"
                    fontSize="sm"
                    variant="brand"
                    fontWeight="500"
                    w="60%"
                    h="50"
                    mb="24px"
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            );
          })}
        </table>
      </div>
    </Box>
  );
}
