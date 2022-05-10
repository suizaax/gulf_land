import { Menu, MoreVert } from '@mui/icons-material'
import { AppBar, Box, Button, Container, Divider, Grid, IconButton, Paper, Toolbar, Typography, Drawer, List, ListItem, ListItemText } from '@mui/material'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { isMobile, isMobileOnly } from 'react-device-detect'
import Footer from '../components/Footer'
import FooterMobile from '../components/FooterMobile'
import GetInTouch from '../components/getInTouch'
import GetInTouchMobile from '../components/GetInTouchMobile'
import OurOffice from '../components/OurOffice'
import OurOfficeMobile from '../components/OurOfficeMobile'
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

const AboutUs = () => {

    

    return (
        <div>
            <div>
                <Head>
                    <title>Gulf Land Property Developers - About Us</title>
                    <meta name="description" content="Gulf Land Property Developers (GLPD) studies, analyses, and exploits opportunities in the Dubai real estate market."></meta>
                    <link rel="icon" type="image/icon" sizes="16x16" href="/16x16.ico" />
                    <link rel="icon" type="image/icon" sizes="32x32" href="/32x32.ico" />
                    <link rel="icon" type="image/icon" sizes="48x48" href="/48x48.ico" />
                    <meta property="og:title" content="Gulf Land Property Developers (GLPD)" />
                    <meta property="og:description" content="Gulf Land Property Developers (GLPD) studies, analyses, and exploits opportunities in the Dubai real estate market." />
                    <meta property="og:url" content="http://glp.ae/" />
                    <meta property="og:type" content="website" />
                </Head>
                <Box sx={{ flexGrow: 1 }}>
                    <AppBar position="absolute" color='transparent' elevation={0} sx={{ mt: 2 }}>
                        <Container>
                            <Toolbar>
                                <Image
                                    src="/GulfLandLogo.png"
                                    width={181}
                                    height={42}
                                    alt="GLPD Logo"
                                />
                                <div style={{ flexGrow: 1 }}></div>
                                <Button color='inherit' disableRipple sx={{ textTransform: "capitalize", color: "#DAD3C7", fontFamily: "Montserrat" }}>
                                    <Link href={"/"}>Home</Link>
                                </Button>
                                <Button color='inherit' disableRipple sx={{ textTransform: "capitalize", ml: 2, color: "white", fontFamily: "Montserrat" }}>
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
                    <div className='hero-about'>
                        <Container>
                            <Grid height={"100vh"} container justifyContent={"center"}>
                                <Grid item md={12} sx={{ m: "auto" }}>
                                    <Box textAlign={"start"}>
                                        <Typography sx={{ fontSize: 120, fontFamily: "Crimsson" }} color={"#F0EDE8"}
                                            data-aos="fade-up" data-aos-duration="1200" data-aos-delay="0">
                                            About Us
                                        </Typography>
                                        <Typography width={"50%"} sx={{ fontFamily: "Montserrat" }} fontSize={20} color={"#F0EDE8"} lineHeight={1} fontWeight={"lighter"}
                                            data-aos="fade-up" data-aos-duration="1200" data-aos-delay="450">
                                            Gulf Land Property Developers (GLPD) studies,
                                            analyses, and exploits opportunities in the
                                            Dubai real estate market.
                                        </Typography>
                                    </Box>
                                </Grid>
                            </Grid>
                        </Container>
                    </div>
                </Paper>
                <Grid container height={"40vh"} id="our history section">
                    <Grid item md={6} sx={{ m: "auto", pl: "15%" }}>
                        <Typography variant='h3' sx={{ mb: 5, fontFamily: "Crimsson" }} data-aos="fade-up" data-aos-duration="1200" data-aos-delay="400">
                            Our History
                        </Typography>
                        <Box width={"100%"} data-aos="fade-up" data-aos-duration="1200" data-aos-delay="400">
                            <Typography variant='body1' sx={{ fontFamily: "Montserrat", textAlign: "justify" }}>
                                Built with the vision to create value for its client portfolio
                                through delivering strategic real estate assets, the company
                                studies, analyses, and exploits opportunities in the Dubai real
                                estate market. With the total value of the business portfolio
                                ranging over AED 400 million, out of which a 100 million worth
                                of projects under development, Gulf Land Property Developers is
                                an established real estate development business in the UAE.
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item md={6} sx={{ m: "auto", pl: 10 }}>
                        <Typography variant='h3' sx={{ color: "transparent", textIndent: "-9999px", mb: 5 }}>
                            Our History
                        </Typography>
                        <Box width={"75%"} data-aos="fade-up" data-aos-duration="1200" data-aos-delay="400">
                            <Typography sx={{ fontFamily: "Montserrat", textAlign: "justify" }}>
                                The business was acquired by Arthur Mackenzy in 2020 and is now a
                                part of the Arthur Mackenzy Properties Group of companies. Arthur
                                Mackenzy Properties Investments comprises a diverse range of businesses
                                within a broad spectrum of industries including investments, real estate,
                                retail and IT across the UAE, as well as investments in real estate and
                                financial markets in the UAE and overseas.
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
                <Grid container height={"100vh"} id='about us section' justifyContent={"center"} sx={{ backgroundColor: "#0F0F0F" }}>
                    <Grid item md={5} sx={{ mt: "auto", mb: "auto", color: "white" }}>
                        <Typography variant='h3' sx={{ mb: 3, fontFamily: "Crimsson" }}
                            data-aos="fade-up" data-aos-duration="1200" data-aos-delay="200">
                            Our Vision
                        </Typography>
                        <Box width={"80%"} sx={{ mb: 6, fontFamily: "Montserrat" }} data-aos="fade-up" data-aos-duration="1200" data-aos-delay="250">
                            <Typography>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                sed do eiusmod tempor incididunt ut labore et dolore magna
                                aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                ullamco laboris nisi ut aliquip ex ea commodo.
                            </Typography>
                        </Box>
                        <Typography variant='h3' sx={{ mb: 3, fontFamily: "Crimsson" }}
                            data-aos="fade-up" data-aos-duration="1200" data-aos-delay="300">
                            Property Specifications
                        </Typography>
                        <Box width={"80%"} sx={{ mb: 6, fontFamily: "Montserrat" }} data-aos="fade-up" data-aos-duration="1200" data-aos-delay="350">
                            <Typography>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                sed do eiusmod tempor incididunt ut labore et dolore magna
                                aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                ullamco laboris nisi ut aliquip ex ea commodo.
                            </Typography>
                        </Box>
                        <Typography variant='h3' sx={{ mb: 3, fontFamily: "Crimsson" }}
                            data-aos="fade-up" data-aos-duration="1200" data-aos-delay="400">
                            Property Benefits
                        </Typography>
                        <Box width={"80%"} sx={{ mb: 6, fontFamily: "Montserrat" }} data-aos="fade-up" data-aos-duration="1200" data-aos-delay="450">
                            <Typography>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                sed do eiusmod tempor incididunt ut labore et dolore magna
                                aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                ullamco laboris nisi ut aliquip ex ea commodo.
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item md={5}>
                        <Box sx={{ width: "50vw", height: "100vh", position: "relative" }}>
                            <Image
                                src={"/homeAboutUsSection.png"}
                                layout='fill'
                                objectFit='contain'
                                alt="our History image"
                            />
                        </Box>
                    </Grid>
                </Grid>
                <Grid container height={"100vh"} id="chairman section" justifyContent={"center"} sx={{ backgroundColor: "#FFF" }}>

                    <Grid item md={5} sx={{ my: "auto" }}>
                        <Typography variant='h3' sx={{ fontFamily: "Crimsson" }} data-aos="fade-up" data-aos-duration="1200" data-aos-delay="200">
                            General Manager
                        </Typography>
                        <Typography variant='h5' sx={{ my: 6, fontFamily: "Crimsson" }} data-aos="fade-up" data-aos-duration="1200" data-aos-delay="300">
                            Bilal Hamadi
                        </Typography>
                        <Typography variant='body2' width={"70%"} textAlign={"justify"}
                            data-aos="fade-up" data-aos-duration="1200" data-aos-delay="400" sx={{ fontFamily: "Montserrat" }}>
                            &#34; Serenity Lakes offers studio, one and two bedroom
                            residential apartments, as well as stunning three
                            bedroom duplexes. The modern design relies on open
                            spaces and clear views which is reflected in the
                            generous windows sizes which can be seen in all elevations.
                            This allows the natural light to pass into all spaces without
                            compromising privacy, as the louvers are designed to contrast
                            the modern elements through the traditional touch.The wood
                            , aluminum, glazing, marble, porcelain, and ceramic tiles
                            are creatively blended to work in harmony in order to provide
                            the inner spaces with a unique sense of warmness while meeting
                            the durability and quality requirements. &#34;
                        </Typography>
                    </Grid>
                    <Grid item md={5} sx={{ my: "auto" }}>
                        <Box height={840} position={"relative"}>
                            <Image
                                src={"/generalManager.png"}
                                layout='fill'
                                objectFit='contain'
                                alt="Mohamed Islam"
                                data-aos="fade-up" data-aos-duration="1200" data-aos-delay="0"
                            />
                        </Box>
                    </Grid>
                </Grid>
                <Grid container height={"100vh"} id="chairman section" justifyContent={"center"} sx={{ backgroundColor: "#0F0F0F" }}>
                    <Grid item md={5} sx={{ my: "auto" }}>
                        <Box height={800} position={"relative"}>
                            <Image
                                src={"/chairmanImage.png"}
                                layout='fill'
                                objectFit='contain'
                                alt="Mohamed Islam"
                                data-aos="fade-up" data-aos-duration="1200" data-aos-delay="0"
                            />
                        </Box>
                    </Grid>
                    <Grid item md={5} sx={{ my: "auto" }}>
                        <Typography color={"white"} variant='h3' sx={{ fontFamily: "Crimsson" }} data-aos="fade-up" data-aos-duration="1200" data-aos-delay="200">
                            A Word From Chairman
                        </Typography>
                        <Typography color={"white"} variant='h5' sx={{ my: 6, fontFamily: "Crimsson" }} data-aos="fade-up" data-aos-duration="1200" data-aos-delay="300">
                            Shaher Mousli
                        </Typography>
                        <Typography color={"white"} variant='body2' width={"70%"} textAlign={"justify"}
                            data-aos="fade-up" data-aos-duration="1200" data-aos-delay="400" sx={{ fontFamily: "Montserrat" }}>
                            &#34; Serenity Lakes offers studio, one and two bedroom
                            residential apartments, as well as stunning three
                            bedroom duplexes. The modern design relies on open
                            spaces and clear views which is reflected in the
                            generous windows sizes which can be seen in all elevations.
                            This allows the natural light to pass into all spaces without
                            compromising privacy, as the louvers are designed to contrast
                            the modern elements through the traditional touch.The wood
                            , aluminum, glazing, marble, porcelain, and ceramic tiles
                            are creatively blended to work in harmony in order to provide
                            the inner spaces with a unique sense of warmness while meeting
                            the durability and quality requirements. &#34;
                        </Typography>
                    </Grid>
                </Grid>

                <Grid container justifyContent={"center"}>
                    <Grid item md={10} sx={{ py: 15 }} >
                        <Box height={"1080px"} position='relative'>
                            <Image
                                src={'/team.png'}
                                alt='Gulf Land Team'
                                layout='fill'
                                objectFit='center'
                            />
                        </Box>
                    </Grid>
                </Grid>
                <GetInTouch />
                <OurOffice />
                <Footer />
            </div>
        </div>
    )
}

export default AboutUs