import React from "react";
import styled from "../components/Styles";

const Box = styled("div", {
  display: "flex",
  justifyContent: "center",
  backgroundColor: "$gray3",
  borderTop: "solid 1px $gray7",
});

const Content = styled("div", {
  width: "$content",
  paddingTop: "$5",
  paddingBottom: "$5",
  fontFamily: "$ui",
});

const Footer: React.FC = () => {
  return (
    <Box>
      <Content>© Atria Labs, 2022.</Content>
    </Box>
  );
};

export default Footer;
