import { Box, Container, Typography } from "@mui/material";
import React from "react";
import { useTheme } from "@mui/material";
import Carousal1 from "../assests/CarousalImage1.jpeg";
import ProdHeroSectiom from "../components/ProdHeroSectiom";

const Products = () => {
  const theme = useTheme();

  return (
    <Box mt={4}>
      <Box
        sx={{
          backgroundColor: theme.palette.common.backgroundDarkBlue,
        }}
      >
        <Box
          sx={{
            position: "absolute",
            backgroundColor: "#F7F8FC",
            left: 0,
            top: 0,
            right: 0,
            zIndex: 1,
            height: { xs: "70%", sm: "60%", md: "50%" },
          }}
        ></Box>

        <Container maxWidth="xl">
          <Box
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
            flexDirection={"column"}
            sx={{ zIndex: 2, position: "relative", py: { xs: 6, md: 10 } }}
          >
            <Typography
              fontFamily={'"Poppins",sans-serif'}
              sx={{
                fontSize: { xs: "40px", md: "60px" },
                fontWeight: "600",
                color: "#11100F",
              }}
              textAlign={'center'}
            >
              Build Excellent Customer Relationships
            </Typography>
            <Box width={"100%"}>
              <img
                style={{ borderRadius: "30px", width: "100%" }}
                src={Carousal1}
                alt="dashboard"
              />
            </Box>
          </Box>
        </Container>
      </Box>
      <ProdHeroSectiom />

    </Box>
  );
};

export default Products;
