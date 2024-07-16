import { Box, Container, Typography , Button} from "@mui/material";
import React from "react";
import { useTheme } from "@mui/material";
import lineOrange from '../assests/linesorange.svg';
import arrow from '../assests/arrow.svg';

const HeroSection = () => {
  const theme = useTheme();

  return (
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
        <Box sx={{display:{xs:'none',md:'block'}}}>
          <Box component='img' 
          src={lineOrange}
          sx={{position:'absolute',top:0,left:'-77',zIndex:2}}
          ></Box>
          <Box component='img' 
          src={arrow}
          sx={{position:'absolute',top:70,zIndex:2,right:10}}
          ></Box>
        </Box>
        <Container maxWidth="lg" sx={{ position: "relative", zIndex: 3 }}>
          <Box>
            <Box display={'flex'}
                        alignItems={'center'}
                        justifyContent={'center'}
                        flexDirection={'column'}
                        gap={{ xs: 2, sm: 4 }}>
              <Typography
                variant="h2"
                sx={{
                  color: "white",
                  fontSize: {
                    xs: "36px",
                    sm: "50px",
                    md: "60px",
                    lg: "70px",
                    xl: "80px",
                  },
                  lineHeight: "auto",
                  fontWeight: 700,
                  textAlign: "center",
                }}
              >
                Grow better with MasterCRM
              </Typography>
              <Typography
                            component={'p'}
                            variant="h5"
                            fontWeight={400}
                            align="center"
                            color={'white'}
                            fontFamily={'"Poppins", sans-serif'}
                            lineHeight={{ xs: 'auto', md: '36px' }}
                            width={{ xs: '100%', md: '80%' }}
                            fontSize={{ xs: '16px', sm: '18px', md: '20px', lg: '20px' }}
                        >
                            Software that's powerful, not overpowering. Seamlessly connect your data, teams, and customers on one CRM platform that grows with your business
                        </Typography>
                        <Box display={'flex'} alignItems={'center'} justifyContent={'center'}>
                            <Button
                                sx={{
                                    height: { lg: '56px' },
                                    fontSize: { lg: '20px' }
                                }}
                                align="center"
                                variant="contained"
                                size="large"
                                color="pinkWhite"
                                // onClick={() => setContactFormOpen(true)}
                            >
                                Get a demo
                            </Button>
                        </Box>
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default HeroSection;
