import { Box } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { PubCon } from "../../contents";
import { routes } from "../../routes";
import { Main } from "../../components/Main";

export const Publish = () => {
  return (
    <Box>
      <Box>
        <Link to={`${routes.publishSub}`}>
          <Main title={PubCon[0].mainTitle} lists={PubCon[0].mainLists} />
        </Link>
      </Box>
    </Box>
  );
};
