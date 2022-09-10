import styled from "./Styles";

type HeadingProps = {
  isEssay: boolean;
  markdoc: any;
};

const Box = styled("div", {
  paddingTop: "$3",
  paddingBottom: "$1",
  backgroundColor: "$sand3",
  display: "flex",
  justifyContent: "center",
});

const Content = styled("div", {
  width: "$content",
});

const Title = styled("div", {
  fontSize: "$4",
  fontFamily: "$sans",
  fontWeight: "600",
  paddingBottom: "$5",
});

const Date = styled("div", {
  fontSize: "$02",
  fontFamily: "$ui",
  color: "$mauve11",
});

const Breadcrumbs = styled("div", {
  fontFamily: "$ui",
  fontSize: "$02",
  color: "$red11",
});

// TODO make breadcrumbs into a React FC

const Heading: React.FC<HeadingProps> = ({ isEssay, markdoc }) => {
  if (!isEssay) {
    return <></>;
  }
  return (
    <Box>
      <Content>
        <Date>{markdoc.date}</Date>
        <Title>{markdoc.title}</Title>
        <Breadcrumbs>{"essays / blockchain_basics"}</Breadcrumbs>
      </Content>
    </Box>
  );
};

export default Heading;
