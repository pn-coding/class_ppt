import { Box } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { JsCon } from "../../contents";
import { routes } from "../../routes";
import { Main } from "../../components/Main";

export const Js = () => {
  return (
    <Box>
      <Box>
        <Link to={`${routes.jsSub}`}>
          <Main title={JsCon[0].mainTitle} lists={JsCon[0].mainLists} />
        </Link>
      </Box>
    </Box>
  );
};
