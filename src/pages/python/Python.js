import { Box } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { Main } from "../../components/Main";
import { PythonCon } from "../../contents";
import { routes } from "../../routes";

export const Python = () => {
  return (
    <Box>
      <Link to={`${routes.pythonSub}`}>
        <Main title={PythonCon[0].mainTitle} lists={PythonCon[0].mainLists} />
      </Link>
    </Box>
  );
};
