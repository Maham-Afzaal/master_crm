import { Box } from "@mui/material";
import React, { useState } from "react";
import { useTheme } from "@emotion/react";
import lineOrange from "../assests/linesorange.svg";
import arrow from "../assests/arrow.svg";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import CardActions from "@mui/material/CardActions";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import { Typography, Container } from "@mui/material";
const pricing = [
  {
    title: "Basic",
    description: "A simple start for everyone",
    price: {
      annual: 210,
      monthly: 15,
    },
    features: [
      {
        title: "Lead Management.",
        isIncluded: true,
      },
      {
        title: "Contact management.",
        isIncluded: true,
      },
      {
        title: "Vendor management.",
        isIncluded: true,
      },
      {
        title: "Quotes.",
        isIncluded: true,
      },
      {
        title: "Deals.",
        isIncluded: true,
      },
      {
        title: "Tasks.",
        isIncluded: true,
      },
      {
        title: "Meatings.",
        isIncluded: true,
      },
      {
        title: "Scheduler.",
        isIncluded: true,
      },
    ],
    isHighlighted: false,
    btnText: "Your Current Plan",
  },
  {
    title: "Standard",
    description: "For small to medium businesses",
    price: {
      annual: 420,
      monthly: 25,
    },
    features: [
      {
        title: "Lead Management.",
        isIncluded: true,
      },
      {
        title: "Contact management.",
        isIncluded: true,
      },
      {
        title: "Vendor management.",
        isIncluded: true,
      },
      {
        title: "Quotes.",
        isIncluded: true,
      },
      {
        title: "Deals.",
        isIncluded: true,
      },
      {
        title: "Tasks.",
        isIncluded: true,
      },
      {
        title: "Meatings.",
        isIncluded: true,
      },
      {
        title: "Scheduler.",
        isIncluded: true,
      },
      {
        title: "Accounts/Customer Management.",
        isIncluded: true,
      },
      {
        title: "HR- Resource Management.",
        isIncluded: true,
      },
    ],
    isHighlighted: true,
    btnText: "Upgrade",
  },
  {
    title: "Enterprise",
    description: "Solution for big organizations",
    price: {
      annual: 740,
      monthly: 35,
    },
    features: [
      {
        title: "Lead Management.",
        isIncluded: true,
      },
      {
        title: "Contact management.",
        isIncluded: true,
      },
      {
        title: "Vendor management.",
        isIncluded: true,
      },
      {
        title: "Quotes And Deals Management",
        isIncluded: true,
      },
      {
        title: "Tasks,Meatings And Scheduler.",
        isIncluded: true,
      },
      {
        title: "Accounts/Customer Management.",
        isIncluded: true,
      },
      {
        title: "HR- Resource Management.",
        isIncluded: true,
      },
      {
        title: "Product Management.",
        isIncluded: true,
      },
      {
        title: "Inventory And Warehouse Management.",
        isIncluded: true,
      },
      {
        title: "Profit And Loss Intractive live Analytics.",
        isIncluded: true,
      },
      {
        title: "Customizable Reports.",
        isIncluded: true,
      },
      {
        title: "AI Driven Predictive and Behavioural Analytics",
        isIncluded: true,
      },
    ],
    isHighlighted: false,
    btnText: "Upgrade",
  },
];
const Pricing = () => {
  const theme = useTheme();
  const [pricingOption, setPricingOption] = useState("month");

  const handleClick = (event, newPricingOption) => {
    setPricingOption(newPricingOption);
  };

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
                  height: { xs: "600px", md: "700px" },
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
                  Our Pricing Plans
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
                  All plans include 30+ advanced tools and features to boost
                  your Business. Choose the best plan to fit your needs.
                </Typography>
              </Container>
            </Box>
          </Box>
        </Box>
        <Container maxWidth='xl' >
          <Grid container spacing={2} sx={{mt:4,mb:8, position:'relative',zIndex:2}}>
            {pricing.map((item, i) => (
              <Grid item xs={12} md={4} key={i}>
                <Box
                  component={Card}
                  height={"100%"}
                  display={"flex"}
                  flexDirection={"column"}
                  boxShadow={{
                    md: item.isHighlighted ? "20px 34px 0px 0px #0000001A" : 0,
                  }}
                  borderRadius={"20px"}
                  bgcolor={"#F8F9FB"}
                  border='1px solid #F8F9FB'
                >
                  <Box
                    component={CardContent}
                    padding={{ xs: 2, md: 3, lg: 5 }}
                  >
                    <Box
                      marginBottom={{ xs: 2, md: 4 }}
                      display={"flex"}
                      flexDirection={"column"}
                      alignItems={"center"}
                    >
                      <Box
                        marginBottom={1}
                        // display={'flex'}
                        width={"100%"}
                        justifyContent={"space-between"}
                        alignItems={"center"}
                      >
                        <Typography variant={"h3"} color={"secondary"}>
                          <Box
                            component={"span"}
                            sx={{
                              fontSize: {
                                xs: "26px",
                                sm: "28px",
                                md: "30px",
                                lg: "32px",
                              },
                            }}
                            fontWeight={600}
                            fontFamily={'"Lora", serif'}
                          >
                            {item.title}
                          </Box>
                        </Typography>
                        <Typography
                          variant="h5"
                          fontSize={{
                            xs: "16px",
                            sm: "18px",
                            md: "20px",
                            lg: "20px",
                          }}
                          fontWeight={400}
                          component={"p"}
                          fontFamily={'"Poppins", sans-serif'}
                          mt={1}
                        >
                          {item.description}
                        </Typography>
                        <Box
                          display={"flex"}
                          alignItems={"flex-start"}
                          mt={{ xs: 1, sm: 2, md: 4 }}
                          mb={{ xs: 0, md: 1 }}
                          className="lora-font"
                        >
                          <Typography
                            variant={"h1"}
                            sx={{
                              fontSize: {
                                xs: "30px",
                                sm: "36px",
                                md: "42px",
                                lg: "48px",
                              },
                            }}
                            color={"textPrimary"}
                          >
                            <Box
                              component={"span"}
                              fontWeight={600}
                              marginRight={1 / 2}
                              className="lora-font"
                            >
                              $
                            </Box>
                          </Typography>
                          <Typography
                            variant={"h1"}
                            sx={{
                              fontSize: {
                                xs: "30px",
                                sm: "36px",
                                md: "42px",
                                lg: "48px",
                              },
                            }}
                            color={"textPrimary"}
                          >
                            <Box
                              component={"span"}
                              fontWeight={600}
                              className="lora-font"
                            >
                              {pricingOption === "annual"
                                ? item.price.annual
                                : item.price.monthly}
                            </Box>
                          </Typography>
                          <Typography
                            variant={"h1"}
                            sx={{
                              fontSize: {
                                xs: "30px",
                                sm: "36px",
                                md: "42px",
                                lg: "48px",
                              },
                              mt: 1,
                            }}
                            color={"textPrimary"}
                          >
                            <Box component={"span"} fontWeight={400}>
                              /
                            </Box>
                          </Typography>
                          <Typography
                            sx={{
                              mt: 4,
                              fontWeight: 500,
                              ml: 2,
                              fontSize: {
                                xs: "20px",
                                sm: "22px",
                                md: "24px",
                                lg: "24px",
                              },
                            }}
                            variant={"p"}
                            color={"textPrimary"}
                          >
                            Month
                          </Typography>
                        </Box>
                      </Box>
                    </Box>
                    <Grid container spacing={2}>
                      {item.features.map((feature, j) => (
                        <Grid item xs={12} key={j}>
                          {/* <Typography
                                                    component={'p'}
                                                    align={'center'}
                                                    style={{
                                                        textDecoration: !feature.isIncluded
                                                            ? 'line-through'
                                                            : 'none',
                                                    }}
                                                >
                                                    {feature.title}
                                                </Typography> */}
                          <Stack
                            display={"flex"}
                            alignItems={"center"}
                            justifyContent={"flex-start"}
                            direction={"row"}
                          >
                            <Checkbox
                              defaultChecked
                              sx={{
                                borderRadius: 3,
                                p: 0,
                                "& .MuiSvgIcon-root": {
                                  borderRadius: 3,
                                  fontSize: 28,
                                },
                                "&.Mui-checked": {
                                  color: "#07ccd2",
                                },
                              }}
                              disabled
                            />
                            <Typography
                              variant="h5"
                              fontWeight={400}
                              fontFamily={'"Poppins", sans-serif'}
                              component={"p"}
                              fontSize={{
                                xs: "16px",
                                sm: "18px",
                                md: "20px",
                                lg: "20px",
                              }}
                              ml={1}
                            >
                              {feature.title}
                            </Typography>
                          </Stack>
                        </Grid>
                      ))}
                    </Grid>
                  </Box>
                  <Box flexGrow={1} />
                                <Box
                                    component={CardActions}
                                    justifyContent={'center'}
                                    padding={4}
                                >
                                    <Button
                                        size={'large'}
                                        // variant={item.isHighlighted ? 'contained' : 'outlined'}
                                        variant={'contained'}
                                        fullWidth={true}
                                        sx={{ height: { lg: '60px' }, fontSize: { lg: '18px' } }}
                                        color={'pinkWhite'}
                                    >
                                        {item.btnText}
                                    </Button>
                                </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default Pricing;
