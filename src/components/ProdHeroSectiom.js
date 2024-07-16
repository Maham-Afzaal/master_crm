import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import Product1 from "../assests/products/product_1.jpeg";
import Product2 from "../assests/products/product_2.jpeg";
import Product3 from "../assests/products/product_3.jpeg";
import Product4 from "../assests/products/product_4.jpeg";
import Product5 from "../assests/products/product_5.jpeg";
import Product6 from "../assests/products/product_6.jpeg";
import Product7 from "../assests/products/product_7.jpeg";
import Product8 from "../assests/products/product_8.jpeg";

const featuresList = [
  {
    title: `Lead Management`,
    features: [
      "Add new leads manually or import leads from external sources.",
      "View a lead details, including contact information and lead source.",
      "Modify lead information and status based on interactions.",
      "Remove irrelevant or duplicate leads.",
      "Associations quotes, deals.",
    ],
    img: Product1,
  },
  {
    title: "Contact Management",
    features: [
      "Add new contacts and associate them with relevant accounts.",
      "Access comprehensive contact profiles with communication history.",
      "Modify contact details and preferences.",
      "Remove obsolete contacts and Interactive filterable dashboard.",
      "Meeting scheduling, Task, Activities, Powered by Interactive Calendar.",
    ],
    img: Product2,
  },
  {
    title: "Deal Pipeline",
    features: [
      "Add new deals with relevant details, such as deal stage and expected revenue.",
      "Monitor the status and progress of each deal in the pipeline.",
      "Move deals through different stages and update deal information.",
      "Remove deals that are no longer relevant.",
      "Relationship to Leads, quotes, contact, meetings, Customers.",
    ],
    img: Product3,
  },
  {
    title: "Quotes",
    features: [
      "Generate quotes for products or services.",
      "View and compare multiple quotes.",
      "Modify quote details based on negotiations.",
      "Remove outdated or cancelled quotes.",
      "Associated to Products, Deals and Services.",
    ],
    img: Product4,
  },
  {
    title: "Project And Customer Management",
    features: [
      "Add new customer Projects and organizations",
      "Access detailed account profiles, including transaction history.",
      "Modify account information and preferences.",
      "Deactivate or remove obsolete project and Customers.",
      "360 Degree association all activities related to the account.",
    ],
    img: Product5,
  },
  {
    title: "Orders Management",
    features: [
      "Generate Sales, Work, Purchase orders for products or services.",
      "Access order details, including quantities, pricing, and status.",
      "Modify order details based on changes or negotiations.",
      "Cancel or remove unnecessary orders.",
      "Relationship to products, services, and invoices.",
    ],
    img: Product6,
  },
  {
    title: "Product Management",
    features: [
      "Add new products or services to the catalogues.",
      "View detailed product information and specifications.",
      "Modify product details, pricing, availability and Remove obsolete or discontinued products.",
      "Associate with Assets, quotes, orders, and invoice.",
      "Vendor Management.",
      "HR-(New resource Creation, allocating to Categories, Task Assignment)",
    ],
    img: Product7,
  },
  {
    title: "Inventory & Warehouse Management",
    features: [
      "Add new inventory items, brands and Products.",
      "Access real-time information on inventory, product stock levels.",
      "Modify stock quantities, update product information, and manage orders.",
      "Remove obsolete inventory items or discontinued products.",
      "Asset Processing (receiving, testing, Grading, and storing).",
      "Associates with products, Assets, Stock, Orders tracking, warehouses.",
    ],
    img: Product8,
  },
];
const ProdHeroSectiom = () => {
  return (
    <Box>
      {featuresList.map((detail, index) => (
        <Box
        key={index}
          bgcolor={index % 2 == 0 ? "#F7F8FC" : "white"}
          py={{ xs: 4, md: 8 }}
        >
          <Container maxWidth="xl">
            <Grid
              container
              justifyContent="center"
              alignItems={"center"}
              direction={{ md: index % 2 == 0 ? "row-reverse" : "row" }}
              spacing={2}
            >
              <Grid item xs={12} md={6}>
                <Box height={{ xs: "300px", md: "568px" }}>
                  <img
                    src={detail.img}
                    alt="product"
                    style={{
                      borderRadius: "20px",
                      width: "100%",
                      height: "inherit",
                      objectFit: "cover",
                    }}
                  />
                </Box>
              </Grid>
              <Grid item xs={12} md={6}>
                <Box p={{ xs: 1, md: 2 }}>
                  <Typography
                    variant="h1"
                    component={"h2"}
                    fontWeight="500"
                    fontSize={{ xs: "38px", sm: "42px", md: "48px" }}
                  >
                    {detail.title}
                  </Typography>
                  <Box mt={2}>
                    {detail.features.map((feature, index) => (
                      <Box key={index} display={"flex"} mb={2} gap={{ xs: 1, ms: 2 }}>
                        <Box
                          sx={{
                            width: { xs: "27px", md: "40px" },
                            height: { xs: "27px", md: "40px" },
                          }}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="100%"
                            height="100%"
                            fill="none"
                          >
                            <path
                              d="M17.0637 0.333099H6.94874C2.99374 0.333099 0.33374 3.10977 0.33374 7.23977V16.7714C0.33374 20.8898 2.99374 23.6664 6.94874 23.6664H17.0637C21.0187 23.6664 23.6671 20.8898 23.6671 16.7714V7.23977C23.6671 3.10977 21.0187 0.333099 17.0637 0.333099Z"
                              fill="#FF5538"
                            />
                            <path
                              d="M10.6156 15.7892C10.3543 15.7892 10.0929 15.69 9.89343 15.4905L7.12493 12.722C6.72593 12.323 6.72593 11.6767 7.12493 11.2789C7.52393 10.8799 8.1691 10.8787 8.5681 11.2777L10.6156 13.3252L15.4316 8.50921C15.8306 8.11021 16.4758 8.11021 16.8748 8.50921C17.2738 8.90821 17.2738 9.55454 16.8748 9.95354L11.3378 15.4905C11.1383 15.69 10.8769 15.7892 10.6156 15.7892Z"
                              fill="white"
                            />
                          </svg>
                        </Box>
                        <Typography
                          color={"secondary"}
                          fontFamily={'"Poppins", sans-serif'}
                          variant="h5"
                          sx={{ width: "100%" }}
                          fontSize={{
                            xs: "16px",
                            sm: "18px",
                            md: "20px",
                            lg: "20px",
                          }}
                          fontWeight={"400"}
                        >
                          {feature}
                        </Typography>
                      </Box>
                    ))}
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </Box>
      ))}
    </Box>
  );
};

export default ProdHeroSectiom;
