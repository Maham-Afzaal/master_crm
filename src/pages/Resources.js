import { Box } from "@mui/material";
import React from "react";
import { useTheme } from "@emotion/react";
import lineOrange from "../assests/linesorange.svg";
import arrow from "../assests/arrow.svg";
import { Container, Typography } from "@mui/material";
import { Grid, Paper } from "@mui/material";

const Resources = () => {
  const theme = useTheme();

  return (
    <Box>
      <Box>
        <Box
          mt={10}
          sx={{ backgroundColor: theme.palette.common.backgroundBlue }}
        >
          <Box>
            <Box
              sx={{ position: "relative", bgcolor: "#F7F8FC" }}
              py={{ xs: 10, sm: 12, md: 16, lg: 18 }}
            >
              <Box
                sx={{
                  backgroundColor: theme.palette.common.backgroundDarkBlue,
                  position: "absolute",
                  width: "100%",
                  left: 0,
                  top: 0,
                  right: 0,
                  zIndex: 1,
                  height: { xs: "100%", md: "100%" },
                }}
              ></Box>
              <Box sx={{ display: { xs: "none", md: "block" } }}>
                <Box
                  component="img"
                  src={lineOrange}
                  sx={{
                    height: "357px",
                    position: "absolute",
                    top: 0,
                    left: "-77",
                    zIndex: 2,
                  }}
                ></Box>
                <Box
                  component="img"
                  src={arrow}
                  sx={{ position: "absolute", top: 70, zIndex: 2, right: 10 }}
                ></Box>
              </Box>
              <Container
                maxWidth="xl"
                sx={{ zIndex: 5, position: "relative", textAlign: "center" }}
              >
                <Typography
                  variant="h1"
                  sx={{
                    color: theme.palette.common.textWhite,
                    fontSize: {
                      xs: "38px",
                      sm: "42px",
                      md: "48px",
                      lg: "54px",
                      xl: "60px",
                    },
                    pb: 3,
                  }}
                >
                  Resources
                </Typography>
                <Typography
                  sx={{
                    color: theme.palette.common.textWhite,
                    fontSize: {
                      xs: "16px",
                      sm: "18px",
                      md: "20px",
                      lg: "20px",
                    },
                  }}
                >
                  Master CRM's resource hub is your go-to for best practices,
                  tips, and insights on customer relationship and enterprise
                  resource management. Stay informed and inspired to get the
                  most out of our CRM platform.
                </Typography>
              </Container>
            </Box>
          </Box>
        </Box>
        <Box>
            <Container maxWidth='xl'>
          <Box
            sx={{
              backgroundColor: "#FFFFFF",
              marginTop: { xs: "2rem", md: "8rem" },
              mb: 8,
            }}
          >
            <Grid container spacing={4}>
              <Grid item xs={12} md={6}>
                <Paper
                  elevation={3}
                  sx={{
                    padding: 2,
                    boxShadow: "none",
                    padding: "24px 28px",
                     border:'1px solid #D0D3D6',
                    borderRadius:'10px'
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: {
                        xs: "28px",
                        sm: "32px",
                        md: "36px",
                        lg: "40px",
                        xl: "44px",
                      },
                    }}
                  >
                    User Guides
                  </Typography>
                  <Typography
                    sx={{ fontSize: { xs: "16px", lg: "18px", xl: "20px" } }}
                  >
                    Explore our comprehensive user guides and manuals to master
                    the functionality and features of Master CRM.
                  </Typography>
                </Paper>
              </Grid>
              <Grid item xs={12} md={6}>
                <Paper
                  elevation={3}
                  sx={{
                    boxShadow: "none",
                    padding: "20px 25px",
                    border:'1px solid #D0D3D6',
                    borderRadius:'10px'
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: {
                        xs: "28px",
                        sm: "32px",
                        md: "36px",
                        lg: "40px",
                        xl: "44px",
                      },
                    }}
                  >
                    Case Studies
                  </Typography>
                  <Typography
                    sx={{ fontSize: { xs: "16px", lg: "18px", xl: "20px" } }}
                  >
                    Read success stories from businesses like yours that have
                    transformed their operations with Master CRM.
                  </Typography>
                </Paper>
              </Grid>
              <Grid item xs={12} md={6}>
                <Paper
                  elevation={3}
                  sx={{
                    boxShadow: "none",
                    padding: "20px 25px",
                     border:'1px solid #D0D3D6',
                    borderRadius:'10px'
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: {
                        xs: "28px",
                        sm: "32px",
                        md: "36px",
                        lg: "40px",
                        xl: "44px",
                      },
                    }}
                  >
                    Blog
                  </Typography>
                  <Typography
                    sx={{ fontSize: { xs: "16px", lg: "18px", xl: "20px" } }}
                  >
                    Stay up to date with the latest trends in CRM, sales,
                    marketing, and more with articles from our expert team.
                  </Typography>
                </Paper>
              </Grid>
              <Grid item xs={12} md={6}>
                <Paper
                  elevation={3}
                  sx={{
                    boxShadow: "none",
                    backgroundColor: "#F8F9FB",
                    padding: "20px 25px",
                     border:'1px solid #D0D3D6',
                    borderRadius:'10px'
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: {
                        xs: "28px",
                        sm: "32px",
                        md: "36px",
                        lg: "40px",
                        xl: "44px",
                      },
                    }}
                  >
                    Webinars
                  </Typography>
                  <Typography
                    sx={{ fontSize: { xs: "16px", lg: "18px", xl: "20px" } }}
                  >
                    Join our interactive webinars to learn best practices and
                    get your questions answered by our product experts.
                  </Typography>
                </Paper>
              </Grid>
            </Grid>
           
          </Box>
          </Container>
          <Box
              mt={{ xs: 4, md: 6 }}
              mb={{ xs: 4, md: 6 }}
              sx={{
                backgroundColor: theme.palette.common.backgroundGold,
                p: { xs: 3, sm: 4 },
                border: "none !important",
              }}
            >
              <Typography
                sx={{
                  textAlign: "center",
                  fontFamily:'"Poppins",sans-serif',
                  fontSize: {
                    xs: "20px",
                    sm: "22px",
                    md: "24px",
                    lg: "26px",
                    xl: "28px",
                  },
                }}
              >
                {" "}
                Looking For More?
              </Typography>
              <Typography
                sx={{
                  textAlign: "center",
                  fontSize: { xs: "16px", lg: "18px", xl: "20px" },
                }}
              >
                Visit our Help Center or reach out to our support team for
                personalized assistance.
              </Typography>
            </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Resources;
