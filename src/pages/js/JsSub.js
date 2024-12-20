import { Box } from "@chakra-ui/react";
import { useState } from "react";
import { Sub } from "../../components/Sub";
import { JsCon } from "../../contents";

export const JsSub = () => {
  const [id, setId] = useState(1);

  const onClick = () => {
    setId(id + 1);
    if (id === JsCon.length - 1) setId(1);
  };

  window.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      setId(id + 1);
      if (id === JsCon.length - 1) setId(1);
    }
  });

  return (
    <Box onClick={onClick}>
      <Sub sub={JsCon[id]} />
    </Box>
  );
};
