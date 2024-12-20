import { Box } from "@chakra-ui/react";
import { useState } from "react";
import { Sub } from "../../components/Sub";
import { Uxui_publish } from "../../contents";

export const Uxui_pubSub = () => {
  const [id, setId] = useState(1);

  const onClick = () => {
    setId(id + 1);
    if (id === Uxui_publish.length - 1) setId(1);
  };

  window.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      setId(id + 1);
      if (id === Uxui_publish.length - 1) setId(1);
    }
  });

  return (
    <Box onClick={onClick}>
      <Sub sub={Uxui_publish[id]} />
    </Box>
  );
};
