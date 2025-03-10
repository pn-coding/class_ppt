import { Box, Img, Text } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { imgs } from "../../lib/IMG_URL";
import { useScroll } from "../../lib/useScroll";

export const ResultDetail = () => {
  useScroll();
  const { id } = useParams();
  return (
    <Box p={"50px"}>
      <Box>
        <Text
          fontSize="30px"
          fontWeight={700}
          letterSpacing={"-1px"}
          mb={"50px"}
        >
          PC Desgin
        </Text>
        <Img w="100%" src={imgs[id].pcImg} alt="img" />
      </Box>

      <Box w={"450px"} m={"0 auto"}>
        <Text
          fontSize="30px"
          fontWeight={700}
          letterSpacing={"-1px"}
          mt={"200px"}
          mb={"50px"}
        >
          Moblie Desgin
        </Text>
        <Box boxShadow="0 0 10px rgba(0,0,0,0.2)">
          <Img w="100%" src={imgs[id].moImg} alt="img" />
        </Box>
      </Box>
    </Box>
  );
};
