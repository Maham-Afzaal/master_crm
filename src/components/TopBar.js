import React, { useState } from "react";
import { AppBar, Button, Container, Box, IconButton, Typography, Link } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import masterImg from "../assests/masterCrm.svg";
import Sidebar from "./SideBar";
import { Link as RouterLink } from "react-router-dom"; // Import Link from react-router-dom
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Slide from "@mui/material/Slide";

const navItems = [
  { label: "Home", link: "/" },
  { label: "Products", link: "/products" },
  { label: "Platform", link: "/platform" },
  { label: "Partners", link: "/partners" },
  { label: "Resources", link: "/resources" },
  { label: "Pricing", link: "/pricing" },
  { label: "Company", link: "/company" },
];

function HideOnScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

const TopBar = (props) => {
  const theme = useTheme();
  const isTablet = useMediaQuery(theme.breakpoints.down("md")); // md is 900px by default

  const [drawerOpen, setDrawerOpen] = useState(false);

  const NavComponent = ({ label = "", link = "" }) => (
    <Typography
    variant="p"
    className="poppins-font"
    component={RouterLink}
      to={link}
      //   onClick={() => navigate(link)}
      sx={{
        textDecoration: "none",
        px: { md: 1, lg: 2 },
        "&:hover": {
          cursor: "pointer",
        },
        fontWeight: "500", color: "#2C2C2C", lineHeight: "19px" 
      }}
      color={"secondary"}
    >
              {label}
    </Typography>
  );

  return (
    <Box>
      <HideOnScroll {...props}>
      <AppBar elevation={1} sx={{ background: "#FFFFFF" }}>
        <Container>
          <Box
            display={"flex"}
            justifyContent={"space-between"}
            alignItems={"center"}
            width={"100%"}
            height={{ xs: "72px", sm: "88px" }}
          >
            <Box display={"flex"} alignItems={"center"}>
              <Box
                marginRight={{ xs: 1, sm: 2 }}
                display={{ xs: "block", md: "none" }}
              >
                <IconButton aria-label="Menu" onClick={() => setDrawerOpen(true)}>
                  <MenuIcon sx={{ fontSize: "30px", color: "black" }} />
                </IconButton>
              </Box>
              <Box
                component="img"
                src={masterImg}
                width={{ xs: "40px", sm: "65px" }}
                sx={{
                  "&:hover": {
                    cursor: "pointer",
                  },
                }}
              />
            </Box>
            <Box>
              {!isTablet && (
                <Box display="flex" columnGap={{ sm: 1, md: 1, lg: 2 }}>
                  {navItems?.map((item, key) => (
                    <NavComponent label={item?.label} link={item?.link} key={key} />
                  ))}
                </Box>
              )}
            </Box>
            <Box>
              <Button
                variant="contained"
                color="pinkWhite"
                sx={{
                  borderRadius: "10px",
                  height: { xs: "auto", md: "48px" },
                  textTransform: "none",
                }}
                // onClick={() => navigate(otherRoutes?.SIGNUP)}
                size="large"
              >
                Get Started Free
              </Button>{" "}
            </Box>
          </Box>
        </Container>
      </AppBar>
      </HideOnScroll>
      <Sidebar drawerOpen={drawerOpen} setDrawerOpen={setDrawerOpen} navItems={navItems} />
    </Box>
  );
};

export default TopBar;
