import { Box, Container, Typography } from "@mui/material";
import React from "react";

const Company = () => {
  return (
    <Box mt={12}>
      <Container maxWidth="xl">
        <Box py={1}>
          <Typography variant="h4" fontFamily={'"Poppins",sans-serif'}>
            About MasterCRM
          </Typography>
          <Typography variant="p" fontFamily={'"Poppins",sans-serif'}>
            MasterCRM has been at the forefront of CRM innovation, providing
            advanced solutions to manage customer relations and enterprise
            resources efficiently. With a commitment to quality and user-centric
            design, we ensure businesses of all sizes can harness the power of
            CRM to drive growth and customer satisfaction.
          </Typography>
        </Box>
        <Box my={3}>
          <Typography variant="h4" fontFamily={'"Poppins",sans-serif'}>
            Our Vision and Mission
          </Typography>
          <Typography variant="p" fontFamily={'"Poppins",sans-serif'}>
            Our vision is to empower businesses with intuitive CRM tools that
            make customer relationship management a breeze. Our mission is to be
            the go-to CRM solution provider, enhancing customer engagement and
            operational efficiency through cutting-edge technology and
            outstanding support.
          </Typography>
        </Box>
        <Box my={3}>
          <Typography variant="h4" fontFamily={'"Poppins",sans-serif'}>
            Core Values
          </Typography>
          <Typography variant="p" fontFamily={'"Poppins",sans-serif'}>
            At MasterCRM, we are driven by innovation, customer success,
            integrity, and teamwork. We believe in creating value for our
            clients through continuous improvement and a proactive approach to
            solving business challenges.
          </Typography>
        </Box>
        <Box mb={5}>
          <Typography variant="h4" fontFamily={'"Poppins",sans-serif'}>
            Meet Our Team
          </Typography>
          <Typography variant="p" fontFamily={'"Poppins",sans-serif'}>
            Our team of experts in CRM technology, customer support, and
            business processes is dedicated to delivering the best experience
            for our customers. Get to know the people behind MasterCRM who are
            committed to your success.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Company;
