import { Box, Heading, Text } from "@chakra-ui/react";

export const Main = ({ title, lists }) => {
  return (
    <Box
      h="100vh"
      p="100px 150px 150px"
      textTransform={"uppercase"}
      display={"flex"}
      justifyContent={"space-between"}
    >
      <Heading
        w="50%"
        letterSpacing={"-2px"}
        fontWeight={"bold"}
        fontSize={"200px"}
        lineHeight={"180px"}
        background="linear-gradient(to right, #e55d87, #5fc3e4)"
        backgroundClip={"text"}
      >
        {title[0].mainTitle01} <br />
        {title[0].mainTitle02} <br />
        {title[0].mainTitle03} <br />
      </Heading>

      <Box
        opacity={0.8}
        mr="100px"
        display={"flex"}
        flexDirection="column"
        justifyContent={"flex-end"}
        pb="50px"
      >
        <Text color={"#333"} fontSize="35px" mb="20px">
          LIST
        </Text>
        <Box color={"#555"} letterSpacing="1px" fontSize={"22px"} mb="10px">
          {lists.map((list, index) => (
            <Text key={index}>{list}</Text>
          ))}
        </Box>
      </Box>
    </Box>
  );
};
