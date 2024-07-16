import React from "react";
import {
  Box,
  Drawer,
  IconButton,
  Button,
  Link,
  Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { Link as RouterLink } from "react-router-dom"; // Import Link from react-router-dom

const Sidebar = ({ drawerOpen, setDrawerOpen, navItems }) => {
  const NavComponent = ({ label = "", link = "" }) => (
    <Box
    py={2}
      sx={{
        marginBottom: 2, // gap between links
        width: "100%", // make the horizontal line full width
        borderBottom: "1px solid #ccc", // horizontal line
        textAlign: "center", // center-align the text
      }}
    >
      <Typography
        variant="p"
        className="poppins-font"
        sx={{
          fontWeight: "500",
          color: "#2C2C2C",
          lineHeight: "19px",
          textDecoration: "none",
          px: { md: 1, lg: 2 },
          "&:hover": {
            cursor: "pointer",
            color:'#405D72'
          },
        }}
        component={RouterLink}
        to={link}
        onClick={() => setDrawerOpen(false)}
      >
        {label}
      </Typography>
    </Box>
    // <Link
    //   //   onClick={() => navigate(link)}
    //   onClick={() => setDrawerOpen(false)}

    //   sx={{
    //     textDecoration: "none",
    //     px: { md: 1, lg: 2 },
    //     "&:hover": {
    //       cursor: "pointer",
    //     },
    //   }}
    //   color={"secondary"}
    // >
    //   <Typography
    //     variant="p"
    //     className="poppins-font"
    //     sx={{ fontWeight: "500", color: "#2C2C2C", lineHeight: "19px" }}
    //   >
    //     {label}
    //   </Typography>
    // </Link>
  );

  return (
    <Drawer
      anchor="left"
      open={drawerOpen}
      onClose={() => setDrawerOpen(false)}
      PaperProps={{
        sx: {
          width: {xs:'100%',md:'70%'},
          height: "100%",
        },
      }}
    >
      <Box display="flex" justifyContent="flex-end" padding={2}>
        <IconButton onClick={() => setDrawerOpen(false)}>
          <CloseIcon />
        </IconButton>
      </Box>
      <Box>
      {/* <Box display="flex" flexDirection="column" sx={{justifyContent:'flex-start'}}> */}
        {navItems?.map((item, key) => (
          <NavComponent label={item?.label} link={item?.link} key={key} />
        ))}
      </Box>
    </Drawer>
  );
};

export default Sidebar;
