import React from "react";
import Link from "next/link";
import styles from "./IndexItem.module.css";

interface IndexItemProps {
  title: string;
  href: string;
  date: string;
  children: any;
  //children?: React.ReactNode;
}

const IndexItem: React.FC<IndexItemProps> = ({
  title,
  href,
  date,
  children,
}) => {
  return (
    <Link href={"/essays/" + href}>
      <div className={styles.box}>
        <div className={styles.date}>{date}</div>
        <div className={styles.title}>{title}</div>
        <div className={styles.description}>{children}</div>
      </div>
    </Link>
  );
};

export default IndexItem;
