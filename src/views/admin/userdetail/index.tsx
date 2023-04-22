import { useState, useEffect } from "react";
import { Box } from "@chakra-ui/react";
import "./index.css";
import axios from "axios";
import moment from "moment";
import { Button } from "@chakra-ui/react";
import { Link, Route } from "react-router-dom";
import Add from "./components/Add";

// Assets
const Overview = () => {
  // const [ setState ] = useState(0);
  //  this.setState = {
  //       posts: [],
  //     };
  const [myData, setMyData] = useState([]);
  console.log(myData, "myData");
  useEffect(() => {
    axios
      .get("http://localhost:3030/find-allusers")
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
      .delete(`http://localhost:3030/delete-user/${id}`)
      .then((response) => {
        axios
          .get("http://localhost:3030/find-allusers")
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

  const handleChange = (e: any) => {
    <Link to="/Add"></Link>;
    // <Route component={Add} />;
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
          onChange={(e: any) => handleChange(e)}
        >
          Add
        </Button>
        <table>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Surname</th>
            <th>Email</th>
            <th>Mobile</th>
            <th>Gender</th>
            <th>DOB</th>
            <th>Address</th>
            <th>Status</th>
          </tr>
          {myData.map((val) => {
            return (
              <tr>
                <td>{val.id}</td>
                <td>{val.name}</td>
                <td>{val.surname}</td>
                <td>{val.email}</td>
                <td>{val.mobile}</td>
                <td>{val.gender}</td>
                <td>{moment(val.dob).utc().format("ll")}</td>
                <td>{val.address}</td>
                <td>
                  {" "}
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
};
export default Overview;
