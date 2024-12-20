import { Box } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { Main } from "../../components/Main";
import { CLanCon } from "../../contents";
import { routes } from "../../routes";

export const CLanguage = () => {
  return (
    <Box>
      <Link to={`${routes.cSub}`}>
        <Main title={CLanCon[0].mainTitle} lists={CLanCon[0].mainLists} />
      </Link>
    </Box>
  );
};
