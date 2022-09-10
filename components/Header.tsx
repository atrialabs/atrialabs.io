import styled from "./Styles";
import { useRouter } from "next/router";
import NextLink from "next/link";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";

/// Hook up menu links to Next
const StyledNavigationMenuLink = styled(NavigationMenu.Link, {
  padding: "$03",
  fontFamily: "$ui",
  fontWeight: "400",
  textDecoration: "none",
  borderRadius: "0.4rem",

  "&:hover": {
    backgroundColor: "$indigo4",
  },

  "&[data-active]": { fontWeight: "600" },
});

type LinkProps = {
  href: string;
  children?: React.ReactNode;
};

const Link: React.FC<LinkProps> = ({ href, children }) => {
  const router = useRouter();
  const isActive = router.asPath === href;

  return (
    <NextLink href={href} passHref>
      <StyledNavigationMenuLink active={isActive}>
        {children}
      </StyledNavigationMenuLink>
    </NextLink>
  );
};

/// Layout
const Root = styled(NavigationMenu.Root, {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  paddingTop: "$3",
  paddingBottom: "$3",
  backgroundColor: "$indigo4",

  "@md": {
    backgroundColor: "$indigo3",
    paddingTop: "$4",
    paddingBottom: "$4",
  },
});

const Box = styled("div", {
  width: "$content",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "$1",

  "@md": {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});

const Menu = styled(NavigationMenu.List, {
  display: "flex",
  gap: "$1",
  listStyle: "none",
  paddingInlineStart: "0",

  "@md": {
    gap: "$1",
  },
});

const Item = styled(NavigationMenu.Item, {});

const BrandingBox = styled("div", {
  display: "flex",
  alignItems: "center",
  gap: "$03",
});

const Branding = styled("span", {
  fontFamily: "$branding",
  fontSize: "$2",
  textTransform: "uppercase",
});

const LogoBox = styled("div", {
  width: "$logo",
});

const Logo: React.FC = () => {
  return (
    <svg viewBox="0 0 100 100">
      <polyline points="0,12 0,100 89,100 68,80 20,80 20,32" fill="#ba4666" />
      <polyline fill="#ba4666" points="0,0 100,0 100,100 80,80 80,20 20,20" />
    </svg>
  );
};

/// Header
const Header: React.FC = () => {
  return (
    <Root>
      <Box>
        <BrandingBox>
          <LogoBox>
            <Logo />
          </LogoBox>
          <Branding>Atria Labs</Branding>
        </BrandingBox>
        <Menu>
          <Item>
            <Link href="/">Home</Link>
          </Item>
          <Item>
            <Link href="/essays">Essays</Link>
          </Item>
          <Item>
            <Link href="/contact">Contact</Link>
          </Item>
        </Menu>
      </Box>
    </Root>
  );
};

export default Header;

/*
import React from "react";
import Link from "next/link";
import styles from "./Header.module.css";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import styled from "./Styles";

const NavList = styled(NavigationMenu.List, {
  backgroundColor: "$indigo4",
});

const Header: React.FC = () => {
  return (
    <div className={styles.box}>
      <div className={styles.content}>
        <NavigationMenu.Root>
          <NavList>
            <NavigationMenu.Item>One</NavigationMenu.Item>
            <NavigationMenu.Item>Two</NavigationMenu.Item>
          </NavList>
        </NavigationMenu.Root>
      </div>
    </div>
  );
};
*/

/*
<div className={styles.spacer}>
          <Link href="/">
            <a className={styles.brandingbox}>
              <Logo />
              <span className={styles.branding}>Atria Labs</span>
            </a>
          </Link>
          <div className={styles.menu}>
            <Link href="/essays">
              <a className={styles.menuItem}>Essays</a>
            </Link>
            <Link href="/contact">
              <a className={styles.menuItem}>Contact</a>
            </Link>
          </div>
        </div>
    */
