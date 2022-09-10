import React from "react";
import styled from "../components/Styles";

interface ContentProps {
  children?: React.ReactNode;
}

const Box = styled("div", {
  alignSelf: "stretch",
  flexGrow: "1",
  display: "flex",
  justifyContent: "center",
  paddingTop: "$3",
  paddingBottom: "$7",
});

const View = styled("div", {
  width: "$content",

  p: {
    fontFamily: "$serif",
    marginTop: "1rem",
  },
  "h1, h2, h3": {
    fontFamily: "$sans",
    fontWeight: "500",
  },
  h2: {
    fontSize: "$2",
    marginTop: "$2",
    marginBottom: "$1",
  },
});

const Content: React.FC<ContentProps> = ({ children }) => {
  return (
    <Box>
      <View>{children}</View>
    </Box>
  );
};

export default Content;
