import styled from "./Styles";
import { useRouter } from "next/router";
import NextLink from "next/link";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";

/// Hook up menu links to Next
const StyledNavigationMenuLink = styled(NavigationMenu.Link, {
  padding: "$03",
  fontFamily: "$ui",
  fontWeight: "400",
  borderRadius: "0.4rem",
  transitionDuration: "0.5s",

  "&:hover": {
    backgroundColor: "$sand5",
  },

  "&[data-active]": { fontWeight: "600" },
});

type LinkProps = {
  href: string;
  children?: React.ReactNode;
};

const Link: React.FC<LinkProps> = ({ href, children }) => {
  const router = useRouter();
  let isActive = false;
  if (href === "/") {
    isActive = router.asPath === "/";
  } else {
    isActive = router.asPath.startsWith(href);
  }

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

  "@md": {
    paddingTop: "$4",
    paddingBottom: "$4",
  },

  variants: {
    essayView: {
      true: {
        backgroundColor: "$sand3",
      },
    },
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
type HeaderProps = {
  essayView: boolean;
};

const Header: React.FC<HeaderProps> = ({ essayView }) => {
  return (
    <Root essayView={essayView}>
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
