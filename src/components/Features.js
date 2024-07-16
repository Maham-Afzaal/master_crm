import React from "react";
import { Box, Grid, Typography, Card, Button, Container } from "@mui/material";
import { useTheme } from "@emotion/react";

const CheckedIcons = ({color}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="100%"
    height="100%"
    fill="none"
  >
    <path
      d="M17.0637 0.333099H6.94874C2.99374 0.333099 0.33374 3.10977 0.33374 7.23977V16.7714C0.33374 20.8898 2.99374 23.6664 6.94874 23.6664H17.0637C21.0187 23.6664 23.6671 20.8898 23.6671 16.7714V7.23977C23.6671 3.10977 21.0187 0.333099 17.0637 0.333099Z"
      fill={color}
    />
    <path
      d="M10.6156 15.7892C10.3543 15.7892 10.0929 15.69 9.89343 15.4905L7.12493 12.722C6.72593 12.323 6.72593 11.6767 7.12493 11.2789C7.52393 10.8799 8.1691 10.8787 8.5681 11.2777L10.6156 13.3252L15.4316 8.50921C15.8306 8.11021 16.4758 8.11021 16.8748 8.50921C17.2738 8.90821 17.2738 9.55454 16.8748 9.95354L11.3378 15.4905C11.1383 15.69 10.8769 15.7892 10.6156 15.7892Z"
      fill="white"
    />
  </svg>
);
const featuresList = [
  {
    title: "Inventory and Warehouse Management",
    description:
      "Effectively manage inventory levels, product details, and warehouse status to ensure smooth operations and availability.",
    popular_features: [
      "Add and manage stock levels and product information.",
      "Access real-time information on inventory levels and warehouse status.",
      "Associate inventory with products, orders, and track warehouse movements.",
    ],
  },
  {
    title: "Scheduler and Task Management",
    description:
      "Streamline your workflow with an interactive calendar and task management system to keep your team organized and efficient.",
    popular_features: [
      "Schedule meetings and tasks with reminders.",
      "View and manage activities through an interactive calendar.",
      "Assign tasks to team members and track progress.",
    ],
  },
  {
    title: "Vendor and Order Management",
    description:
      "Optimize your procurement and sales processes with robust vendor and order management capabilities.",
    popular_features: [
      "Generate and manage sales, purchases, and work orders.",
      "Access detailed order information, including quantities, pricing, and status.",
      "Modify order details based on changes or negotiations.",
    ],
  },
  {
    title: "Account and Customer Management",
    description:
      "Gain a 360-degree view of customer accounts with detailed profiles and transaction history to enhance relationship management.",
    popular_features: [
      "Add and manage customer accounts and organizations.",
      "Access detailed profiles including transaction history and preferences.",
      "Deactivate or remove obsolete accounts to maintain data accuracy.",
    ],
  },
  {
    title: "Product and Catalog Management",
    description:
      "Efficiently manage your product catalogue with detailed product information, pricing, and availability to meet market demands.",
    popular_features: [
      "Add new products or services to the catalogue.",
      "View and update detailed product information and specifications.",
      "Associate products with assets, quotes, orders, and invoices.",
    ],
  },
  {
    title: "Quote Generation and Management",
    description:
      "Simplify the process of creating and managing quotes for products and services, ensuring accuracy and efficiency in negotiations.",
    popular_features: [
      "Generate quotes for products or services quickly.",
      "View and compare multiple quotes to find the best options.",
      "Modify quote details based on customer negotiations.",
    ],
  },
];

const MarketingCard = ({ details }) => (
  <Box
    border={1}
    borderColor="#D0D3D6"
    borderRadius="20px"
    backgroundColor="#FAFAFA"
    // textAlign="center"
    className="gridItem"
    component={Card}
    height={"100%"}
    display={"flex"}
    flexDirection={"column"}
    p={{ xs: 2, sm: 4 }}
    pt={{ xs: 3, sm: 6 }}
  >
    <Typography
      variant="body2"
      component={"h2"}
      fontWeight="500"
      fontFamily={'"Poppins", sans-serif'}
      color={"secondary"}
      fontSize={{ xs: "24px", sm: "30px", md: "36px" }}
      pb={1}
    >
      {details?.title}
    </Typography>
    <Typography
      component={"p"}
      fontSize={{ xs: "16px", sm: "18px", md: "20px", lg: "20px" }}
      fontWeight={400}
      lineHeight={"32px"}
      fontFamily={'"Poppins", sans-serif'}
      mb={2}
    >
      {details?.description}
    </Typography>
    <Typography
      component={"p"}
      variant="h4"
      fontWeight={600}
      lineHeight={"32px"}
      fontFamily={'"Poppins", sans-serif'}
      color={"secondary"}
      fontSize={{ xs: "20px", sm: "22px", md: "24px", lg: "24px" }}
      mb={2}
    >
      Popular Features
    </Typography>
    {details.popular_features.map((feature, index) => (
      <Box
        key={index}
        sx={{
          display: "flex",
          gap: "10px",
          paddingY: { xs: "5px", sm: "8px" },
          alignItems: "flex-start",
        }}
      >
        <Box
          sx={{
            width: { xs: "27px", md: "40px" },
            height: { xs: "27px", md: "40px" },
          }}
        >
          <CheckedIcons color={"#07CCD2"} />
        </Box>
        <Typography
          color={"secondary"}
          fontFamily={'"Poppins", sans-serif'}
          fontWeight={"400"}
          fontSize={{ xs: "16px", sm: "18px", md: "20px", lg: "20px" }}
        >
          {feature}
        </Typography>
      </Box>
    ))}

    <Button
      sx={{ mt: "auto", height: { lg: "56px" }, fontSize: { lg: "20px" } }}
      fullWidth
      variant="contained"
      size="large"
      color="pinkWhite"
    >
      Learn More
    </Button>
  </Box>
);

const Features = () => {
  return (
    <Box my={6}>
      <Typography
        fontFamily={'"Poppins", sans-serif'}
        variant="h1"
        color={"secondary"}
        align="center"
        // gutterBottom
        sx={{
          fontSize: { xs: "30px", sm: "36px", md: "42px", lg: "48px" },
          lineHeight: "auto",
          fontWeight: 700,
          textAlign: "center",
          pb: { xs: 3, sm: 6 },
        }}
      >
        Features of Master CRM{" "}
      </Typography>
      <Container maxWidth={'xl'}>
      <Grid container spacing={4}>
        {featuresList.map((feature, index) => (
          <Grid item xs={12} md={6} key={index}>
            <MarketingCard details={feature} />
          </Grid>
        ))}
      </Grid>
      </Container>
    </Box>
  );
};

export default Features;
