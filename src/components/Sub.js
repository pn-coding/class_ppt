import { Box, Heading, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { routes } from "../routes";

export const Sub = ({ sub }) => {
  return (
    <Box
      h="150vh"
      p="80px"
      display={"flex"}
      justifyContent={"space-between"}
      position="relative"
    >
      <Box>
        <Text fontSize="80px">{sub.id}</Text>
        <Heading fontWeight={600} fontSize="110px" color={"rgb(59, 17, 145)"}>
          {sub.subTitle}
        </Heading>
      </Box>

      <Box w="50%" pt="30px">
        <Box fontSize={"36px"} fontWeight="600" mb="40px">
          {sub.items.map((con, index) => (
            <Box mb="30px" key={index}>
              <Text as={"li"}>{con.title}</Text>
              <Text
                fontWeight={300}
                // opacity={0.7}
                color="black"
                p="5px 40px 0"
                fontSize={"30px"}
                lineHeight={"1.6em"}
              >
                {con.desc}
              </Text>
            </Box>
          ))}
        </Box>
      </Box>
      <Text
        fontWeight={100}
        color="gray"
        fontSize={"14px"}
        position="absolute"
        bottom="50px"
        r="80px"
      >
        <Link to={routes.home}>
          &copy; {new Date().getFullYear()} PNcoding.
        </Link>
      </Text>
    </Box>
  );
};
