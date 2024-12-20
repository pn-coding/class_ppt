import { Box } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { Main } from "../../components/Main";
import { Uxui_publish } from "../../contents";
import { routes } from "../../routes";

export const Uxui_pub = () => {
  return (
    <Box>
      <Link to={`${routes.uxuiSub}`}>
        <Main
          title={Uxui_publish[0].mainTitle}
          lists={Uxui_publish[0].mainLists}
        />
      </Link>
    </Box>
  );
};
