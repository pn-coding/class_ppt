import { Box } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { Main } from "../../components/Main";
import { frontCon } from "../../contents";
import { routes } from "../../routes";

export const Front = () => {
  return (
    <Box>
      <Link to={`${routes.frontSub}`}>
        <Main title={frontCon[0].mainTitle} lists={frontCon[0].mainLists} />
      </Link>
    </Box>
  );
};
