import { AppBar, Button, Container, Grid, IconButton, Paper, Toolbar, Typography, List, ListItem, ListItemText, Drawer, Divider } from '@mui/material'
import { Box } from '@mui/system'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect } from 'react'
import Carousel from 'react-material-ui-carousel'
import Footer from '../components/Footer'
import GetInTouch from '../components/getInTouch'
import OurOffice from '../components/OurOffice'
import AOS from "aos";
import "aos/dist/aos.css";
import Head from 'next/head'
import { isMobile } from 'react-device-detect'
import GetInTouchMobile from '../components/GetInTouchMobile'
import { Menu, MoreVert } from '@mui/icons-material'
import OurOfficeMobile from '../components/OurOfficeMobile'
import FooterMobile from '../components/FooterMobile'
import { makeStyles, useTheme } from '@mui/styles'

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  },
  drawer: {
    flexShrink: 0,
    width: drawerWidth,
  },
  drawerPaper: {
    width: drawerWidth
  },
  content: {
    flexGrow: 1,
  }
}));

const Home = () => {

  const classes = useStyles();
  const theme = useTheme();

  const [open, setOpen] = React.useState(false);

  const toggleDrawer = event => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setOpen(!open);
  };

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  if (isMobile) {
    return (
      <div>
        <Box sx={{ flexGrow: 1 }}>
          <Box height={50} width={40}>
            <h5>hello</h5>
          </Box>
          <AppBar position="absolute" sx={{ backgroundColor: "#0F0F0F" }}>
            <Toolbar>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                onClick={toggleDrawer}
                sx={{ mr: 2 }}
              >
                <Menu />
              </IconButton>
              <Box sx={{ mx: 'auto' }}>
                <Image
                  src="/GulfLandLogo.png"
                  alt="GLPD LOGO"
                  width={135}
                  height={30}
                />
              </Box>
              <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                <IconButton
                  size="large"
                  aria-label="show more"
                  aria-haspopup="true"
                  color="inherit"
                >
                  <MoreVert />
                </IconButton>
              </Box>
            </Toolbar>
          </AppBar>
          <Drawer
            className={classes.drawer}
            variant={"temporary"}
            classes={{
              paper: classes.drawerPaper
            }}
            anchor="left"
            open={open}
            onClose={toggleDrawer}
          >
            <div className={classes.toolbar} />
            <Divider />
            <List sx={{ my: "auto" }}>
              <ListItem button data-aos="fade-right" data-aos-duration="1200" data-aos-delay="0">
                <Typography variant='h6' sx={{ fontFamily: "Montserrat" }}>
                  <Link href={"/"}>Home</Link>
                </Typography>
                <ListItemText />
              </ListItem>
              <ListItem button data-aos="fade-right" data-aos-duration="1200" data-aos-delay="100">
                <Typography variant='h6' sx={{ fontFamily: "Montserrat" }}>
                  <Link href={"about-us"}>About Us</Link>
                </Typography>
                <ListItemText />
              </ListItem>
              <ListItem button data-aos="fade-right" data-aos-duration="1200" data-aos-delay="200">
                <Typography variant='h6' sx={{ fontFamily: "Montserrat" }}>
                  <Link href={"why-dubai"}>Why Dubai</Link>
                </Typography>
                <ListItemText />
              </ListItem>
              <ListItem button data-aos="fade-right" data-aos-duration="1200" data-aos-delay="300">
                <Typography variant='h6' sx={{ fontFamily: "Montserrat" }}>Our Properties</Typography>
                <ListItemText />
              </ListItem>
              <ListItem button data-aos="fade-right" data-aos-duration="1200" data-aos-delay="400">
                <Typography variant='h6' sx={{ fontFamily: "Montserrat" }}>
                  <Link href={"contact-us"}>Contact</Link>
                </Typography>
                <ListItemText />
              </ListItem>
            </List>
          </Drawer>
        </Box>
        <Paper elevation={0} id='hero section' sx={{ height: "590px" }}>
          <div className='heroVideoMobile'>
            <img src='https://res.cloudinary.com/suizaax/image/upload/v1652049045/output-onlinegiftools_1_1_mcdh6w.gif' style={{ objectFit: "cover", backgroundPosition: "center" }} height="690px" width={"100%"}></img>
            {/* <video
              autoPlay
              muted
              loop
              playsinline
              preload="auto"
              style={{ width: "100vw", height: "600px", objectFit: "cover" }}
            >
              <source src='https://giphy.com/embed/3o7WTAkv7Ze17SWMOQ' type='video/mp4' />
            </video> */}
            <Grid container className='overlayMobile'>
              <Grid item sm={12} sx={{ m: "auto" }}>
                <Box textAlign={"center"}>
                  <Typography sx={{ fontSize: 54, fontFamily: "Crimson" }} color={"#F0EDE8"}
                    data-aos="fade-up" data-aos-duration="1200" data-aos-delay="0">
                    GULF LAND
                  </Typography>
                  <Typography fontSize={18} sx={{ fontFamily: "Crimson" }} color={"#F0EDE8"} lineHeight={0} fontWeight={"lighter"}
                    data-aos="fade-up" data-aos-duration="1200" data-aos-delay="450">
                    Property Developers
                  </Typography>
                  <Box sx={{ px: 10, position: "absolute", bottom: 20, right: 0.1 }}>
                    <Typography fontSize={10} sx={{ fontFamily: "Montserrat" }} color={"#F0EDE8"} fontWeight={"lighter"}
                      data-aos="fade-up" data-aos-duration="1200" data-aos-delay="450">
                      Gulf Land Property Developers (GLPD) studies, analyses, and exploits opportunities in the Dubai real estate market.
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </div>
        </Paper>
        <Grid container id='about us section' sx={{ height: "80vh", mt: 10 }} justifyContent={"center"}>
          <Grid item sm={12} sx={{ my: "auto", p: 2 }}>
            <Typography variant='h6' sx={{ fontFamily: "Crimson" }} data-aos="fade-up" data-aos-duration="1200" style={{ textAlign: "center" }}>
              About Us
            </Typography>
            <Typography variant='h5' data-aos="fade-up" data-aos-duration="1200" sx={{ textAlign: "center", fontFamily: "Crimson" }}>
              Committed to Excellence
            </Typography>
            <Box textAlign={"center"} justifyContent="center">
              <div style={{ borderBottom: "1px solid #0F0F0F", width: "50%", margin: "auto" }} data-aos="zoom-in" data-aos-duration="1200" data-aos-delay="50" />
            </Box>
            <Box data-aos="fade-up" data-aos-duration="1200">
              <Typography variant='body1' sx={{ my: 5, textAlign: "center", fontFamily: "Montserrat" }}>
                The company’s mission is to create value for its clients through
                offering and delivering strategic real estate assets. The total
                value of the GLPD portfolio is circa AED 400,000,000 measured
                via the cost of construction, out of which there is currently
                approximately AED 100,000,000 worth of projects under development.
              </Typography>
            </Box>
            <Box textAlign={"center"}>
              <Button
                color='inherit'
                sx={{ border: "rgba(15, 15, 15, 0.5)", borderWidth: 1, borderStyle: "solid", borderRadius: 0, mb: 5, p: 1, textTransform: "capitalize", width: 180, fontFamily: "Montserrat" }}
                disableRipple
                data-aos="fade-left"
                data-aos-duration="1200"
              >
                Why invest with us
              </Button>
            </Box>
            <Typography variant='h4' sx={{ textAlign: "center", fontFamily: "Crimson" }} data-aos="fade-up" data-aos-duration="1200" data-aos-delay="500" >
              Our Key Features
            </Typography>
            <Box textAlign={"center"} justifyContent="center">
              <div style={{ borderBottom: "1px solid #0F0F0F", width: "50%", margin: "auto" }} data-aos="zoom-in" data-aos-duration="1200" data-aos-delay="50" />
            </Box>
            <Grid container spacing={2} sx={{ mt: 4 }} justifyContent={"center"} data-aos="fade-up" data-aos-duration="1200" data-aos-delay="500">
              <Grid item >
                <Typography fontSize={14} sx={{ mb: 4, fontFamily: "Montserrat", fontSize: 13 }} >
                  - Premium Developments
                </Typography>
                <Typography fontSize={12} sx={{ fontFamily: "Montserrat", fontSize: 13 }}>
                  - Exceptional Experience
                </Typography>
              </Grid>
              <Grid item>
                <Typography fontSize={12} sx={{ mb: 4, fontFamily: "Montserrat", fontSize: 13 }}>
                  - World-Class Parteners
                </Typography>
                <Typography fontSize={12} sx={{ fontFamily: "Montserrat", fontSize: 13 }}>
                  - Professional Team
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Box height={550} position="relative" textAlign={"center"}>
          <Image
            src={"/homeAboutUsSection.png"}
            layout="fill"
            objectFit='contain'
            alt="Paradise hills"
            data-aos="fade-up" data-aos-duration="1200" data-aos-delay="450"
          />
        </Box>
        <Grid container justifyContent={"center"} id='why invest whith us section'>
          <Grid item sm={12} sx={{ p: 2 }}>
            <Typography variant='h4' sx={{ textAlign: "center", fontFamily: "Crimson" }} data-aos="fade-up" data-aos-duration="1200" data-aos-delay="500" >
              Why Invest With US
            </Typography>
            <Box textAlign={"center"} justifyContent="center">
              <div style={{ borderBottom: "1px solid #0F0F0F", width: "50%", margin: "auto" }} data-aos="zoom-in" data-aos-duration="1200" data-aos-delay="50" />
            </Box>
            <Grid container sx={{ mt: 4 }} justifyContent="center" spacing={2} data-aos="fade-up" data-aos-duration="1200" data-aos-delay="500">
              <Grid item>
                <Typography variant='body2' sx={{ mb: 4, fontFamily: "Montserrat", fontSize: 12 }} >
                  - Prime Locations in Dubai
                </Typography>
                <Typography variant='body2' sx={{ fontFamily: "Montserrat", fontSize: 12 }}>
                  - Top Quality Guaranteed
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant='body2' sx={{ mb: 4, fontFamily: "Montserrat", fontSize: 12 }}>
                  - Award Winning Properties
                </Typography>
                <Typography variant='body2' sx={{ fontFamily: "Montserrat", fontSize: 12 }}>
                  - Licensed & insured
                </Typography>
              </Grid>
            </Grid>
            <Typography
              variant='body2'
              textAlign={"center"}
              sx={{ my: 4, fontFamily: "Montserrat", fontSize: 12 }}
              data-aos="fade-up" data-aos-duration="1200" data-aos-delay="500"
            >
              - High-yielding and consistent returns
            </Typography>
            <Box textAlign={"center"}>
              <Button
                color='inherit'
                sx={{ border: "rgba(15, 15, 15, 0.5)", borderWidth: 1, borderStyle: "solid", borderRadius: 0, mb: 5, p: 1, textTransform: "capitalize", width: 180, fontFamily: "Montserrat" }}
                disableRipple
                data-aos="fade-up" data-aos-duration="1200" data-aos-delay="450"
              >
                Contact Us
              </Button>
            </Box>
          </Grid>
        </Grid>
        <Grid container style={{ backgroundColor: "#F0EDE8" }} justifyContent={"center"} spacing={1}>
          <Grid item sx={{ my: 3 }}>
            <Image
              src={"/homeWhyInvest1.png"}
              width={121}
              height={144}
              alt="Paradise hills"
              data-aos="fade-up" data-aos-duration="1200" data-aos-delay="450"
            />
          </Grid>
          <Grid item sx={{ my: 3 }}>
            <Image
              src={"/homeWhyInvest3.png"}
              width={121}
              height={144}
              alt="Paradise hills"
              data-aos="fade-up" data-aos-duration="1200" data-aos-delay="450"
            />
          </Grid>
          <Grid item sx={{ my: 3 }}>
            <Image
              src={"/homeWhyInvest2.png"}
              width={121}
              height={144}
              alt="Paradise hills"
              data-aos="fade-up" data-aos-duration="1200" data-aos-delay="450"
            />
          </Grid>
        </Grid>
        <Box justifyContent={"center"}>
          <Carousel
            width={200}
            height={400}
            animation='slide'
            NextIcon={<img src="/carouselRightIcon.png" alt='arrowRight' />}
            PrevIcon={<img src="/carouselLeftIcon.png" alt="arrowLeft" />}
            fullHeightHover={true}
            navButtonsAlwaysVisible
            navButtonsProps={{
              style: {
                backgroundColor: 'transparent',
                borderRadius: 0
              }
            }}
            IndicatorIcon={<img src='/carouselIcon.png' alt='carousel Icon' />}
            indicatorIconButtonProps={{
              style: {
                padding: '10px',
                color: 'black'
              }
            }}
            activeIndicatorIconButtonProps={{
              style: {
                color: 'black',
              }
            }}
            indicatorContainerProps={{
              style: {
                marginTop: '20px',
                textAlign: 'center'
              }
            }}

            sx={{ justifyContent: "center" }}
          >
            <img src='/homeWhyInvest1.png' width={425} height={480} alt="carousel 1st image" />
            <img src='/homeWhyInvest3.png' width={425} height={480} alt="carousel 3rd image" />
            <img src='/homeWhyInvest4.png' width={425} height={480} alt="carousel 4th image" />
            <img src='/homeWhyInvest2.png' width={425} height={480} alt="carousel 2nd image" />
          </Carousel>
        </Box>
        <Grid container id='paradise hills section' sx={{ backgroundColor: "#0F0F0F", mt: 2 }}>
          <Grid item sm={12} sx={{ my: "auto", p: 2 }}>
            <Typography variant='h5' sx={{ color: "white", pt: 4, pb: 1, textAlign: "center", fontFamily: "Crimson" }} data-aos="fade-up" data-aos-duration="1200" data-aos-delay="450">
              Our Recent Projects
            </Typography>
            <Box textAlign={"center"} justifyContent="center">
              <div style={{ borderBottom: "1px solid #FFF", width: "50%", margin: "auto", marginBottom: "20px" }} data-aos="zoom-in" data-aos-duration="1200" data-aos-delay="50" />
            </Box>
            <Image
              src={"/homeParadiseHills.png"}
              width={680}
              height={840}
              alt="Paradise hills"
              data-aos="fade-up" data-aos-duration="1200" data-aos-delay="450"
            />
            <Typography variant='h6' sx={{ color: "white", py: 4, fontFamily: "Crimson" }} data-aos="fade-up" data-aos-duration="1200" data-aos-delay="450" >
              Paradise Hills
            </Typography>
            <Box sx={{ mb: 6 }}>
              <Typography variant='body1' color={'white'} sx={{ fontFamily: "Montserrat" }} data-aos="fade-up" data-aos-duration="1200" data-aos-delay="450">
                Located in the heart of Dubai, Paradise Hills is a gated
                community featuring 170 villas and townhouses set amongst
                a verdant, tropical landscape. A landscape without parallel
                in the middle east, aims to offer the residents with a
                relaxing and soothing environment. A series of naturalistic
                streams and lakes will weave in and around the lush landscape,
                providing ever-present reflection and the soothing sound of moving wate
              </Typography>
            </Box>
            <Box textAlign={"center"}>
              <a href='https://drive.google.com/uc?export=download&id=1oV55-D78M-AdmYtBrVXRyw15670Zb4zC' rel='noopener'>
                <Typography variant='h6' sx={{ color: "#FFF" }}>
                  Download Brochure
                </Typography>
              </a>
              <a href='https://drive.google.com/uc?export=download&id=1oV55-D78M-AdmYtBrVXRyw15670Zb4zC' rel='noopener'>
                <Image
                  src={"/pdf.png"}
                  width={'60'}
                  height={"60"}
                  alt="pdf icon"
                />
              </a>
            </Box>
          </Grid>
        </Grid>
        <Grid container id='paradise hills plans section' >
          <Grid item sm={12} sx={{ my: "auto", mx: "auto", p: 1 }}>
            <Typography variant='h4' textAlign={"center"} sx={{ mb: 1, mt: 5, fontFamily: "Crimson" }} data-aos="fade-up" data-aos-duration="800">
              Our Unit Types
            </Typography>
            <Box textAlign={"center"} justifyContent="center">
              <div style={{ borderBottom: "1px solid #0F0F0F", width: "50%", margin: "auto", marginBottom: "20px" }} data-aos="zoom-in" data-aos-duration="1200" data-aos-delay="50" />
            </Box>
            <Grid container justifyContent={"center"} spacing={1}>
              <Grid item sm={12} sx={{ my: "auto", mx: "auto" }}>
                <Image
                  src={"/paradiseHillsCalm.png"}
                  width={728}
                  height={898}
                  alt="Calm floor plane"
                  data-aos="fade-up" data-aos-duration="1200"
                />
                <Typography variant='h6' sx={{ mb: 3, fontFamily: "Crimson" }} data-aos="fade-up" data-aos-duration="800" >
                  Paradise Hills
                </Typography>
              </Grid>
              <Grid item xs={5} >
                <Box
                  sx={{
                    mb: 3,
                    border: "rgba(149, 157, 165, 0.2)",
                    p: 1,
                    borderStyle: "solid",
                    backgroundColor: "#FAFAFA",
                    boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
                    ":hover": {
                      backgroundColor: "#FAFAFA",
                      boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px"
                    },
                    ":active": {
                      backgroundColor: "#FAFAFA",
                      boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px"
                    }
                  }}
                >
                  <Typography variant='h6' data-aos="fade-up" data-aos-duration="800" sx={{ fontFamily: "Montserrat" }}>
                    CALM
                  </Typography>
                  <Typography sx={{ fontSize: 10, fontFamily: "Montserrat" }} data-aos="zoom-in" data-aos-duration="1200" data-aos-delay="450">
                    Townhouses 3 Bedrooms
                  </Typography>
                </Box>

              </Grid>
              <Grid item xs={5}>
                <Box
                  sx={{
                    mb: 3,
                    p: 1,
                    ":hover": {
                      backgroundColor: "#FAFAFA",
                      boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
                      border: "rgba(149, 157, 165, 0.2)",
                      borderStyle: "solid",
                    },
                    ":active": {
                      backgroundColor: "#FAFAFA",
                      boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
                      border: "rgba(149, 157, 165, 0.2)",
                      borderStyle: "solid",
                    }
                  }}
                >
                  <Typography variant='h6' data-aos="fade-up" data-aos-duration="800" sx={{ fontFamily: "Montserrat" }}>
                    HEAVEN
                  </Typography>
                  <Typography sx={{ fontSize: 9, fontFamily: "Montserrat" }} data-aos="zoom-in" data-aos-duration="1200" data-aos-delay="450">
                    Independent Villas 4 Bedrooms
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={5}>
                <Box
                  sx={{
                    mb: 3,
                    p: 1,
                    ":hover": {
                      backgroundColor: "#FAFAFA",
                      boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
                      border: "rgba(149, 157, 165, 0.2)",
                      borderStyle: "solid",
                    },
                    ":active": {
                      backgroundColor: "#FAFAFA",
                      boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
                      border: "rgba(149, 157, 165, 0.2)",
                      borderStyle: "solid",
                    }
                  }}
                >
                  <Typography variant='h6' data-aos="fade-up" data-aos-duration="800" sx={{ fontFamily: "Montserrat" }}>
                    HARMONY
                  </Typography>
                  <Typography sx={{ fontSize: 10, fontFamily: "Montserrat" }} data-aos="zoom-in" data-aos-duration="1200" data-aos-delay="450">
                    Townhouses 4 Bedrooms
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={5}>
                <Box
                  sx={{
                    mb: 3,
                    p: 1,
                    ":hover": {
                      backgroundColor: "#FAFAFA",
                      boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
                      border: "rgba(149, 157, 165, 0.2)",
                      borderStyle: "solid",
                    },
                    ":active": {
                      backgroundColor: "#FAFAFA",
                      boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
                      border: "rgba(149, 157, 165, 0.2)",
                      borderStyle: "solid",
                    }
                  }}
                >
                  <Typography variant='h6' data-aos="fade-up" data-aos-duration="800" sx={{ fontFamily: "Montserrat" }}>
                    ETERNITY
                  </Typography>
                  <Typography sx={{ fontSize: 9, fontFamily: "Montserrat" }} data-aos="zoom-in" data-aos-duration="1200" data-aos-delay="450">
                    Independent Villas 5 Bedrooms
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid container id='sl2 section' sx={{ backgroundColor: "#0F0F0F", mt: 2 }}>
          <Grid item md={5} sx={{ my: "auto", p: 2, mt: 5 }}>
            <Typography variant='h5' sx={{ color: "white", pt: 4, pb: 1, textAlign: "center", fontFamily: "Crimson" }} data-aos="fade-up" data-aos-duration="1200" data-aos-delay="450">
              Our Recent Projects
            </Typography>
            <Box textAlign={"center"} justifyContent="center">
              <div style={{ borderBottom: "1px solid #FFF", width: "50%", margin: "auto", marginBottom: "20px" }} ddata-aos="zoom-in" data-aos-duration="1200" data-aos-delay="5000" />
            </Box>
            <Grid item md={5} sx={{ my: "auto" }}>
              <Image
                src={"/homeSL2.png"}
                width={640}
                height={840}
                alt="Serenity Lakes 2"
                data-aos="fade-up" data-aos-duration="1200" data-aos-delay="0"
              />
            </Grid>
            <Typography variant='h6' sx={{ py: 4, color: "white", fontFamily: "Crimson" }} data-aos="fade-up" data-aos-duration="1200" data-aos-delay="450">
              Serenity Lakes 2
            </Typography>
            <Box sx={{ mb: 6 }}>
              <Typography variant='body1' sx={{ fontFamily: "Montserrat" }} data-aos="fade-up" color={"white"} data-aos-duration="1200" data-aos-delay="450">
                Serenity Lakes offers studio, one and two bedroom
                residential apartments, as well as stunning three
                bedroom duplexes. The modern design relies on open
                spaces and clear views which is reflected in the
                generous windows sizes which can be seen in all elevations.
                This allows the natural light to pass into all spaces
                without compromising privacy, as the louvers are designed
                to contrast the modern elements through the traditional
                touch.The wood, aluminum, glazing, marble, porcelain,
                and ceramic tiles are creatively blended to work in harmony
                in order to provide the inner spaces with a unique sense of
                warmness while meeting the durability and quality requirements.
              </Typography>
            </Box>
            <Box textAlign={"center"}>
              <a href='https://drive.google.com/uc?export=download&id=1tw-lhNkFxTkVZaseN5_SXR7wB3KLmn4n' rel='noopener'>
                <Typography variant='h6' sx={{ color: "#FFF" }}>
                  Download Brochure
                </Typography>
              </a>
              <a href='https://drive.google.com/uc?export=download&id=1tw-lhNkFxTkVZaseN5_SXR7wB3KLmn4n' rel='noopener'>
                <Image
                  src={"/pdf.png"}
                  width={'60'}
                  height={"60"}
                  alt="pdf icon"
                />
              </a>
            </Box>
          </Grid>
        </Grid>
        <Grid container id='sl2 plans section'>
          <Grid item sm={12} sx={{ my: "auto", mx: "auto", p: 1 }}>
            <Typography variant='h4' textAlign={"center"} sx={{ m1: 5, mt: 5, fontFamily: "Crimson" }} data-aos="fade-up" data-aos-duration="800">
              Our Unit Types
            </Typography>
            <Box textAlign={"center"} justifyContent="center">
              <div style={{ borderBottom: "1px solid #0F0F0F", width: "50%", margin: "auto", marginBottom: "20px" }} data-aos="zoom-in" data-aos-duration="1200" data-aos-delay="50" />
            </Box>
            <Grid item md={5} sx={{ my: "auto", mx: "auto" }}>
              <Image
                src={"/sl2Studio.png"}
                width={782}
                height={898}
                alt="studio floor plan"
                data-aos="fade-up" data-aos-duration="1200"
              />
            </Grid>
            <Typography variant='h5' sx={{ mb: 3, fontFamily: "Crimson" }} data-aos="fade-up" data-aos-duration="800">
              Serenity Lakes 2
            </Typography>
            <Grid container justifyContent={"center"} spacing={1}>
              <Grid item xs={5}>
                <Box
                  sx={{
                    mb: 3,
                    border: "rgba(149, 157, 165, 0.2)",
                    p: 1,
                    borderStyle: "solid",
                    backgroundColor: "#FAFAFA",
                    boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
                    ":hover": {
                      backgroundColor: "#FAFAFA",
                      boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px"
                    },
                    ":active": {
                      backgroundColor: "#FAFAFA",
                      boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px"
                    }
                  }}
                >
                  <Typography sx={{ fontSize: 18, fontFamily: "Montserrat" }} data-aos="fade-up" data-aos-duration="800">
                    STUDIO
                  </Typography>
                  <Typography sx={{ fontSize: 10, fontFamily: "Montserrat" }} data-aos="zoom-in" data-aos-duration="1200" data-aos-delay="450">
                    Ground Floor
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={5}>
                <Box
                  sx={{
                    mb: 3,
                    p: 1,
                    ":hover": {
                      backgroundColor: "#FAFAFA",
                      boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
                      border: "rgba(149, 157, 165, 0.2)",
                      borderStyle: "solid",
                    },
                    ":active": {
                      backgroundColor: "#FAFAFA",
                      boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
                      border: "rgba(149, 157, 165, 0.2)",
                      borderStyle: "solid",
                    }
                  }}
                >
                  <Typography sx={{ fontSize: 14, mb: 1, fontFamily: "Montserrat" }} data-aos="fade-up" data-aos-duration="800">
                    2 BEDROOM LOFT
                  </Typography>
                  <Typography sx={{ fontSize: 10, fontFamily: "Montserrat" }} data-aos="zoom-in" data-aos-duration="1200" data-aos-delay="450">
                    Floor 4
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={5}>
                <Box
                  sx={{
                    mb: 3,
                    p: 1,
                    ":hover": {
                      backgroundColor: "#FAFAFA",
                      boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
                      border: "rgba(149, 157, 165, 0.2)",
                      borderStyle: "solid",
                    },
                    ":active": {
                      backgroundColor: "#FAFAFA",
                      boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
                      border: "rgba(149, 157, 165, 0.2)",
                      borderStyle: "solid",
                    }
                  }}
                >
                  <Typography sx={{ fontSize: 14, fontFamily: "Montserrat" }} data-aos="fade-up" data-aos-duration="800">
                    1 BEDROOM APT
                  </Typography>
                  <Typography sx={{ fontSize: 10, fontFamily: "Montserrat" }} data-aos="zoom-in" data-aos-duration="1200" data-aos-delay="450" >
                    Floor 1, 2 & 3
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={5}>
                <Box
                  sx={{
                    mb: 3,
                    p: 1,
                    ":hover": {
                      backgroundColor: "#FAFAFA",
                      boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
                      border: "rgba(149, 157, 165, 0.2)",
                      borderStyle: "solid",
                    },
                    ":active": {
                      backgroundColor: "#FAFAFA",
                      boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
                      border: "rgba(149, 157, 165, 0.2)",
                      borderStyle: "solid",
                    }
                  }}
                >
                  <Typography sx={{ fontSize: 14, fontFamily: "Montserrat" }} data-aos="fade-up" data-aos-duration="800">
                    2 BEDROOM LOFT
                  </Typography>
                  <Typography sx={{ fontSize: 10, fontFamily: "Montserrat" }} data-aos="zoom-in" data-aos-duration="1200" data-aos-delay="450">
                    Duplex Upper Floor
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid container id='sl5 section' sx={{ backgroundColor: "#0F0F0F", mt: 2 }}>
          <Grid item sm={12} sx={{ my: "auto", mt: 5, p: 2 }} data-aos="fade-up" data-aos-duration="1200" data-aos-delay="450">
            <Typography variant='h5' sx={{ color: "white", pt: 4, pb: 1, textAlign: "center", fontFamily: "Crimson" }}>
              Our Recent Projects
            </Typography>
            <Box textAlign={"center"} justifyContent="center">
              <div style={{ borderBottom: "1px solid #FFF", width: "50%", margin: "auto", marginBottom: "20px" }} data-aos="zoom-in" data-aos-duration="1200" data-aos-delay="50" />
            </Box>
            <Grid item md={5} sx={{ my: "auto" }}>
              <Image
                src={"/homeSL5.png"}
                width={640}
                height={840}
                alt="Serenity lakes 5"
                data-aos="fade-up" data-aos-duration="1200" data-aos-delay="0"
              />
            </Grid>
            <Typography variant='h6' sx={{ py: 4, color: "white", fontFamily: "Crimson" }} data-aos="fade-up" data-aos-duration="1200" data-aos-delay="450" >
              Serenity Lakes 5
            </Typography>
            <Box sx={{ mb: 6 }}>
              <Typography variant='body1' sx={{ fontFamily: "Montserrat" }} data-aos="fade-up" color={"white"} data-aos-duration="1200" data-aos-delay="450">
                Serenity Lakes offers studio, one and two bedroom
                residential apartments, as well as stunning three
                bedroom duplexes. The modern design relies on open
                spaces and clear views which is reflected in the
                generous windows sizes which can be seen in all elevations.
                This allows the natural light to pass into all spaces
                without compromising privacy, as the louvers are designed
                to contrast the modern elements through the traditional
                touch.The wood, aluminum, glazing, marble, porcelain,
                and ceramic tiles are creatively blended to work in harmony
                in order to provide the inner spaces with a unique sense of
                warmness while meeting the durability and quality requirements.
              </Typography>
            </Box>
            <Box textAlign={"center"}>
              <a href='https://drive.google.com/uc?export=download&id=1tw-lhNkFxTkVZaseN5_SXR7wB3KLmn4n' rel='noopener'>
                <Typography variant='h6' sx={{ color: "#FFF" }}>
                  Download Brochure
                </Typography>
              </a>
              <a href='https://drive.google.com/uc?export=download&id=1tw-lhNkFxTkVZaseN5_SXR7wB3KLmn4n' rel='noopener'>
                <Image
                  src={"/pdf.png"}
                  width={'60'}
                  height={"60"}
                  alt="pdf icon"
                />
              </a>
            </Box>
          </Grid>
        </Grid>
        <Grid container id='sl5 plans section' justifyContent={"center"}>
          <Grid item sm={12} sx={{ my: "auto", mx: "auto", p: 2 }}>
            <Typography variant='h4' textAlign={"center"} sx={{ mb: 1, mt: 5, fontFamily: "Crimson" }} data-aos="fade-up" data-aos-duration="800">
              Our Unit Types
            </Typography>
            <Box textAlign={"center"} justifyContent="center">
              <div style={{ borderBottom: "1px solid #0F0F0F", width: "50%", margin: "auto", marginBottom: "20px" }} data-aos="zoom-in" data-aos-duration="1200" data-aos-delay="50" />
            </Box>
            <Grid item md={5} sx={{ my: "auto", mx: "auto" }}>
              <Image
                src={"/sl5Studio.png"}
                width={728}
                height={898}
                alt="studio floor plan"
                data-aos="fade-up" data-aos-duration="1200" data-aos-delay="0"
              />
            </Grid>
            <Typography variant='h5' sx={{ mb: 3, fontFamily: "Crimson" }} data-aos="fade-up" data-aos-duration="800">
              Serenity Lakes 5
            </Typography>
            <Grid container justifyContent={"center"} spacing={1}>
              <Grid item xs={5}>
                <Box
                  sx={{
                    mb: 3,
                    border: "rgba(149, 157, 165, 0.2)",
                    p: 1,
                    borderStyle: "solid",
                    backgroundColor: "#FAFAFA",
                    boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
                    ":hover": {
                      backgroundColor: "#FAFAFA",
                      boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px"
                    },
                    ":active": {
                      backgroundColor: "#FAFAFA",
                      boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px"
                    }
                  }}
                >
                  <Typography sx={{ fontSize: 18, fontFamily: "Montserrat" }} data-aos="fade-up" data-aos-duration="800">
                    STUDIO
                  </Typography>
                  <Typography sx={{ fontSize: 10, fontFamily: "Montserrat" }} data-aos="zoom-in" data-aos-duration="1200" data-aos-delay="450">
                    Ground Floor
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={5}>
                <Box
                  sx={{
                    mb: 3,
                    p: 1,
                    ":hover": {
                      backgroundColor: "#FAFAFA",
                      boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
                      border: "rgba(149, 157, 165, 0.2)",
                      borderStyle: "solid",
                    },
                    ":active": {
                      backgroundColor: "#FAFAFA",
                      boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
                      border: "rgba(149, 157, 165, 0.2)",
                      borderStyle: "solid",
                    }
                  }}
                >
                  <Typography sx={{ fontSize: 14, fontFamily: "Montserrat" }} data-aos="fade-up" data-aos-duration="800" >
                    2 BEDROOM APT
                  </Typography>
                  <Typography sx={{ fontSize: 10, fontFamily: "Montserrat" }} data-aos="zoom-in" data-aos-duration="1200" data-aos-delay="450">
                    Floor 2, 3
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={5}>
                <Box
                  sx={{
                    mb: 3,
                    p: 1,
                    ":hover": {
                      backgroundColor: "#FAFAFA",
                      boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
                      border: "rgba(149, 157, 165, 0.2)",
                      borderStyle: "solid",
                    },
                    ":active": {
                      backgroundColor: "#FAFAFA",
                      boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
                      border: "rgba(149, 157, 165, 0.2)",
                      borderStyle: "solid",
                    }
                  }}
                >
                  <Typography sx={{ fontSize: 14, fontFamily: "Montserrat" }} data-aos="fade-up" data-aos-duration="800">
                    1 BEDROOM APT
                  </Typography>
                  <Typography sx={{ fontSize: 10, fontFamily: "Montserrat" }} data-aos="zoom-in" data-aos-duration="1200" data-aos-delay="450">
                    Floor 1
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={5}>
                <Box
                  sx={{
                    mb: 3,
                    p: 1,
                    ":hover": {
                      backgroundColor: "#FAFAFA",
                      boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
                      border: "rgba(149, 157, 165, 0.2)",
                      borderStyle: "solid",
                    },
                    ":active": {
                      backgroundColor: "#FAFAFA",
                      boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
                      border: "rgba(149, 157, 165, 0.2)",
                      borderStyle: "solid",
                    }
                  }}
                >
                  <Typography sx={{ fontSize: 12, fontFamily: "Montserrat" }} data-aos="fade-up" data-aos-duration="800">
                    STUDIO POOL VIEW
                  </Typography>
                  <Typography sx={{ fontSize: 10, fontFamily: "Montserrat" }} data-aos="zoom-in" data-aos-duration="1200" data-aos-delay="450">
                    Floor 4
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <GetInTouchMobile />
        <OurOfficeMobile />
        <FooterMobile />
      </div>
    )
  }

  return (
    <div>
      <div>
        <Head>
          <title>Gulf Land Property Developers - Home</title>
          <meta name="description" content="Gulf Land Property Developers (GLPD) studies, analyses, and exploits opportunities in the Dubai real estate market."></meta>
          <link rel="icon" type="image/icon" sizes="16x16" href="/16x16.ico" />
          <link rel="icon" type="image/icon" sizes="32x32" href="/32x32.ico" />
          <link rel="icon" type="image/icon" sizes="48x48" href="/48x48.ico" />
          <meta property="og:title" content="Gulf Land Property Developers (GLPD)" />
          <meta property="og:description" content="Gulf Land Property Developers (GLPD) studies, analyses, and exploits opportunities in the Dubai real estate market." />
          <meta property="og:url" content="http://glp.ae/" />
          <meta property="og:type" content="website" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
          <link href="https://fonts.googleapis.com/css2?family=Crimson+Pro&family=Montserrat&display=swap" rel="stylesheet"></link>
        </Head>
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="absolute" color='transparent' elevation={0} sx={{ mt: 2 }}>
            <Container>
              <Toolbar>
                <Image
                  src="/GulfLandLogo.png"
                  alt="GLPD LOGO"
                  width={181}
                  height={42}
                />
                <div style={{ flexGrow: 1 }}></div>
                <Button color='inherit' disableRipple sx={{ textTransform: "capitalize", color: "white", fontFamily: "Montserrat" }}>
                  <Link href={"/"}>Home</Link>
                </Button>
                <Button color='inherit' disableRipple sx={{ textTransform: "capitalize", ml: 2, color: "#DAD3C7", fontFamily: "Montserrat" }}>
                  <Link href={"about-us"}>About Us</Link>
                </Button>
                <Button color='inherit' disableRipple sx={{ textTransform: "capitalize", ml: 2, color: "#DAD3C7", fontFamily: "Montserrat" }}>
                  <Link href={"why-dubai"}>Why Dubai</Link>
                </Button>
                <Button color='inherit' disableRipple sx={{ textTransform: "capitalize", ml: 2, color: "#DAD3C7", fontFamily: "Montserrat" }}>
                  Our Properties
                </Button>
                <Button color='inherit' disableRipple sx={{ textTransform: "capitalize", ml: 2, color: "#DAD3C7", fontFamily: "Montserrat" }}>
                  <Link href={"contact-us"}>Contact</Link>
                </Button>
              </Toolbar>
            </Container>
          </AppBar>
        </Box>
        <Paper elevation={0} id='hero section'>
          <div className='heroVideo'>
            <video
              autoPlay
              muted
              loop
              style={{ objectFit: "contain", width: "100vw", marginTop: '-5.5%' }}
              poster='/firstFrame.png'
            >
              <source src='https://drive.google.com/uc?export=download&id=1xsJSPC9Uyyun11c3mO9UEkXi9NnymKcA' />
            </video>
            <Grid height={"100vh"} container justifyContent={"center"} className='overlay'>
              <Grid item md={12} sx={{ m: "auto" }}>
                <Box textAlign={"center"}>
                  <Typography sx={{ fontSize: 180, fontFamily: "Crimson" }} color={"#F0EDE8"}
                    data-aos="fade-up" data-aos-duration="1200" data-aos-delay="0">
                    GULF LAND
                  </Typography>
                  <Typography fontSize={60} sx={{ fontFamily: "Crimson" }} color={"#F0EDE8"} lineHeight={0} fontWeight={"lighter"}
                    data-aos="fade-up" data-aos-duration="1200" data-aos-delay="450">
                    Property Developers
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </div>
        </Paper>
        <Grid container height={"100vh"} id='about us section' justifyContent={"flex-end"}>
          <Grid item md={5} sx={{ my: "auto" }}>
            <Typography variant='h6' data-aos="fade-up" data-aos-duration="1200" sx={{ fontFamily: "Crimson" }}>
              About Us
            </Typography>
            <Typography variant='h4' data-aos="fade-up" data-aos-duration="1200" sx={{ fontFamily: "Crimson" }}>
              Committed to Excellence
            </Typography>
            <Box width={660} data-aos="fade-up" data-aos-duration="1200">
              <Typography variant='body2' sx={{ my: 5, fontSize: 20, fontFamily: "Montserrat" }}>
                The company’s mission is to create value for its clients through
                offering and delivering strategic real estate assets. The total
                value of the GLPD portfolio is circa AED 400,000,000 measured
                via the cost of construction, out of which there is currently
                approximately AED 100,000,000 worth of projects under development.
              </Typography>
            </Box>
            <Button
              color='inherit'
              sx={{ border: "gray", borderStyle: "solid", borderRadius: 0, mb: 5, p: 2, textTransform: "capitalize", width: 220, fontFamily: "Montserrat" }}
              disableRipple
              data-aos="fade-left"
              data-aos-duration="1200"
            >
              Why invest with us
            </Button>
            <Typography variant='h5' sx={{ mb: 4, fontFamily: "Crimson" }} data-aos="fade-up" data-aos-duration="1200" data-aos-delay="500" >
              Our Key Features
            </Typography>
            <Grid container spacing={4} data-aos="fade-up" data-aos-duration="1200" data-aos-delay="500">
              <Grid item>
                <Typography variant='body1' sx={{ mb: 4, fontFamily: "Montserrat" }} >
                  - Premium Developments
                </Typography>
                <Typography variant='body1' sx={{ fontFamily: "Montserrat" }}>
                  - Exceptional Experience
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant='body1' sx={{ mb: 4, fontFamily: "Montserrat" }}>
                  - World-Class Parteners
                </Typography>
                <Typography variant='body1' sx={{ fontFamily: "Montserrat" }}>
                  - Professional Team
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item md={6} sx={{
            backgroundImage: `url("/homeAboutUsSection.png")`,
            backgroundPosition: "center",
            backgroundSize: "cover"
          }}>
            {/* <Image
              src={"/homeAboutUsSection.png"}
              alt='nothing'
              width={920}
              height={1080}
            /> */}
          </Grid>
        </Grid>
        <Grid container height={"100vh"} justifyContent={"center"} id='why invest whith us section' style={{ backgroundColor: "#0C244C" }}>
          <Grid item md={5} sx={{ my: "auto" }} >
            <Typography variant='h3' sx={{ fontFamily: "Crimson" }} data-aos="fade-up" data-aos-duration="1200" data-aos-delay="400" color='white'>
              Why to Invest with Us
            </Typography>
            <Typography variant='h6' sx={{ my: 4, ml: 4, fontFamily: "Montserrat" }} data-aos="fade-up" data-aos-duration="1200" data-aos-delay="450" color='white'>
              - Prime Locations in Dubai
            </Typography>
            <Typography variant='h6' sx={{ mb: 4, ml: 4, fontFamily: "Montserrat" }} data-aos="fade-up" data-aos-duration="1200" data-aos-delay="450" color='white'>
              - High-yielding and consistent returns
            </Typography>
            <Typography variant='h6' sx={{ mb: 4, ml: 4, fontFamily: "Montserrat" }} data-aos="fade-up" data-aos-duration="1200" data-aos-delay="450" color='white'>
              - Award Winning Properties
            </Typography>
            <Typography variant='h6' sx={{ mb: 4, ml: 4, fontFamily: "Montserrat" }} data-aos="fade-up" data-aos-duration="1200" data-aos-delay="450" color='white'>
              - Licensed & insured
            </Typography>
            <Typography variant='h6' sx={{ mb: 4, ml: 4, fontFamily: "Montserrat" }} data-aos="fade-up" data-aos-duration="1200" data-aos-delay="450" color='white'>
              - Top Quality Guaranteed
            </Typography>
            <Button
              color='inherit'
              sx={{ border: "white", borderStyle: "solid", borderRadius: 0, borderWidth: 1, mb: 5, p: 2, textTransform: "capitalize", width: 220, color: "white", fontFamily: "Montserrat" }}
              disableRipple
              data-aos="fade-up" data-aos-duration="1200" data-aos-delay="450"
            >
              Contact Us
            </Button>
          </Grid>
          <Grid item md={5} sx={{ mt: "auto", mb: "auto" }}>
            <Grid container justifyContent={"center"} rowGap={0}>
              <Grid item md={4} sx={{ my: "auto" }}>
                <Image
                  src={"/homeWhyInvest1.png"}
                  width={320}
                  height={400}
                  alt="why invest with us 1"
                  data-aos="fade-up" data-aos-duration="1200" data-aos-delay="450"
                />
                <Image
                  src={"/homeWhyInvest3.png"}
                  width={320}
                  height={400}
                  alt="why invest with us 2"
                  data-aos="fade-up" data-aos-duration="1200" data-aos-delay="550"
                />
              </Grid>
              <Grid item md={4}>
                <Image
                  src={"/homeWhyInvest2.png"}
                  width={320}
                  height={400}
                  alt="why invest with us 3"
                  data-aos="fade-up" data-aos-duration="1200" data-aos-delay="650"
                />
                <Image
                  src={"/homeWhyInvest4.png"}
                  width={320}
                  height={400}
                  alt="why invest with us 4"
                  data-aos="fade-up" data-aos-duration="1200" data-aos-delay="750"
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid container height={"100vh"} id='carousel section' justifyContent={"center"} >
          <Grid item md={7} sx={{ mx: "auto", my: "auto" }}>
            <Carousel
              height={"840px"}
              style={{ justifyContent: "center" }}
              animation='slide'
              NextIcon={<img src="/carouselRightIcon.png" alt='arrowRight' />}
              PrevIcon={<img src="/carouselLeftIcon.png" alt="arrowLeft" />}
              fullHeightHover={false}
              navButtonsAlwaysVisible
              navButtonsProps={{
                style: {
                  backgroundColor: 'rgba(99, 99, 99, 0.5)',
                  borderRadius: 50
                }
              }}
              IndicatorIcon={<img src='/carouselIcon.png' alt='carousel Icon' />}
              indicatorIconButtonProps={{
                style: {
                  padding: '10px',
                  color: 'black'
                }
              }}
              activeIndicatorIconButtonProps={{
                style: {
                  color: 'black',
                }
              }}
              indicatorContainerProps={{
                style: {
                  marginTop: '20px',
                  textAlign: 'center'
                }
              }}

              sx={{ alignItems: "center" }}
            >
              <img src='/homeCarousel1.png' width={1440} height={840} alt="carousel 1st image" />
              <img src='/homeCarousel2.png' width={1440} height={840} alt="carousel 2nd image" />
              <img src='/homeCarousel3.png' width={1440} height={840} alt="carousel 3rd image" />
            </Carousel>
          </Grid>
        </Grid>
        <Grid container height={"100vh"} justifyContent={"center"} id='paradise hills section' style={{ backgroundColor: "#0F0F0F" }}>
          <Grid item md={5} sx={{ my: "auto", pl: 10 }}>
            <Typography variant='h3' sx={{ fontFamily: "Crimson" }} data-aos="fade-up" data-aos-duration="1200" data-aos-delay="450" color="white">
              Our Recent Projects
            </Typography>
            <Typography variant='h5' sx={{ py: 6, fontFamily: "Crimson" }} data-aos="fade-up" data-aos-duration="1200" data-aos-delay="450" color="white" >
              Paradise Hills
            </Typography>
            <Box width={"60%"}>
              <Typography variant='body1' sx={{ fontFamily: "Montserrat" }} data-aos="fade-up" data-aos-duration="1200" data-aos-delay="450" color="white">
                Located in the heart of Dubai, Paradise Hills is a gated
                community featuring 170 villas and townhouses set amongst
                a verdant, tropical landscape. A landscape without parallel
                in the middle east, aims to offer the residents with a
                relaxing and soothing environment. A series of naturalistic
                streams and lakes will weave in and around the lush landscape,
                providing ever-present reflection and the soothing sound of moving wate
              </Typography>
            </Box>
            <Box sx={{ mt: 5 }} data-aos="fade-up" data-aos-duration="1200" data-aos-delay="450">
              <a href='https://drive.google.com/uc?export=download&id=1oV55-D78M-AdmYtBrVXRyw15670Zb4zC' rel='noopener'>
                <Typography variant='h6' sx={{ color: "#FFF" }}>
                  Download Brochure
                </Typography>
              </a>
              <a href='https://drive.google.com/uc?export=download&id=1oV55-D78M-AdmYtBrVXRyw15670Zb4zC' rel='noopener'>
                <Image
                  src={"/pdf.png"}
                  width={'60'}
                  height={"60"}
                  alt="pdf icon"
                />
              </a>
            </Box>
          </Grid>
          <Grid item md={5} sx={{ my: "auto" }}>
            <Box height={840} position="relative" textAlign={"center"}>
              <Image
                src={"/homeParadiseHills.png"}
                layout="fill"
                objectFit='contain'
                alt="Paradise hills"
                data-aos="fade-up" data-aos-duration="1200" data-aos-delay="450"
              />
            </Box>
          </Grid>
        </Grid>
        <Grid container height={"100vh"} id='paradise hills plans section' justifyContent={"center"}>
          <Grid item md={5} sx={{ my: "auto", mx: "auto", pl: 20 }}>
            <Image
              src={"/paradiseHillsCalm.png"}
              width={650}
              height={850}
              alt="Calm floor plane"
              data-aos="fade-up" data-aos-duration="1200"
            />
          </Grid>
          <Grid item md={5} sx={{ my: "auto", mx: "auto" }}>
            <Typography variant='h3' sx={{ mb: 5, fontFamily: "Crimson" }} data-aos="fade-up" data-aos-duration="800">
              Our Unit Types
            </Typography>
            <Typography variant='h5' sx={{ mb: 3, fontFamily: "Crimson" }} data-aos="fade-up" data-aos-duration="800" >
              Paradise Hills
            </Typography>
            <Grid container>
              <Grid item md={4} sx={{ mr: 3 }}>
                <Box
                  sx={{
                    mb: 3,
                    border: "rgba(149, 157, 165, 0.2)",
                    p: 1,
                    borderStyle: "solid",
                    backgroundColor: "#FAFAFA",
                    boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
                    ":hover": {
                      backgroundColor: "#FAFAFA",
                      boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px"
                    },
                    ":active": {
                      backgroundColor: "#FAFAFA",
                      boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px"
                    }
                  }}
                >
                  <Typography variant='h6' sx={{ fontFamily: "Montserrat" }} data-aos="fade-up" data-aos-duration="800">
                    CALM
                  </Typography>
                  <Typography variant="body2" sx={{ fontFamily: "Montserrat" }} data-aos="zoom-in" data-aos-duration="1200" data-aos-delay="450">
                    Townhouses 3 Bedrooms
                  </Typography>
                </Box>
                <Box
                  sx={{
                    mb: 3,
                    p: 1,
                    ":hover": {
                      backgroundColor: "#FAFAFA",
                      boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
                      border: "rgba(149, 157, 165, 0.2)",
                      borderStyle: "solid",
                    },
                    ":active": {
                      backgroundColor: "#FAFAFA",
                      boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
                      border: "rgba(149, 157, 165, 0.2)",
                      borderStyle: "solid",
                    }
                  }}
                >
                  <Typography variant='h6' sx={{ fontFamily: "Montserrat" }} data-aos="fade-up" data-aos-duration="800">
                    HEAVEN
                  </Typography>
                  <Typography variant='body2' sx={{ fontFamily: "Montserrat" }} data-aos="zoom-in" data-aos-duration="1200" data-aos-delay="450">
                    Independent Villas 4 Bedrooms
                  </Typography>
                </Box>
              </Grid>
              <Grid item md={4}>
                <Box
                  sx={{
                    mb: 3,
                    p: 1,
                    ":hover": {
                      backgroundColor: "#FAFAFA",
                      boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
                      border: "rgba(149, 157, 165, 0.2)",
                      borderStyle: "solid",
                    },
                    ":active": {
                      backgroundColor: "#FAFAFA",
                      boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
                      border: "rgba(149, 157, 165, 0.2)",
                      borderStyle: "solid",
                    }
                  }}
                >
                  <Typography variant='h6' sx={{ fontFamily: "Montserrat" }} data-aos="fade-up" data-aos-duration="800">
                    HARMONY
                  </Typography>
                  <Typography variant='body2' sx={{ fontFamily: "Montserrat" }} data-aos="zoom-in" data-aos-duration="1200" data-aos-delay="450">
                    Townhouses 4 Bedrooms
                  </Typography>
                </Box>
                <Box
                  sx={{
                    mb: 3,
                    p: 1,
                    ":hover": {
                      backgroundColor: "#FAFAFA",
                      boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
                      border: "rgba(149, 157, 165, 0.2)",
                      borderStyle: "solid",
                    },
                    ":active": {
                      backgroundColor: "#FAFAFA",
                      boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
                      border: "rgba(149, 157, 165, 0.2)",
                      borderStyle: "solid",
                    }
                  }}
                >
                  <Typography variant='h6' sx={{ fontFamily: "Montserrat" }} data-aos="fade-up" data-aos-duration="800">
                    ETERNITY
                  </Typography>
                  <Typography variant='body2' sx={{ fontFamily: "Montserrat" }} data-aos="zoom-in" data-aos-duration="1200" data-aos-delay="450">
                    Independent Villas 5 Bedrooms
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid container height={"100vh"} id='sl2 section' justifyContent={"center"} style={{ backgroundColor: "#0F0F0F" }}>
          <Grid item md={5} sx={{ my: "auto", pl: 10 }}>
            <Typography variant='h3' sx={{ fontFamily: "Crimson" }} data-aos="fade-up" data-aos-duration="1200" data-aos-delay="450" color="white">
              Our Recent Projects
            </Typography>
            <Typography variant='h5' sx={{ py: 6, fontFamily: "Crimson" }} data-aos="fade-up" data-aos-duration="1200" data-aos-delay="450" color="white">
              Serenity Lakes 2
            </Typography>
            <Box width={"75%"}>
              <Typography variant='body1' sx={{ fontFamily: "Montserrat" }} data-aos="fade-up" data-aos-duration="1200" data-aos-delay="450" color="white">
                Serenity Lakes offers studio, one and two bedroom
                residential apartments, as well as stunning three
                bedroom duplexes. The modern design relies on open
                spaces and clear views which is reflected in the
                generous windows sizes which can be seen in all elevations.
                This allows the natural light to pass into all spaces
                without compromising privacy, as the louvers are designed
                to contrast the modern elements through the traditional
                touch.The wood, aluminum, glazing, marble, porcelain,
                and ceramic tiles are creatively blended to work in harmony
                in order to provide the inner spaces with a unique sense of
                warmness while meeting the durability and quality requirements.
              </Typography>
            </Box>
            <Box sx={{ mt: 5 }} data-aos="fade-up" data-aos-duration="1200" data-aos-delay="450">
              <a href='https://drive.google.com/uc?export=download&id=1tw-lhNkFxTkVZaseN5_SXR7wB3KLmn4n' rel='noopener'>
                <Typography variant='h6' sx={{ color: "#FFF" }}>
                  Download Brochure
                </Typography>
              </a>
              <a href='https://drive.google.com/uc?export=download&id=1tw-lhNkFxTkVZaseN5_SXR7wB3KLmn4n' rel='noopener'>
                <Image
                  src={"/pdf.png"}
                  width={'60'}
                  height={"60"}
                  alt="pdf icon"
                />
              </a>
            </Box>
          </Grid>
          <Grid item md={5} sx={{ my: "auto" }}>
            <Box height={840} position="relative" textAlign={"center"}>
              <Image
                src={"/homeSL2.png"}
                width={640}
                height={840}
                alt="Serenity Lakes 2"
                data-aos="fade-up" data-aos-duration="1200" data-aos-delay="0"
              />
            </Box>
          </Grid>
        </Grid>
        <Grid container height={"100vh"} id='sl2 plans section' justifyContent={"center"}>
          <Grid item md={5} sx={{ my: "auto", mx: "auto", pl: 20 }}>
            <Image
              src={"/sl2Studio.png"}
              width={650}
              height={850}
              alt="studio floor plan"
              data-aos="fade-up" data-aos-duration="1200"
            />
          </Grid>
          <Grid item md={5} sx={{ my: "auto", mx: "auto" }}>
            <Typography variant='h3' sx={{ mb: 5, fontFamily: "Crimson" }} data-aos="fade-up" data-aos-duration="800">
              Our Unit Types
            </Typography>
            <Typography variant='h5' sx={{ mb: 3, fontFamily: "Crimson" }} data-aos="fade-up" data-aos-duration="800">
              Serenity Lakes 2
            </Typography>
            <Grid container>
              <Grid item md={4} sx={{ mr: 3 }}>
                <Box
                  sx={{
                    mb: 3,
                    border: "rgba(149, 157, 165, 0.2)",
                    p: 1,
                    borderStyle: "solid",
                    backgroundColor: "#FAFAFA",
                    boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
                    ":hover": {
                      backgroundColor: "#FAFAFA",
                      boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px"
                    },
                    ":active": {
                      backgroundColor: "#FAFAFA",
                      boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px"
                    }
                  }}
                >
                  <Typography variant='h6' sx={{ fontFamily: "Montserrat" }} data-aos="fade-up" data-aos-duration="800">
                    STUDIO
                  </Typography>
                  <Typography variant="body2" sx={{ fontFamily: "Montserrat" }} data-aos="zoom-in" data-aos-duration="1200" data-aos-delay="450">
                    Ground Floor
                  </Typography>
                </Box>
                <Box
                  sx={{
                    mb: 3,
                    p: 1,
                    ":hover": {
                      backgroundColor: "#FAFAFA",
                      boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
                      border: "rgba(149, 157, 165, 0.2)",
                      borderStyle: "solid",
                    },
                    ":active": {
                      backgroundColor: "#FAFAFA",
                      boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
                      border: "rgba(149, 157, 165, 0.2)",
                      borderStyle: "solid",
                    }
                  }}
                >
                  <Typography variant='h6' sx={{ fontFamily: "Montserrat" }} data-aos="fade-up" data-aos-duration="800">
                    2 BEDROOM LOFT
                  </Typography>
                  <Typography variant='body2' sx={{ fontFamily: "Montserrat" }} data-aos="zoom-in" data-aos-duration="1200" data-aos-delay="450">
                    Floor 4
                  </Typography>
                </Box>
              </Grid>
              <Grid item md={4}>
                <Box
                  sx={{
                    mb: 3,
                    p: 1,
                    ":hover": {
                      backgroundColor: "#FAFAFA",
                      boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
                      border: "rgba(149, 157, 165, 0.2)",
                      borderStyle: "solid",
                    },
                    ":active": {
                      backgroundColor: "#FAFAFA",
                      boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
                      border: "rgba(149, 157, 165, 0.2)",
                      borderStyle: "solid",
                    }
                  }}
                >
                  <Typography variant='h6' sx={{ fontFamily: "Montserrat" }} data-aos="fade-up" data-aos-duration="800">
                    1 BEDROOM APT
                  </Typography>
                  <Typography variant='body2' sx={{ fontFamily: "Montserrat" }} data-aos="zoom-in" data-aos-duration="1200" data-aos-delay="450">
                    Floor 1, 2 & 3
                  </Typography>
                </Box>
                <Box
                  sx={{
                    mb: 3,
                    p: 1,
                    ":hover": {
                      backgroundColor: "#FAFAFA",
                      boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
                      border: "rgba(149, 157, 165, 0.2)",
                      borderStyle: "solid",
                    },
                    ":active": {
                      backgroundColor: "#FAFAFA",
                      boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
                      border: "rgba(149, 157, 165, 0.2)",
                      borderStyle: "solid",
                    }
                  }}
                >
                  <Typography variant='h6' sx={{ fontFamily: "Montserrat" }} data-aos="fade-up" data-aos-duration="800">
                    2 BEDROOM LOFT
                  </Typography>
                  <Typography variant='body2' sx={{ fontFamily: "Montserrat" }} data-aos="zoom-in" data-aos-duration="1200" data-aos-delay="450">
                    Duplex Upper Floor
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid container height={"100vh"} id='sl5 section' justifyContent={"center"} style={{ backgroundColor: "#0F0F0F" }}>
          <Grid item md={5} sx={{ my: "auto", pl: 10 }}>
            <Typography variant='h3' sx={{ fontFamily: "Crimson" }} data-aos="fade-up" data-aos-duration="1200" data-aos-delay="450" color="white">
              Our Recent Projects
            </Typography>
            <Typography variant='h5' sx={{ py: 6, fontFamily: "Crimson" }} data-aos="fade-up" data-aos-duration="1200" data-aos-delay="450" color="white" >
              Serenity Lakes 5
            </Typography>
            <Box width={"75%"}>
              <Typography variant='body1' data-aos="fade-up" sx={{ fontFamily: "Montserrat" }} data-aos-duration="1200" data-aos-delay="450" color="white">
                Serenity Lakes offers studio, one and two bedroom
                residential apartments, as well as stunning three
                bedroom duplexes. The modern design relies on open
                spaces and clear views which is reflected in the
                generous windows sizes which can be seen in all elevations.
                This allows the natural light to pass into all spaces
                without compromising privacy, as the louvers are designed
                to contrast the modern elements through the traditional
                touch.The wood, aluminum, glazing, marble, porcelain,
                and ceramic tiles are creatively blended to work in harmony
                in order to provide the inner spaces with a unique sense of
                warmness while meeting the durability and quality requirements.
              </Typography>
            </Box>
            <Box sx={{ mt: 5 }} data-aos="fade-up" data-aos-duration="1200" data-aos-delay="450">
              <a href='https://drive.google.com/uc?export=download&id=1tw-lhNkFxTkVZaseN5_SXR7wB3KLmn4n' rel='noopener'>
                <Typography variant='h6' sx={{ color: "#FFF" }}>
                  Download Brochure
                </Typography>
              </a>
              <a href='https://drive.google.com/uc?export=download&id=1tw-lhNkFxTkVZaseN5_SXR7wB3KLmn4n' rel='noopener'>
                <Image
                  src={"/pdf.png"}
                  width={'60'}
                  height={"60"}
                  alt="pdf icon"
                />
              </a>
            </Box>
          </Grid>
          <Grid item md={5} sx={{ my: "auto" }}>
            <Box height={840} position="relative" textAlign={"center"}>
              <Image
                src={"/homeSL5.png"}
                width={640}
                height={840}
                alt="Serenity lakes 5"
                data-aos="fade-up" data-aos-duration="1200" data-aos-delay="0"
              />
            </Box>
          </Grid>
        </Grid>
        <Grid container height={"100vh"} id='sl5 plans section' justifyContent={"center"}>
          <Grid item md={5} sx={{ my: "auto", mx: "auto", pl: 20 }}>
            <Image
              src={"/sl5Studio.png"}
              width={650}
              height={850}
              alt="studio floor plan"
              data-aos="fade-up" data-aos-duration="1200" data-aos-delay="0"
            />
          </Grid>
          <Grid item md={5} sx={{ my: "auto", mx: "auto" }}>
            <Typography variant='h3' sx={{ mb: 5, fontFamily: "Crimson" }} data-aos="fade-up" data-aos-duration="800">
              Our Unit Types
            </Typography>
            <Typography variant='h5' sx={{ mb: 3, fontFamily: "Crimson" }} data-aos="fade-up" data-aos-duration="800">
              Serenity Lakes 5
            </Typography>
            <Grid container>
              <Grid item md={4} sx={{ mr: 3 }}>
                <Box
                  sx={{
                    mb: 3,
                    border: "rgba(149, 157, 165, 0.2)",
                    p: 1,
                    borderStyle: "solid",
                    backgroundColor: "#FAFAFA",
                    boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
                    ":hover": {
                      backgroundColor: "#FAFAFA",
                      boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px"
                    },
                    ":active": {
                      backgroundColor: "#FAFAFA",
                      boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px"
                    }
                  }}
                >
                  <Typography variant='h6' sx={{ fontFamily: "Montserrat" }} data-aos="fade-up" data-aos-duration="800">
                    STUDIO
                  </Typography>
                  <Typography variant="body2" sx={{ fontFamily: "Montserrat" }} data-aos="zoom-in" data-aos-duration="1200" data-aos-delay="450">
                    Ground Floor
                  </Typography>
                </Box>
                <Box
                  sx={{
                    mb: 3,
                    p: 1,
                    ":hover": {
                      backgroundColor: "#FAFAFA",
                      boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
                      border: "rgba(149, 157, 165, 0.2)",
                      borderStyle: "solid",
                    },
                    ":active": {
                      backgroundColor: "#FAFAFA",
                      boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
                      border: "rgba(149, 157, 165, 0.2)",
                      borderStyle: "solid",
                    }
                  }}
                >
                  <Typography variant='h6' sx={{ fontFamily: "Montserrat" }} data-aos="fade-up" data-aos-duration="800">
                    2 BEDROOM APT
                  </Typography>
                  <Typography variant='body2' sx={{ fontFamily: "Montserrat" }} data-aos="zoom-in" data-aos-duration="1200" data-aos-delay="450">
                    Floor 2, 3
                  </Typography>
                </Box>
              </Grid>
              <Grid item md={4}>
                <Box
                  sx={{
                    mb: 3,
                    p: 1,
                    ":hover": {
                      backgroundColor: "#FAFAFA",
                      boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
                      border: "rgba(149, 157, 165, 0.2)",
                      borderStyle: "solid",
                    },
                    ":active": {
                      backgroundColor: "#FAFAFA",
                      boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
                      border: "rgba(149, 157, 165, 0.2)",
                      borderStyle: "solid",
                    }
                  }}
                >
                  <Typography variant='h6' sx={{ fontFamily: "Montserrat" }} data-aos="fade-up" data-aos-duration="800">
                    1 BEDROOM APT
                  </Typography>
                  <Typography variant='body2' sx={{ fontFamily: "Montserrat" }} data-aos="zoom-in" data-aos-duration="1200" data-aos-delay="450">
                    Floor 1
                  </Typography>
                </Box>
                <Box
                  sx={{
                    mb: 3,
                    p: 1,
                    ":hover": {
                      backgroundColor: "#FAFAFA",
                      boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
                      border: "rgba(149, 157, 165, 0.2)",
                      borderStyle: "solid",
                    },
                    ":active": {
                      backgroundColor: "#FAFAFA",
                      boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
                      border: "rgba(149, 157, 165, 0.2)",
                      borderStyle: "solid",
                    }
                  }}
                >
                  <Typography variant='h6' sx={{ fontFamily: "Montserrat" }} data-aos="fade-up" data-aos-duration="800">
                    STUDIO POOL VIEW
                  </Typography>
                  <Typography variant='body2' sx={{ fontFamily: "Montserrat" }} data-aos="zoom-in" data-aos-duration="1200" data-aos-delay="450">
                    Floor 4
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <GetInTouch />
        <OurOffice />
        <Footer />
      </div>
    </div>
  )
}

export default Home