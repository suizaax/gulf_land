import { AppBar, Box, Button, Container, Divider, Grid, IconButton, Paper, Toolbar, Typography, List, ListItem, ListItemText, Drawer } from '@mui/material'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Footer from '../components/Footer'
import GetInTouch from '../components/getInTouch'
import OurOffice from '../components/OurOffice'
import CountUp from 'react-countup';
import { isMobile, isMobileOnly } from 'react-device-detect'
import { Menu, MoreVert } from '@mui/icons-material'
import GetInTouchMobile from '../components/GetInTouchMobile'
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

const WhyDubai = () => {

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
                                        From Us To The World
                                    </Typography>
                                    <Typography fontSize={16} sx={{ fontFamily: "Montserrat" }} color={"#F0EDE8"} fontWeight={"lighter"}
                                        data-aos="fade-up" data-aos-duration="1200" data-aos-delay="450">
                                        For 50 years since its inception the United Arab Emirates has established itself at the forefront of progress. We now invite the world to be a part of the next 50 years of its glowing future.
                                    </Typography>
                                </Box>
                            </Grid>
                        </Grid>
                    </div>
                </Paper>
                <Grid container justifyContent={"center"} id="why dubai first section" sx={{ mt: 20 }} >
                    <Grid item md={12} sx={{ my: "auto" }}>
                        <Box textAlign={"center"}>
                            <Typography variant='h4' sx={{ fontFamily: "Crimsson" }}>
                                Why Invest in Dubai
                                <Divider textAlign={"center"} variant={'middle'} sx={{ borderColor: "#0F0F0F", mb: 2 }}
                                    data-aos="zoom-in" data-aos-duration="1200" data-aos-delay="600" />
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item md={12}>
                        <Grid container direction="row" justifyContent="center" spacing={2}>
                            <Grid item md={3}>
                                <Box textAlign={"center"} width={"80%"} sx={{ ml: "10%" }}
                                    data-aos="fade-up" data-aos-duration="1200" data-aos-delay="400">
                                    <Typography variant='h6' sx={{ mt: 2, fontFamily: "Crimsson" }} >
                                        The Reason You Are Looking For
                                    </Typography>
                                    <Box height={400} position={"relative"}>
                                        <Image
                                            src={"/whyInvestInDubai1.png"}
                                            layout='fill'
                                            objectFit='contain'
                                            alt="The Reason You Are Looking For"
                                            data-aos="fade-up" data-aos-duration="1200" data-aos-delay="100"
                                        />
                                    </Box>
                                    <Box  >
                                        <Typography variant='body1' sx={{ mt: 2, fontFamily: "Montserrat" }} textAlign={"justify"}>
                                            With a multitude of investors from around the globe,
                                            combined with the opportunity to establish and fully
                                            own companies, your future in the United Global
                                            Emirates begins right here.
                                        </Typography>
                                    </Box>
                                </Box>
                            </Grid>
                            <Grid item md={3} sx={{ backgroundColor: "#0F0F0F", my: 4 }}>
                                <Box textAlign={"center"} width={"80%"} sx={{ ml: "10%" }}
                                    data-aos="fade-up" data-aos-duration="1200" data-aos-delay="500">
                                    <Typography variant='h6' color={"white"} sx={{ mt: 2, fontFamily: "Crimsson" }} >
                                        40 Free Zones To Own Your Future
                                    </Typography>
                                    <Box height={400} position={"relative"}>
                                        <Image
                                            src={"/whyInvestInDubai2.png"}
                                            layout='fill'
                                            objectFit='contain'
                                            alt="40 Free Zones To Own Your Future"
                                            data-aos="fade-up" data-aos-duration="1200" data-aos-delay="200"
                                        />
                                    </Box>
                                    <Box  >
                                        <Typography variant='body1' color={"white"} sx={{ mt: 2, mb: 4, fontFamily: "Montserrat" }} textAlign={"justify"}>
                                            With the chance to enjoy 100% ownership and tax
                                            exemptions as a foreign investor, the United Global
                                            Emirates gives you the opportunity to experience
                                            your best possible future.
                                        </Typography>
                                    </Box>
                                </Box>
                            </Grid>
                            <Grid item md={3}>
                                <Box textAlign={"center"} width={"80%"} sx={{ ml: "10%" }}
                                    data-aos="fade-up" data-aos-duration="1200" data-aos-delay="600">
                                    <Typography variant='h6' sx={{ mt: 2, fontFamily: "Crimsson" }} >
                                        Invest In Your Future, Again and Again
                                    </Typography>
                                    <Box height={400} position={"relative"}>
                                        <Image
                                            src={"/whyInvestInDubai3.png"}
                                            layout='fill'
                                            objectFit='contain'
                                            alt="Invest In Your Future, Again and Again"
                                            data-aos="fade-up" data-aos-duration="1200" data-aos-delay="300"
                                        />
                                    </Box>
                                    <Box  >
                                        <Typography variant='body1' sx={{ mt: 2, fontFamily: "Montserrat" }} textAlign={"justify"} >
                                            With a multitude of investors from around the globe,
                                            combined with the opportunity to establish and fully
                                            own companies, your future in the United Global
                                            Emirates begins right here.
                                        </Typography>
                                    </Box>
                                </Box>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid container justifyContent={"center"} sx={{ mt: 4 }}>
                    <Grid item md={12}>
                        <Box textAlign={"center"}>
                            <Typography variant='h4' sx={{ fontFamily: "Crimsson" }}>
                                Why Invest in Dubai
                                <Divider textAlign={"center"} variant={'middle'} sx={{ borderColor: "#OFOFOF", mb: 2 }}
                                    data-aos="zoom-in" data-aos-duration="1200" data-aos-delay="600" />
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item md={12}>
                        <Grid container direction="row" justifyContent="center" spacing={2}>
                            <Grid item md={3} sx={{ backgroundColor: "#0F0F0F", my: 4 }}>
                                <Box textAlign={"center"} width={"80%"} sx={{ ml: "10%" }}
                                    data-aos="fade-up" data-aos-duration="1200" data-aos-delay="400">
                                    <Typography variant='h6' sx={{ mt: 2, fontFamily: "Crimsson" }} color={"white"} >
                                        Your Stamp On The Future
                                    </Typography>
                                    <Box height={400} position={"relative"}>
                                        <Image
                                            src={"/whyInvestInDubai4.png"}
                                            layout='fill'
                                            objectFit='contain'
                                            alt="Your Stamp On The Future"
                                            data-aos="fade-up" data-aos-duration="1200" data-aos-delay="100"
                                        />
                                    </Box>
                                    <Box  >
                                        <Typography variant='body1' sx={{ mt: 2, mb: 4, fontFamily: "Montserrat" }} textAlign={"justify"} color={"white"}>
                                            We grant long-term residence visas (5 to 10 years)
                                            to investors, entrepreneurs, talented individuals
                                            and their families.
                                        </Typography>
                                    </Box>
                                </Box>
                            </Grid>
                            <Grid item md={3}>
                                <Box textAlign={"center"} width={"80%"} sx={{ ml: "10%" }}
                                    data-aos="fade-up" data-aos-duration="1200" data-aos-delay="500">
                                    <Typography variant='h6' sx={{ mt: 2, fontFamily: "Crimsson" }}>
                                        Your Business Is Entirely You Own
                                    </Typography>
                                    <Box height={400} position={"relative"}>
                                        <Image
                                            src={"/whyInvestInDubai5.png"}
                                            layout='fill'
                                            objectFit='contain'
                                            alt="Your Business Is Entirely You Own"
                                            data-aos="fade-up" data-aos-duration="1200" data-aos-delay="200"
                                        />
                                    </Box>
                                    <Box  >
                                        <Typography variant='body1' sx={{ mt: 2, fontFamily: "Montserrat" }} textAlign={"justify"}>
                                            We protect you as one of our own,
                                            where individuals and investors
                                            can freely repatriate their profits
                                            in entirety.
                                        </Typography>
                                    </Box>
                                </Box>
                            </Grid>
                            <Grid item md={3} sx={{ backgroundColor: "#0F0F0F", my: 4 }}>
                                <Box textAlign={"center"} width={"80%"} sx={{ ml: "10%" }}
                                    data-aos="fade-up" data-aos-duration="1200" data-aos-delay="600">
                                    <Typography variant='h6' sx={{ mt: 2, fontFamily: "Crimsson" }} color={"white"}>
                                        Logistics For Long-Term Investments
                                    </Typography>
                                    <Box height={400} position={"relative"}>
                                        <Image
                                            src={"/whyInvestInDubai6.png"}
                                            layout='fill'
                                            objectFit='contain'
                                            alt="Logistics For Long-Term Investments"
                                            data-aos="fade-up" data-aos-duration="1200" data-aos-delay="400"
                                        />
                                    </Box>
                                    <Box  >
                                        <Typography variant='body1' sx={{ mt: 2, mb: 4, fontFamily: "Montserrat" }} textAlign={"justify"} color={"white"}>
                                            The UAE has one of the most advanced land,
                                            sea and air transport systems in the world,
                                            giving you the connectivity you need.
                                        </Typography>
                                    </Box>
                                </Box>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid container justifyContent={"center"} id="why dubai first section" sx={{ mt: 4 }} >
                    <Grid item md={12} sx={{ my: "auto" }}>
                        <Box textAlign={"center"}>
                            <Typography variant='h4' sx={{ fontFamily: "Crimsson" }}>
                                Why Invest in Dubai
                                <Divider textAlign={"center"} variant={'middle'} sx={{ borderColor: "#0F0F0F", mb: 2 }}
                                    data-aos="zoom-in" data-aos-duration="1200" data-aos-delay="600" />
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item md={12}>
                        <Grid container direction="row" justifyContent="center" spacing={2}>
                            <Grid item md={3}>
                                <Box textAlign={"center"} width={"80%"} sx={{ ml: "10%" }}
                                    data-aos="fade-up" data-aos-duration="1200" data-aos-delay="400">
                                    <Typography variant='h6' sx={{ mt: 2, fontFamily: "Crimsson" }} >
                                        One Obstacle Less
                                    </Typography>

                                    <Box height={400} position={"relative"}>
                                        <Image
                                            src={"/whyInvestInDubai7.png"}
                                            layout='fill'
                                            objectFit='contain'
                                            alt="The Reason You Are Looking For"
                                            data-aos="fade-up" data-aos-duration="1200" data-aos-delay="100"
                                        />
                                    </Box>
                                    <Box  >
                                        <Typography variant='body1' sx={{ mt: 2, mb: 4, fontFamily: "Montserrat" }} textAlign={"justify"}>
                                            With a multitude of investors from around the globe,
                                            combined with the opportunity to establish and fully
                                            own companies, your future in the United Global
                                            Emirates begins right here.
                                        </Typography>
                                    </Box>
                                </Box>
                            </Grid>
                            <Grid item md={3} sx={{ backgroundColor: "#0F0F0F", my: 4 }}>
                                <Box textAlign={"center"} width={"80%"} sx={{ ml: "10%" }}
                                    data-aos="fade-up" data-aos-duration="1200" data-aos-delay="500">
                                    <Typography variant='h6' sx={{ mt: 2, fontFamily: "Crimsson" }} color={"white"} >
                                        Bring Your Dreams To Life
                                    </Typography>

                                    <Box height={400} position={"relative"}>
                                        <Image
                                            src={"/whyInvestInDubai8.png"}
                                            layout='fill'
                                            objectFit='contain'
                                            alt="40 Free Zones To Own Your Future"
                                            data-aos="fade-up" data-aos-duration="1200" data-aos-delay="200"
                                        />
                                    </Box>
                                    <Box  >
                                        <Typography variant='body1' sx={{ mt: 2, color: "white", mb: 4, fontFamily: "Montserrat" }} textAlign={"justify"}>
                                            With the chance to enjoy 100% ownership and tax exemptions
                                            as a foreign investor, the United Global Emirates gives
                                            you the opportunity to experience your best possible future.
                                        </Typography>
                                    </Box>
                                </Box>
                            </Grid>
                            <Grid item md={3}>
                                <Box textAlign={"center"} width={"80%"} sx={{ ml: "10%" }}
                                    data-aos="fade-up" data-aos-duration="1200" data-aos-delay="600">
                                    <Typography variant='h6' sx={{ mt: 2, fontFamily: "Crimsson" }} >
                                        Invest In Your Future, Again and Again
                                    </Typography>
                                    <Box height={400} position={"relative"}>
                                        <Image
                                            src={"/whyInvestInDubai9.png"}
                                            layout='fill'
                                            objectFit='contain'
                                            alt="Invest In Your Future, Again and Again"
                                            data-aos="fade-up" data-aos-duration="1200" data-aos-delay="300"
                                        />
                                    </Box>
                                    <Box  >
                                        <Typography variant='body1' sx={{ mt: 2, mb: 4, fontFamily: "Montserrat" }} textAlign={"justify"} >
                                            With a multitude of investors from around the globe,
                                            combined with the opportunity to establish and fully
                                            own companies, your future in the United Global
                                            Emirates begins right here.
                                        </Typography>
                                    </Box>
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
            <Head>
                <title>Gulf Land Property Developers - Why Dubai</title>
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
                                alt="GLPD Logo"
                                width={181}
                                height={42}
                            />
                            <div style={{ flexGrow: 1 }}></div>
                            <Button color='inherit' disableRipple sx={{ textTransform: "capitalize", color: "#DAD3C7", fontFamily: "Montserrat" }}>
                                <Link href={"/"}>Home</Link>
                            </Button>
                            <Button color='inherit' disableRipple sx={{ textTransform: "capitalize", ml: 2, color: "#DAD3C7", fontFamily: "Montserrat" }}>
                                <Link href={"about-us"}>About Us</Link>
                            </Button>
                            <Button color='inherit' disableRipple sx={{ textTransform: "capitalize", ml: 2, color: "white", fontFamily: "Montserrat" }}>
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
                <div className='hero'>
                    <Grid height={"100vh"} container justifyContent={"center"}>
                        <Grid item md={12} sx={{ m: "auto" }}>
                            <Box textAlign={"center"}>
                                <Typography sx={{ fontSize: 120, fontFamily: "Crimsson" }} color={"#F0EDE8"}
                                    data-aos="fade-up" data-aos-duration="1200" data-aos-delay="0">
                                    From Us To The World
                                </Typography>
                                <Typography sx={{ mx: "auto", fontFamily: "Montserrat" }} width={"60%"} fontSize={32} color={"#F0EDE8"} lineHeight={1} fontWeight={"lighter"}
                                    data-aos="fade-up" data-aos-duration="1200" data-aos-delay="450">
                                    For 50 years since its inception the
                                    United Arab Emirates has established
                                    itself at the forefront of progress.
                                    We now invite the world to be a part
                                    of the next 50 years of its glowing
                                    future.
                                </Typography>
                            </Box>
                        </Grid>
                    </Grid>
                </div>
            </Paper>
            <Grid container height={"100vh"} id="why dubai first section" >
                <Grid item md={12} sx={{ my: "auto" }}>
                    <Box textAlign={"center"}>
                        <Typography variant='h3' sx={{ fontFamily: "Crimsson" }}>
                            Why Invest in Dubai
                        </Typography>
                    </Box>
                </Grid>
                <Grid item md={12}>
                    <Grid container direction="row" justifyContent="center" spacing={2}>
                        <Grid item md={3}>
                            <Box height={400} position={"relative"}>
                                <Image
                                    src={"/whyInvestInDubai1.png"}
                                    layout='fill'
                                    objectFit='contain'
                                    alt="The Reason You Are Looking For"
                                    data-aos="fade-up" data-aos-duration="1200" data-aos-delay="100"
                                />
                            </Box>
                            <Box textAlign={"center"} width={"80%"} sx={{ ml: "10%" }}
                                data-aos="fade-up" data-aos-duration="1200" data-aos-delay="400">
                                <Typography variant='h4' sx={{ mt: 2, fontFamily: "Crimsson" }} >
                                    The Reason You Are Looking For
                                </Typography>
                                <Box  >
                                    <Typography variant='body1' sx={{ mt: 2, fontFamily: "Montserrat" }} textAlign={"justify"}>
                                        With a multitude of investors from around the globe,
                                        combined with the opportunity to establish and fully
                                        own companies, your future in the United Global
                                        Emirates begins right here.
                                    </Typography>
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item md={3}>
                            <Box height={400} position={"relative"}>
                                <Image
                                    src={"/whyInvestInDubai2.png"}
                                    layout='fill'
                                    objectFit='contain'
                                    alt="40 Free Zones To Own Your Future"
                                    data-aos="fade-up" data-aos-duration="1200" data-aos-delay="200"
                                />
                            </Box>
                            <Box textAlign={"center"} width={"80%"} sx={{ ml: "10%" }}
                                data-aos="fade-up" data-aos-duration="1200" data-aos-delay="500">
                                <Typography variant='h4' sx={{ mt: 2, fontFamily: "Crimsson" }} >
                                    40 Free Zones To Own Your Future
                                </Typography>
                                <Box  >
                                    <Typography variant='body1' sx={{ mt: 2, fontFamily: "Montserrat" }} textAlign={"justify"}>
                                        With the chance to enjoy 100% ownership and tax
                                        exemptions as a foreign investor, the United Global
                                        Emirates gives you the opportunity to experience
                                        your best possible future.
                                    </Typography>
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item md={3}>
                            <Box height={400} position={"relative"}>
                                <Image
                                    src={"/whyInvestInDubai3.png"}
                                    layout='fill'
                                    objectFit='contain'
                                    alt="Invest In Your Future, Again and Again"
                                    data-aos="fade-up" data-aos-duration="1200" data-aos-delay="300"
                                />
                            </Box>
                            <Box textAlign={"center"} width={"80%"} sx={{ ml: "10%" }}
                                data-aos="fade-up" data-aos-duration="1200" data-aos-delay="600">
                                <Typography variant='h4' sx={{ mt: 2, fontFamily: "Crimsson" }} >
                                    Invest In Your Future, Again and Again
                                </Typography>
                                <Box  >
                                    <Typography variant='body1' sx={{ mt: 2, fontFamily: "Montserrat" }} textAlign={"justify"} >
                                        With a multitude of investors from around the globe,
                                        combined with the opportunity to establish and fully
                                        own companies, your future in the United Global
                                        Emirates begins right here.
                                    </Typography>
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Grid container height={"100vh"} id="why dubai second section" sx={{ backgroundColor: "#0F0F0F" }}>
                <Grid item md={12} sx={{ my: "auto" }}>
                    <Box textAlign={"center"}>
                        <Typography variant='h3' color={"white"} sx={{ fontFamily: "Crimsson" }}>
                            Why Invest in Dubai
                        </Typography>
                    </Box>
                </Grid>
                <Grid item md={12}>
                    <Grid container direction="row" justifyContent="center" spacing={2}>
                        <Grid item md={3}>
                            <Box height={400} position={"relative"}>
                                <Image
                                    src={"/whyInvestInDubai4.png"}
                                    layout='fill'
                                    objectFit='contain'
                                    alt="Your Stamp On The Future"
                                    data-aos="fade-up" data-aos-duration="1200" data-aos-delay="100"
                                />
                            </Box>
                            <Box textAlign={"center"} width={"80%"} sx={{ ml: "10%" }}
                                data-aos="fade-up" data-aos-duration="1200" data-aos-delay="400">
                                <Typography variant='h4' sx={{ mt: 2, fontFamily: "Crimsson" }} color={"white"} >
                                    Your Stamp On The Future
                                </Typography>
                                <Box  >
                                    <Typography variant='body1' sx={{ mt: 2, fontFamily: "Montserrat" }} textAlign={"justify"} color={"white"}>
                                        We grant long-term residence visas (5 to 10 years)
                                        to investors, entrepreneurs, talented individuals
                                        and their families.
                                    </Typography>
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item md={3}>
                            <Box height={400} position={"relative"}>
                                <Image
                                    src={"/whyInvestInDubai5.png"}
                                    layout='fill'
                                    objectFit='contain'
                                    alt="Your Business Is Entirely You Own"
                                    data-aos="fade-up" data-aos-duration="1200" data-aos-delay="200"
                                />
                            </Box>
                            <Box textAlign={"center"} width={"80%"} sx={{ ml: "10%" }}
                                data-aos="fade-up" data-aos-duration="1200" data-aos-delay="500">
                                <Typography variant='h4' sx={{ mt: 2, fontFamily: "Crimsson" }} color={"white"}>
                                    Your Business Is Entirely You Own
                                </Typography>
                                <Box  >
                                    <Typography variant='body1' sx={{ mt: 2, fontFamily: "Montserrat" }} textAlign={"justify"} color={"white"}>
                                        We protect you as one of our own,
                                        where individuals and investors
                                        can freely repatriate their profits
                                        in entirety.
                                    </Typography>
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item md={3}>
                            <Box height={400} position={"relative"}>
                                <Image
                                    src={"/whyInvestInDubai6.png"}
                                    layout='fill'
                                    objectFit='contain'
                                    alt="Logistics For Long-Term Investments"
                                    data-aos="fade-up" data-aos-duration="1200" data-aos-delay="400"
                                />
                            </Box>
                            <Box textAlign={"center"} width={"80%"} sx={{ ml: "10%" }}
                                data-aos="fade-up" data-aos-duration="1200" data-aos-delay="600">
                                <Typography variant='h4' sx={{ mt: 2, fontFamily: "Crimsson" }} color={"white"}>
                                    Logistics For Long-Term Investments
                                </Typography>
                                <Box  >
                                    <Typography variant='body1' sx={{ mt: 2, fontFamily: "Montserrat" }} textAlign={"justify"} color={"white"}>
                                        The UAE has one of the most advanced land,
                                        sea and air transport systems in the world,
                                        giving you the connectivity you need.
                                    </Typography>
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Grid container height={"100vh"} id="why dubai third section" >
                <Grid item md={12} sx={{ my: "auto" }}>
                    <Box textAlign={"center"}>
                        <Typography variant='h3' sx={{ fontFamily: "Crimsson" }}>
                            Why Invest in Dubai
                        </Typography>
                    </Box>
                </Grid>
                <Grid item md={12}>
                    <Grid container direction="row" justifyContent="center" spacing={2}>
                        <Grid item md={3}>
                            <Box height={400} position={"relative"}>
                                <Image
                                    src={"/whyInvestInDubai10.png"}
                                    layout='fill'
                                    objectFit='contain'
                                    alt="One Obstacle Less"
                                    data-aos="fade-up" data-aos-duration="1200" data-aos-delay="100"
                                />
                            </Box>
                            <Box textAlign={"center"} width={"80%"} sx={{ ml: "10%" }}
                                data-aos="fade-up" data-aos-duration="1200" data-aos-delay="400">
                                <Typography variant='h4' sx={{ mt: 2, fontFamily: "Crimsson" }} >
                                    One Obstacle Less
                                </Typography>
                                <Box  >
                                    <Typography variant='body1' sx={{ mt: 2, fontFamily: "Montserrat" }} textAlign={"justify"}>
                                        With a multitude of investors from around the globe,
                                        combined with the opportunity to establish and fully
                                        own companies, your future in the United Global
                                        Emirates begins right here.
                                    </Typography>
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item md={3}>
                            <Box height={400} position={"relative"}>
                                <Image
                                    src={"/whyInvestInDubai11.png"}
                                    layout='fill'
                                    objectFit='contain'
                                    alt="Bring Your Dreams To Life"
                                    data-aos="fade-up" data-aos-duration="1200" data-aos-delay="200"
                                />
                            </Box>
                            <Box textAlign={"center"} width={"80%"} sx={{ ml: "10%" }}
                                data-aos="fade-up" data-aos-duration="1200" data-aos-delay="500">
                                <Typography variant='h4' sx={{ mt: 2, fontFamily: "Crimsson" }} >
                                    Bring Your Dreams To Life
                                </Typography>
                                <Box  >
                                    <Typography variant='body1' sx={{ mt: 2, fontFamily: "Montserrat" }} textAlign={"justify"}>
                                        With the chance to enjoy 100% ownership and tax exemptions
                                        as a foreign investor, the United Global Emirates gives
                                        you the opportunity to experience your best possible future.
                                    </Typography>
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item md={3}>
                            <Box height={400} position={"relative"}>
                                <Image
                                    src={"/whyInvestInDubai12.png"}
                                    layout='fill'
                                    objectFit='contain'
                                    alt="A Global Hub"
                                    data-aos="fade-up" data-aos-duration="1200" data-aos-delay="300"
                                />
                            </Box>
                            <Box textAlign={"center"} width={"80%"} sx={{ ml: "10%" }}
                                data-aos="fade-up" data-aos-duration="1200" data-aos-delay="600">
                                <Typography variant='h4' sx={{ mt: 2, fontFamily: "Crimsson" }} >
                                    A Global Hub
                                </Typography>
                                <Box  >
                                    <Typography variant='body1' sx={{ mt: 2, fontFamily: "Montserrat" }} textAlign={"justify"} >
                                        With a multitude of investors from around the globe,
                                        combined with the opportunity to establish and fully
                                        own companies, your future in the United Global
                                        Emirates begins right here.
                                    </Typography>
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Grid container height={"100vh"} className='statistics' id="statistics section" justifyContent={"center"}>
                <Grid item md={12} sx={{ m: "auto" }}>
                    <Typography variant='h3' textAlign={"center"} sx={{ fontFamily: "Crimsson" }} >
                        Few statistics About DUBAI
                    </Typography>
                </Grid>
                <Grid item md={9}>
                    <Box height={172} position={"relative"}>
                        <Image
                            src={"/statsPart.png"}
                            layout='fill'
                            objectFit='contain'
                            alt="Statistics 1"
                            data-aos="fade-up" data-aos-duration="1200" data-aos-delay="200"
                        />
                    </Box>
                </Grid>
                <Grid item md={8}>
                    <Box height={371} position={"relative"} data-aos="fade-up" data-aos-duration="1200" data-aos-delay="200">
                        <CountUp
                            start={0}
                            end={190}
                            duration={2.75}
                            separator=" "
                            suffix="+"
                            startOnMount
                            style={{ fontSize: 25 }}
                        />
                    </Box>
                </Grid>
            </Grid>
            <GetInTouch />
            <OurOffice />
            <Footer />
        </div>
    )
}

export default WhyDubai