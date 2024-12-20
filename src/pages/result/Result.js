import { Box } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export const Result = () => {
  let id = 0;
  return (
    <Box
      p="100px 150px 150px"
      display={"grid"}
      gridTemplateColumns={"repeat(3, 1fr)"}
      columnGap={30}
      rowGap={30}
    >
      <Link to={`detail/${id}`}>
        <Box h={400} bgColor={"lightgray"}></Box>
      </Link>
      <Link to={`detail/${id}`}>
        <Box h={400} bgColor={"lightgray"}></Box>
      </Link>
      <Link to={`detail/${id}`}>
        <Box h={400} bgColor={"lightgray"}></Box>
      </Link>
      <Link to={`detail/${id}`}>
        <Box h={400} bgColor={"lightgray"}></Box>
      </Link>
      <Link to={`detail/${id}`}>
        <Box h={400} bgColor={"lightgray"}></Box>
      </Link>
      <Link to={`detail/${id}`}>
        <Box h={400} bgColor={"lightgray"}></Box>
      </Link>
      <Link to={`detail/${id}`}>
        <Box h={400} bgColor={"lightgray"}></Box>
      </Link>
    </Box>
  );
};
