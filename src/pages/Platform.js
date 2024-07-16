import {
  Box,
  Typography,
  Container,
  Grid,
  Card,
  CardContent,
  CardHeader,
} from "@mui/material";
import React from "react";

const Platform = () => {
  return (
    <Box mt={15}>
      <Box>
        <Container maxWidth="xl" sx={{ textAlign: "center" }}>
          <Typography variant="h2" mb={2}>
            Our Platforms{" "}
          </Typography>
          <Typography variant="p">
            Master CRM provides an integrated solution for managing your
            customer relationships and enterprise resources with efficiency and
            ease. Experience the power of a platform designed to streamline your
            business processes, enhance customer engagement, and drive growth.
          </Typography>
        </Container>
      </Box>

      <Box sx={{ padding: "20px", textAlign: "center" }}>
        <Grid
          container
          spacing={2}
          justifyContent="center"
          alignItems="flex-start"
        >
          <Grid item xs={12} md={6}>
            <Card sx={{ minHeight: "200px" }}>
              {" "}
              {/* Add minHeight to Card */}
              <CardHeader
                sx={{
                  backgroundColor: "#000",
                  color: "#FFFFFF",
                  padding: "10px 20px",
                }}
                title="Unified Customer Management"
              />
              <CardContent>
                <Typography variant="body1">
                  Keep track of every interaction with your customers through a
                  centralized platform. From lead management to final sales,
                  Master CRM ensures that every customer feels valued.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card sx={{ minHeight: "200px" }}>
              {" "}
              {/* Add minHeight to Card */}
              <CardHeader
                sx={{
                  backgroundColor: "#000",
                  color: "#FFFFFF",
                  padding: "10px 20px",
                }}
                title="Seamless Integration
"
              />
              <CardContent>
                <Typography variant="body1">
                  Connect your CRM with a host of other applications and
                  services for a seamless workflow. Our API-first design means
                  you can customize and extend your CRM as you grow.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card sx={{ minHeight: "200px" }}>
              {" "}
              {/* Add minHeight to Card */}
              <CardHeader
                sx={{
                  backgroundColor: "#000",
                  color: "#FFFFFF",
                  padding: "10px 20px",
                }}
                title="Mobile Accessibility
"
              />
              <CardContent>
                <Typography variant="body1">
                  Access the full power of Master CRM on the go with our mobile
                  app. Stay connected with your team and customers, no matter
                  where you are.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card sx={{ minHeight: "200px" }}>
              {" "}
              {/* Add minHeight to Card */}
              <CardHeader
                sx={{
                  backgroundColor: "#000",
                  color: "#FFFFFF",
                  padding: "10px 20px",
                }}
                title="Comprehensive Analytics
"
              />
              <CardContent>
                <Typography variant="body1">
                  Leverage AI-driven analytics to understand customer behavior,
                  predict sales trends, and make data-driven decisions to propel
                  your business forward.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Platform;
