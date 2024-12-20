import { Box, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { routes } from "../routes";

export const Home = () => {
  return (
    <VStack fontSize={"30px"} h="100vh" p="100px" spacing={10}>
      <Box>
        <Link to={routes.publish}>Publish</Link>
      </Box>
      <Box>
        <Link to={routes.front}>Front end</Link>
      </Box>
      <Box>
        <Link to={routes.js}>Java Script</Link>
      </Box>
      <Box>
        <Link to={routes.react}>React</Link>
      </Box>
      <Box>
        <Link to={routes.java}>Java</Link>
      </Box>
      <Box>
        <Link to={routes.c}>C Language</Link>
      </Box>
      <Box>
        <Link to={routes.python}>Python</Link>
      </Box>
    </VStack>
  );
};
