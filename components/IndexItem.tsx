import React from "react";
import Link from "next/link";
import styled from "../components/Styles";
import styles from "./IndexItem.module.css";

interface IndexItemProps {
  title: string;
  href: string;
  date: string;
  children: any;
  //children?: React.ReactNode;
}

const Box = styled("div", {
  display: "flex",
  flexDirection: "column",
  backgroundColor: "$whiteA12",
  padding: "$5",
  marginTop: "$4",
  border: "solid 1px $mauve6",
  transitionDuration: "0.5s",
  borderRadius: "0.317rem",
  boxShadow: "$lifted",

  "&:hover": {
    marginLeft: "-0.75rem",
    marginRight: "0.75rem",
    boxShadow: "$slim",
    backgroundColor: "$gray1",
    border: "solid 1px $mauve9",
  },
});

const Date = styled("div", {
  fontFamily: "$ui",
  fontSize: "$02",
  color: "$mauve10",
});

const Heading = styled("div", {
  fontFamily: "$sans",
  fontSize: "$3",
  weight: "500",
});

const Description = styled("div", {
  fontFamily: "$serif",
});

const IndexItem: React.FC<IndexItemProps> = ({
  title,
  href,
  date,
  children,
}) => {
  return (
    <Link href={"/essays/" + href}>
      <Box>
        <Date>{date}</Date>
        <Heading>{title}</Heading>
        <Description>{children}</Description>
      </Box>
    </Link>
  );
};

export default IndexItem;
