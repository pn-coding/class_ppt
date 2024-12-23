import { Box } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { routes } from "../../routes";

export const Result = () => {
  let id = 0;
  const IMG_URL = process.env.PUBLIC_URL;
  return (
    <>
      <Box pos={"absolute"} top={5} left={50}>
        <Link to={routes.home}>Home</Link>
      </Box>
      <Box
        p="100px 150px 150px"
        display={"grid"}
        gridTemplateColumns={"repeat(3, 1fr)"}
        columnGap={50}
        rowGap={100}
      >
        <Link to={`detail/${id}`}>
          <Box bgColor={"lightgray"} boxShadow="0 0 10px rgba(0,0,0,0.2)">
            <img src={`${IMG_URL}/img/seta_pc.jpg`} style={{ width: "100%" }} />
          </Box>
        </Link>
        <Link to={`detail/${id}`}>
          <Box bgColor={"lightgray"} boxShadow="0 0 10px rgba(0,0,0,0.2)">
            <img
              src={`${IMG_URL}/img/nonfiction_pc.jpg`}
              style={{ width: "100%" }}
            />
          </Box>
        </Link>
        <Link to={`detail/${id}`}>
          <Box bgColor={"lightgray"} boxShadow="0 0 10px rgba(0,0,0,0.2)">
            <img src={`${IMG_URL}/img/LIG_pc.jpg`} style={{ width: "100%" }} />
          </Box>
        </Link>
        <Link to={`detail/${id}`}>
          <Box bgColor={"lightgray"} boxShadow="0 0 10px rgba(0,0,0,0.2)">
            <img src={`${IMG_URL}/img/cup_pc.jpg`} style={{ width: "100%" }} />
          </Box>
        </Link>
        <Link to={`detail/${id}`}>
          <Box bgColor={"lightgray"} boxShadow="0 0 10px rgba(0,0,0,0.2)">
            <img src={`${IMG_URL}/img/st.jpg`} style={{ width: "100%" }} />
          </Box>
        </Link>
        <Link to={`detail/${id}`}>
          <Box bgColor={"lightgray"} boxShadow="0 0 10px rgba(0,0,0,0.2)">
            <img src={`${IMG_URL}/img/apt.jpg`} style={{ width: "100%" }} />
          </Box>
        </Link>
      </Box>
    </>
  );
};
