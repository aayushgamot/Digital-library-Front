import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  useColorModeValue,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
export function SearchBar(props: {
  variant?: string;
  background?: string;
  children?: JSX.Element;
  placeholder?: string;
  borderRadius?: string | number;
  [x: string]: any;
}) {
  // Pass the computed styles into the `__css` prop
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
        setMyData(response.data.result);
        // this.setState({ posts: response.data });
      })
      .catch((error) => {
        console.log(error, "error in fatching data");
      });
  };

  console.log(searchVal);

  return (
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
            icon={<SearchIcon color={searchIconColor} w="20px" h="20px" />}
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
  );
}
