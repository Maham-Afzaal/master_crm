import { Box, Typography, Container,Grid, Card, CardContent, CardHeader} from "@mui/material";
import React from "react";

const Partner = () => {
  return (
    <Box mt={15}>
      <Box>
      <Container maxWidth='xl' sx={{textAlign:'center'}}>

        <Typography variant="h2" mb={2}>Our Partners </Typography>
        <Typography variant="p">
          Master CRM collaborates with leading technology providers,
          consultants, and market experts to bring you a robust CRM solution.
          Our partners are an extension of our commitment to excellence.
        </Typography>
        </Container>
      </Box>
    
        <Box sx={{ padding: '20px', textAlign: 'center' }}>   
      <Grid container spacing={2} justifyContent="center" alignItems="flex-start">  
        <Grid item xs={12} md={6}>  
          <Card sx={{ minHeight: '200px' }}> {/* Add minHeight to Card */}  
            <CardHeader sx={{ backgroundColor: '#000', color: '#FFFFFF', padding: '10px 20px' }} title="Master CRM" />  
            <CardContent>  
              <Typography variant="body1">  
                Master CRM collaborates with leading technology providers, consultants, and market experts to bring you a robust CRM solution. Our partners are an extension of our commitment to excellence.  
              </Typography>  
            </CardContent>  
          </Card>  
        </Grid>  
        <Grid item xs={12} md={6}>  
          <Card sx={{ minHeight: '200px' }}> {/* Add minHeight to Card */}  
            <CardHeader sx={{ backgroundColor: '#000', color: '#FFFFFF', padding: '10px 20px' }} title="Technology Partners" />  
            <CardContent>  
              <Typography variant="body1">  
                We team up with the best in tech to ensure that our platform runs smoothly, securely, and is always ahead of the curve.  
              </Typography>  
            </CardContent>  
          </Card>  
        </Grid>  
        <Grid item xs={12} md={6}>  
          <Card sx={{ minHeight: '200px' }}> {/* Add minHeight to Card */}  
            <CardHeader sx={{ backgroundColor: '#000', color: '#FFFFFF', padding: '10px 20px' }} title="Consulting Partners" />  
            <CardContent>  
              <Typography variant="body1">  
                Our consulting partners provide the strategic guidance and expertise needed to implement Master CRM effectively and tailor it to your unique business needs.  
              </Typography>  
            </CardContent>  
          </Card>  
        </Grid>  
        <Grid item xs={12} md={6}>  
          <Card sx={{ minHeight: '200px' }}> {/* Add minHeight to Card */}  
            <CardHeader sx={{ backgroundColor: '#000', color: '#FFFFFF', padding: '10px 20px' }} title="Become a Partner" />  
            <CardContent>  
              <Typography variant="body1">  
                If you believe in driving business success through innovation, join our partner program. Let's grow together.  
              </Typography>  
            </CardContent>  
          </Card>  
        </Grid>  
      </Grid>  
    </Box>  



    </Box>
  );
};

export default Partner;
