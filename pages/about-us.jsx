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

    const classes = useStyles();

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

    if (isMobileOnly) {
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
                <Paper elevation={0} id='hero section' sx={{ height: "600px" }}>
                    <div className='heroVideoMobile'>
                        <img src='https://firebasestorage.googleapis.com/v0/b/mamgroupsauth.appspot.com/o/Wondershare%20UniConverter%2013_000006.GIF?alt=media&token=5f597ee2-e164-4b5e-b548-a84ba08de8a1' style={{ objectFit: "cover", backgroundPosition: "center" }} height="700px" width={"100%"}></img>
                        {/* <video
                            autoPlay
                            muted
                            loop
                            playsinline
                            preload="auto"
                            style={{ width: "100vw", height: "600px", objectFit: "cover" }}
                        >
                            <source src='https://drive.google.com/uc?export=download&id=1xsJSPC9Uyyun11c3mO9UEkXi9NnymKcA' type='video/mp4' />
                        </video> */}
                        <Grid container className='overlayMobile'>
                            <Grid item sm={12} sx={{ m: "auto" }}>
                                <Box textAlign={"center"}>
                                    <Typography sx={{ fontSize: 36, fontFamily: "Crimsson" }} color={"#F0EDE8"}
                                        data-aos="fade-up" data-aos-duration="1200" data-aos-delay="0">
                                        About Us
                                    </Typography>
                                    <Typography fontSize={18} color={"#F0EDE8"} fontWeight={"lighter"}
                                        data-aos="fade-up" data-aos-duration="1200" data-aos-delay="450" sx={{ fontFamily: "Crimsson" }}>
                                        Gulf Land Property Developers (GLPD) studies, analyses, and exploits opportunities in the Dubai real estate market.
                                    </Typography>
                                </Box>
                            </Grid>
                        </Grid>
                    </div>
                </Paper>
                <Grid container justifyContent={"center"} sx={{ mt: 10 }} id="our history section">
                    <Grid item md={6}>
                        <Typography variant='h3' textAlign={"center"} sx={{ mt: 5, fontFamily: "Crimsson" }} data-aos="fade-up" data-aos-duration="1200" data-aos-delay="400">
                            Our History
                        </Typography>
                        <Box data-aos="fade-up" textAlign={"center"} data-aos-duration="1200" data-aos-delay="400">
                            <Typography variant='body1' textAlign={"justify"} sx={{ p: 4, fontFamily: "Montserrat" }}>
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
                    <Grid item md={6}>
                        <Box textAlign={"center"} sx={{ p: 4 }} data-aos="fade-up" data-aos-duration="1200" data-aos-delay="400">
                            <Typography textAlign={"justify"} sx={{ fontFamily: "Montserrat" }}>
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
                <Box height={550} position="relative" textAlign={"center"}>
                    <Image
                        src={"/homeAboutUsSection.png"}
                        layout="fill"
                        objectFit='contain'
                        alt="Paradise hills"
                        data-aos="fade-up" data-aos-duration="1200" data-aos-delay="450"
                    />
                </Box>
                {/* <Grid container>
                    <Grid item>
                        <Box sx={{ p: 2 }}>
                            <Typography variant='h4' sx={{ mb: 4, fontFamily: "Crimsson" }}>
                                Our Vision
                            </Typography>
                            <Typography textAlign={"justify"} sx={{ fontFamily: "Montserrat" }}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item sx={{ backgroundColor: '#0F0F0F' }}>
                        <Box sx={{ p: 2 }}>
                            <Typography variant='h4' color={"white"} sx={{ my: 4, fontFamily: "Crimsson" }}>
                                Property Specifications
                            </Typography>
                            <Typography color={"white"} sx={{ mb: 4, fontFamily: "Montserrat" }} textAlign={"justify"}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item>
                        <Box sx={{ p: 2 }}>
                            <Typography variant='h4' sx={{ mt: 4, fontFamily: "Crimsson" }}>
                                Property Benefits
                            </Typography>
                            <Typography textAlign={"justify"} sx={{ fontFamily: "Montserrat" }}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.
                            </Typography>
                        </Box>
                    </Grid>
                </Grid> */}
                <Grid container justifyContent={"center"} sx={{ mt: 4 }}>
                    <Grid item md={12}>
                        <Box textAlign={"center"}>
                            <Typography variant='h4' sx={{ fontFamily: "Crimsson" }}>
                                Meet our Team
                            </Typography>
                            <Box textAlign={"center"}>
                                <div style={{ borderBottom: "1px solid #0F0F0F", width: "80%", margin: "auto", marginBottom: "20px" }} data-aos="fade-up" data-aos-duration="1200" data-aos-delay="450" />
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item md={12}>
                        <Grid container direction="row" justifyContent="space-evenly" spacing={2}>
                            {/* <Grid item md={3} data-aos="fade-up" data-aos-duration="1200" data-aos-delay="400">
                                <Typography variant='h4' textAlign={"center"} sx={{ my: 2, fontFamily: "Crimsson" }} >
                                    Anas Hamadi
                                </Typography>
                                <Box height={420} position={"relative"}>
                                    <Image
                                        src={"/teamMember1.png"}
                                        layout='fill'
                                        objectFit='contain'
                                        alt="Anas Hamadi"
                                    />
                                </Box>
                                <Box textAlign={"center"} width={"80%"} sx={{ ml: "10%" }}>
                                    <Typography variant='h6' sx={{ mt: 2, fontFamily: "Crimsson" }}>
                                        General Manager
                                    </Typography>
                                    <Box  >
                                        <Typography variant='body1' sx={{ mt: 2, fontFamily: "Montserrat" }}>
                                            Lorem ipsum is placeholder text commonly used
                                            in the graphic, print, and publishing industries.
                                        </Typography>
                                    </Box>
                                </Box>
                            </Grid>
                            <Grid item md={3} data-aos="fade-up" data-aos-duration="1200" data-aos-delay="500" sx={{ backgroundColor: "#0F0F0F" }}>
                                <Typography textAlign={"center"} color="white" variant='h4' sx={{ my: 2, fontFamily: "Crimsson" }} >
                                    Rami Shammaa
                                </Typography>
                                <Box height={420} position={"relative"}>
                                    <Image
                                        src={"/teamMember2.png"}
                                        layout='fill'
                                        objectFit='contain'
                                        alt="Rami Shammaa"

                                    />
                                </Box>
                                <Box textAlign={"center"} width={"80%"} sx={{ ml: "10%" }}>
                                    <Typography variant='h6' color="white" sx={{ mt: 2, fontFamily: "Crimsson" }}>
                                        General Manager
                                    </Typography>
                                    <Box  >
                                        <Typography variant='body1' color="white" sx={{ mt: 2, mb: 4, fontFamily: "Montserrat" }}>
                                            Lorem ipsum is placeholder text commonly used
                                            in the graphic, print, and publishing industries.
                                        </Typography>
                                    </Box>
                                </Box>
                            </Grid> */}
                            <Grid item md={3} data-aos="fade-up" data-aos-duration="1200" data-aos-delay="600">
                                <Typography textAlign={"center"} variant='h4' sx={{ my: 2, fontFamily: "Crimsson" }} >
                                    Bilal Hamadi
                                </Typography>
                                <Box height={420} position={"relative"}>
                                    <Image
                                        src={"/generalManager.png"}
                                        layout='fill'
                                        objectFit='contain'
                                        alt="Salim Morkam"

                                    />
                                </Box>
                                <Box textAlign={"center"} width={"80%"} sx={{ ml: "10%" }}>
                                    <Typography variant='h6' sx={{ mt: 2, fontFamily: "Crimsson" }}>
                                        General Manager
                                    </Typography>
                                    <Box  >
                                        <Typography variant='body1' sx={{ mt: 2, mb: 4, fontFamily: "Montserrat" }}>
                                            Lorem ipsum is placeholder text commonly used
                                            in the graphic, print, and publishing industries.
                                        </Typography>
                                    </Box>
                                </Box>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid container id="chairman section" justifyContent={"center"} sx={{ backgroundColor: "#0F0F0F" }}>
                    <Grid item md={3} data-aos="fade-up" data-aos-duration="1200" data-aos-delay="400">
                        <Typography variant='h4' color={"white"} textAlign={"center"} sx={{ mb: 2, mt: 4, fontFamily: "Crimsson" }} >
                            A Word From Chairman
                        </Typography>
                        <Box height={420} position={"relative"}>
                            <Image
                                src={"/chairmanImage.png"}
                                layout='fill'
                                objectFit='contain'
                                alt="Anas Hamadi"
                            />
                        </Box>
                        <Box textAlign={"center"} width={"80%"} sx={{ ml: "10%" }} color="white">
                            <Typography variant='h6' sx={{ mt: 2, fontFamily: "Crimsson" }}>
                                Shaher Mousli
                            </Typography>
                            <Box  >
                                <Typography variant='body1' textAlign={"justify"} sx={{ mt: 2, mb: 4, fontFamily: "Montserrat" }}>
                                    " Serenity Lakes offers studio, one and two bedroom residential apartments, as well as stunning three bedroom duplexes. The modern design relies on open spaces and clear views which is reflected in the generous windows sizes which can be seen in all elevations. This allows the natural light to pass into all spaces without compromising privacy, as the louvers are designed to contrast the modern elements through the traditional touch.The wood , aluminum, glazing, marble, porcelain, and ceramic tiles are creatively blended to work in harmony in order to provide the inner spaces with a unique sense of warmness while meeting the durability and quality requirements. "
                                </Typography>
                            </Box>
                        </Box>
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