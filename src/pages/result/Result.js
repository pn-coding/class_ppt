import { Box, HStack, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { routes } from "../../routes";
import { imgs } from "../../lib/IMG_URL";
import { useScroll } from "../../lib/useScroll";
import { IoIosArrowBack } from "react-icons/io";

export const Result = () => {
  useScroll();
  return (
    <>
      <Box pos={"absolute"} top={5} left={50}>
        <Link to={routes.home}>
          <Box display={"flex"} alignItems={"center"} fontSize={"18px"}>
            <Text>
              <IoIosArrowBack />
            </Text>
            <Text mt={"4px"} ml={"10px"} fontWeight={700}>
              Home
            </Text>
          </Box>
        </Link>
      </Box>
      <Box
        p="100px 150px 150px"
        display={"grid"}
        gridTemplateColumns={"repeat(3, 1fr)"}
        columnGap={50}
        rowGap={100}
      >
        {imgs.map((data) => (
          <Link to={`detail/${data.id}`} key={data.id}>
            <Box bgColor={"lightgray"} boxShadow="0 0 10px rgba(0,0,0,0.2)">
              <img src={data.pcImg} style={{ width: "100%" }} alt="img" />
            </Box>
          </Link>
        ))}
      </Box>
    </>
  );
};
