import React, { useState, useEffect } from "react";
import { Box, Grid, Button } from "@chakra-ui/react";
import "./index.css";
import axios from "axios";
import { SearchIcon } from "@chakra-ui/icons";
import {
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  useColorModeValue,
} from "@chakra-ui/react";

export default function Marketplace(props: any) {
  // Chakra Color Mode
  const [myData1, setMyData1] = useState([]);
  console.log(setMyData1, "myData");
  useEffect(() => {
    axios
      .post("http://localhost:3030/find-books", {})
      .then((response) => {
        console.log(response.data.result);
        setMyData1(response.data.result);
        // this.setState({ posts: response.data });
      })
      .catch((error) => {
        console.log(error, "error in fatching data");
      });
  }, []);

  const deleteHandler = (id: any) => {
    axios
      .delete(`http://localhost:3030/delete-books/${id}`)
      .then((response) => {
        axios
          .get("http://localhost:3030/find-books")
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

  const { variant, background, children, placeholder, borderRadius, ...rest } =
    props;
  // Chakra Color Mode
  const searchIconColor = useColorModeValue("gray.700", "white");
  const inputBg = useColorModeValue("secondaryGray.300", "navy.900");
  const inputText = useColorModeValue("gray.700", "gray.100");
  const [items] = useState([]);

  // Note: the empty deps array [] means
  // this useEffect will run once
  // similar to componentDidMount()
  const [myData, setMyData] = useState([]);
  const [searchVal, setSearchVal] = useState("");

  console.log(myData, "myData");

  const handleChange = (e: any) => {
    setSearchVal(e.target.value);
    axios
      .post("http://localhost:3030/find-books", {
        Title: e.target.value,
      })
      .then((response) => {
        console.log(response.data.result);
        setMyData1(response.data.result);
        // this.setState({ posts: response.data });
      })
      .catch((error) => {
        console.log(error, "error in fatching data");
      });
  };

  console.log(searchVal);

  return (
    <Box pt={{ base: "180px", md: "80px", xl: "80px" }}>
      <div className="App">
        {
          <InputGroup w={{ base: "100%", md: "200px" }} {...rest}>
            <InputLeftElement
              children={
                <IconButton
                  aria-label="search"
                  bg="inherit"
                  borderRadius="inherit"
                  _active={{
                    bg: "inherit",
                    transform: "none",
                    borderColor: "#11047A",
                  }}
                  _focus={{
                    boxShadow: "none",
                  }}
                  icon={
                    <SearchIcon color={searchIconColor} w="20px" h="20px" />
                  }
                />
              }
            />
            if (){" "}
            {
              //  <div>Error: {"error"}</div>
            }{" "}
            else if (){" "}
            {
              //  <div>Loading...</div>
            }{" "}
            else{" "}
            {
              <ul>
                {items.map((item) => (
                  <li key={item.id}>{item.Title}</li>
                ))}
              </ul>
            }
            <Input
              variant="search"
              // isSearchable={true}
              // options={aquaticCreatures}
              fontSize="sm"
              bg={background ? background : inputBg}
              color={inputText}
              value={searchVal}
              onChange={(e: any) => handleChange(e)}
              fontWeight="500"
              _placeholder={{ color: "gray.400", fontSize: "14px" }}
              borderRadius={borderRadius ? borderRadius : "30px"}
              placeholder={placeholder ? placeholder : "Search Book Title...."}
            />
          </InputGroup>
        }
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
            <th>Title</th>
            <th>Author</th>
            <th>Topic</th>
            <th>Quantity</th>
            <th>Semester</th>
            <th>Image</th>
            <th>Status</th>
          </tr>
          {myData1.map((val) => {
            return (
              <tr>
                <td>{val.id}</td>
                <td>{val.Title}</td>
                <td>{val.Author}</td>
                <td>{val.Topic}</td>
                <td>{val.Quantity}</td>
                <td>{val.semester}</td>
                <td>
                  <img
                    src={`http://localhost:3030/${val.image}`}
                    alt=""
                    height="60px"
                    width="80px"
                  />
                </td>
                <td>
                  <Button
                    bg="blue"
                    fontSize="sm"
                    variant="brand"
                    fontWeight="500"
                    w="25%"
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
                    w="25%"
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
