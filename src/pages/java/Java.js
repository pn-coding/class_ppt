import { Box } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { Main } from "../../components/Main";
import { javaCon } from "../../contents";
import { routes } from "../../routes";

export const Java = () => {
  return (
    <Box>
      <Link to={`${routes.javaSub}`}>
        <Main title={javaCon[0].mainTitle} lists={javaCon[0].mainLists} />
      </Link>
    </Box>
  );
};
