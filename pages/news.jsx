import { Menu, MoreVert } from '@mui/icons-material'
import { AppBar, Button, Container, Grid, IconButton, Paper, Toolbar, Typography, List, ListItem, ListItemText, Drawer, Divider } from '@mui/material'
import { Box } from '@mui/system'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect } from 'react'
import { isMobile, isMobileOnly } from 'react-device-detect'
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from '../components/Footer'
import FooterMobile from '../components/FooterMobile'
import GetInTouch from '../components/getInTouch'
import GetInTouchMobile from '../components/GetInTouchMobile'
import OurOffice from '../components/OurOffice'
import OurOfficeMobile from '../components/OurOfficeMobile'
import { makeStyles, useTheme } from '@mui/styles'

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
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

const News = () => {

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
                <Paper elevation={0} id='hero section' sx={{ height: "500px" }}>
                    <div className='heroVideoMobile'>
                        <img src='https://firebasestorage.googleapis.com/v0/b/mamgroupsauth.appspot.com/o/Wondershare%20UniConverter%2013_000006.GIF?alt=media&token=5f597ee2-e164-4b5e-b548-a84ba08de8a1' style={{ objectFit: "cover", backgroundPosition: "center" }} height="600px" width={"100%"}></img>
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
                                    <Typography sx={{ fontSize: 48, fontFamily: "Crimsson" }} color={"#F0EDE8"}
                                        data-aos="fade-up" data-aos-duration="1200" data-aos-delay="0">
                                        News
                                    </Typography>
                                    <Typography fontSize={18} sx={{ fontFamily: "Montserrat" }} color={"#F0EDE8"} fontWeight={"lighter"}
                                        data-aos="fade-up" data-aos-duration="1200" data-aos-delay="450">
                                        Follow and Get The News About real estate and investing in dubai with GLPD
                                    </Typography>
                                </Box>
                            </Grid>
                        </Grid>
                    </div>
                </Paper>
                <Box height={550} position="relative" textAlign={"center"} sx={{ mt: 20 }}>
                    <Image
                        src={"/news1.png"}
                        layout="fill"
                        objectFit='contain'
                        alt="Paradise hills"
                        data-aos="fade-up" data-aos-duration="1200" data-aos-delay="450"
                    />
                </Box>
                <Grid container id='news 1 section' justifyContent={"center"}>
                    <Grid item md={5} textAlign="center">
                        <Typography variant='h5' sx={{ fontFamily: "Crimsson" }} data-aos="fade-up" data-aos-duration="1200" data-aos-delay="200">
                            Investements
                        </Typography>
                        <Typography variant='h6' sx={{ py: 3, fontFamily: "Crimsson" }} data-aos="fade-up" data-aos-duration="1200" data-aos-delay="300" >
                            What properties to invest on
                        </Typography>
                        <Box data-aos="fade-up" data-aos-duration="1200" data-aos-delay="400">
                            <Typography variant='body1' sx={{ p: 2, fontFamily: "Montserrat" }} textAlign={"justify"}>
                                Serenity Lakes offers studio, one and two
                                bedroom residential apartments, as well as
                                stunning three bedroom duplexes. The modern
                                design relies on open spaces and clear views
                                which is reflected in the generous windows sizes
                                which can be seen in all elevations. This allows
                                the natural light to pass into all spaces without
                                compromising privacy, as the louvers are designed
                                to contrast the modern elements through the
                                traditional touch.The wood, aluminum, glazing,
                                marble, porcelain, and ceramic tiles are creatively
                                blended to work in harmony in order to provide the
                                inner spaces with a unique sense of warmness while
                                meeting the durability and quality requirements.

                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
                <Box height={550} position="relative" textAlign={"center"} sx={{ backgroundColor: "#0F0F0F" }}>
                    <Image
                        src={"/news2.png"}
                        layout="fill"
                        objectFit='contain'
                        alt="Paradise hills"
                        data-aos="fade-up" data-aos-duration="1200" data-aos-delay="450"
                    />
                </Box>
                <Grid container id='news 1 section' justifyContent={"center"} sx={{ backgroundColor: "#0F0F0F" }}>
                    <Grid item md={5} textAlign="center" color={"white"}>
                        <Typography sx={{ mt: 4, fontFamily: "Crimsson" }} variant='h5' data-aos="fade-up" data-aos-duration="1200" data-aos-delay="200">
                            Properties
                        </Typography>
                        <Typography variant='h6' sx={{ py: 3, fontFamily: "Crimsson" }} data-aos="fade-up" data-aos-duration="1200" data-aos-delay="300" >
                            How to chose your property
                        </Typography>
                        <Box data-aos="fade-up" data-aos-duration="1200" data-aos-delay="400">
                            <Typography variant='body1' sx={{ p: 2, mb: 4, fontFamily: "Montserrat" }} textAlign={"justify"}>
                                Serenity Lakes offers studio, one and two
                                bedroom residential apartments, as well as
                                stunning three bedroom duplexes. The modern
                                design relies on open spaces and clear views
                                which is reflected in the generous windows sizes
                                which can be seen in all elevations. This allows
                                the natural light to pass into all spaces without
                                compromising privacy, as the louvers are designed
                                to contrast the modern elements through the
                                traditional touch.The wood, aluminum, glazing,
                                marble, porcelain, and ceramic tiles are creatively
                                blended to work in harmony in order to provide the
                                inner spaces with a unique sense of warmness while
                                meeting the durability and quality requirements.

                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
                <Box height={550} position="relative" textAlign={"center"}>
                    <Image
                        src={"/news3.png"}
                        layout="fill"
                        objectFit='contain'
                        alt="Paradise hills"
                        data-aos="fade-up" data-aos-duration="1200" data-aos-delay="450"
                    />
                </Box>
                <Grid container id='news 1 section' justifyContent={"center"}>
                    <Grid item md={5} textAlign="center">
                        <Typography variant='h5' sx={{ fontFamily: "Crimsson" }} data-aos="fade-up" data-aos-duration="1200" data-aos-delay="200">
                            Real Estate News
                        </Typography>
                        <Typography variant='h6' sx={{ py: 3, fontFamily: "Crimsson" }} data-aos="fade-up" data-aos-duration="1200" data-aos-delay="300" >
                            The Most promising projects
                        </Typography>
                        <Box data-aos="fade-up" data-aos-duration="1200" data-aos-delay="400">
                            <Typography variant='body1' sx={{ p: 2, fontFamily: "Montserrat" }} textAlign={"justify"}>
                                Serenity Lakes offers studio, one and two
                                bedroom residential apartments, as well as
                                stunning three bedroom duplexes. The modern
                                design relies on open spaces and clear views
                                which is reflected in the generous windows sizes
                                which can be seen in all elevations. This allows
                                the natural light to pass into all spaces without
                                compromising privacy, as the louvers are designed
                                to contrast the modern elements through the
                                traditional touch.The wood, aluminum, glazing,
                                marble, porcelain, and ceramic tiles are creatively
                                blended to work in harmony in order to provide the
                                inner spaces with a unique sense of warmness while
                                meeting the durability and quality requirements.

                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
                <Box height={550} position="relative" textAlign={"center"} sx={{ backgroundColor: "#0F0F0F" }}>
                    <Image
                        src={"/news4.png"}
                        layout="fill"
                        objectFit='contain'
                        alt="Paradise hills"
                        data-aos="fade-up" data-aos-duration="1200" data-aos-delay="450"
                    />
                </Box>
                <Grid container id='news 1 section' justifyContent={"center"} sx={{ backgroundColor: "#0F0F0F" }}>
                    <Grid item md={5} textAlign="center" color={"white"}>
                        <Typography sx={{ mt: 4, fontFamily: "Crimsson" }} variant='h5' data-aos="fade-up" data-aos-duration="1200" data-aos-delay="200">
                            Properties News
                        </Typography>
                        <Typography variant='h6' sx={{ py: 3, fontFamily: "Crimsson" }} data-aos="fade-up" data-aos-duration="1200" data-aos-delay="300" >
                            The launch of "Serenity Lakes 2"
                        </Typography>
                        <Box data-aos="fade-up" data-aos-duration="1200" data-aos-delay="400">
                            <Typography variant='body1' sx={{ p: 2, mb: 4, fontFamily: "Montserrat" }} textAlign={"justify"}>
                                Serenity Lakes offers studio, one and two
                                bedroom residential apartments, as well as
                                stunning three bedroom duplexes. The modern
                                design relies on open spaces and clear views
                                which is reflected in the generous windows size
                                which can be seen in all elevations. This allows
                                the natural light to pass into all spaces without
                                compromising privacy, as the louvers are designed
                                to contrast the modern elements through the
                                traditional touch.The wood, aluminum, glazing,
                                marble, porcelain, and ceramic tiles are creatively
                                blended to work in harmony in order to provide the
                                inner spaces with a unique sense of warmness while
                                meeting the durability and quality requirements.

                            </Typography>
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
            <Head>
                <title>Gulf Land Property Developers - News</title>
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
                                alt="logo"
                                width={181}
                                height={42}
                            />
                            <div style={{ flexGrow: 1 }}></div>
                            <Button color='inherit' disableRipple sx={{ textTransform: "capitalize", color: "#DAD3C7" }}>
                                <Link href={"/"}>Home</Link>
                            </Button>
                            <Button color='inherit' disableRipple sx={{ textTransform: "capitalize", ml: 2, color: "#DAD3C7" }}>
                                <Link href={"about-us"}>About Us</Link>
                            </Button>
                            <Button color='inherit' disableRipple sx={{ textTransform: "capitalize", ml: 2, color: "#DAD3C7" }}>
                                <Link href={"why-dubai"}>Why Dubai</Link>
                            </Button>
                            <Button color='inherit' disableRipple sx={{ textTransform: "capitalize", ml: 2, color: "#DAD3C7" }}>
                                Our Properties
                            </Button>
                            <Button color='inherit' disableRipple sx={{ textTransform: "capitalize", ml: 2, color: "#DAD3C7" }}>
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
                                <Typography sx={{ fontSize: 120 }} color={"#F0EDE8"}
                                    data-aos="fade-up" data-aos-duration="1200" data-aos-delay="0">
                                    News
                                </Typography>
                                <Typography sx={{ mx: "auto" }} width={"40%"} fontSize={32} color={"#F0EDE8"} lineHeight={1} fontWeight={"lighter"}
                                    data-aos="fade-up" data-aos-duration="1200" data-aos-delay="450">
                                    Follow and Get The News About real
                                    estate and investing in dubai with GLPD
                                </Typography>
                            </Box>
                        </Grid>
                    </Grid>
                </div>
            </Paper>
            <Grid container height={"100vh"} id='news 1 section' justifyContent={"center"}>
                <Grid item md={5} sx={{ my: "auto" }}>
                    <Typography variant='h3' data-aos="fade-up" data-aos-duration="1200" data-aos-delay="200">
                        Investements
                    </Typography>
                    <Typography variant='h5' sx={{ py: 6 }} data-aos="fade-up" data-aos-duration="1200" data-aos-delay="300" >
                        What properties to invest on
                    </Typography>
                    <Box width={"75%"} data-aos="fade-up" data-aos-duration="1200" data-aos-delay="400">
                        <Typography variant='body1'>
                            Serenity Lakes offers studio, one and two
                            bedroom residential apartments, as well as
                            stunning three bedroom duplexes. The modern
                            design relies on open spaces and clear views
                            which is reflected in the generous windows sizes
                            which can be seen in all elevations. This allows
                            the natural light to pass into all spaces without
                            compromising privacy, as the louvers are designed
                            to contrast the modern elements through the
                            traditional touch.The wood, aluminum, glazing,
                            marble, porcelain, and ceramic tiles are creatively
                            blended to work in harmony in order to provide the
                            inner spaces with a unique sense of warmness while
                            meeting the durability and quality requirements.

                        </Typography>
                    </Box>
                </Grid>
                <Grid item md={5} sx={{ my: "auto" }}>
                    <Box height={840} position={"relative"} data-aos="fade-up" data-aos-duration="1200" data-aos-delay="0">
                        <Image
                            src={"/news1.png"}
                            layout='fill'
                            objectFit='contain'
                            alt="Investements"
                        />
                    </Box>
                </Grid>
            </Grid>
            <Grid container height={"100vh"} id='news 1 section' justifyContent={"center"} sx={{ backgroundColor: "#0F0F0F" }}>
                <Grid item md={5} sx={{ my: "auto", pl: 10 }}>
                    <Box height={840} position={"relative"} data-aos="fade-up" data-aos-duration="1200" data-aos-delay="0">
                        <Image
                            src={"/news2.png"}
                            layout='fill'
                            objectFit='contain'
                            alt="Properties"
                        />
                    </Box>
                </Grid>
                <Grid item md={5} sx={{ my: "auto" }}>
                    <Typography variant='h3' color={"white"} data-aos="fade-up" data-aos-duration="1200" data-aos-delay="200">
                        Properties
                    </Typography>
                    <Typography variant='h5' sx={{ py: 6 }} color={"white"} data-aos="fade-up" data-aos-duration="1200" data-aos-delay="300" >
                        How to chose your property
                    </Typography>
                    <Box width={"75%"} data-aos="fade-up" data-aos-duration="1200" data-aos-delay="400">
                        <Typography variant='body1' color={"white"}>
                            Serenity Lakes offers studio, one and two
                            bedroom residential apartments, as well as
                            stunning three bedroom duplexes. The modern
                            design relies on open spaces and clear views
                            which is reflected in the generous windows sizes
                            which can be seen in all elevations. This allows
                            the natural light to pass into all spaces without
                            compromising privacy, as the louvers are designed
                            to contrast the modern elements through the
                            traditional touch.The wood, aluminum, glazing,
                            marble, porcelain, and ceramic tiles are creatively
                            blended to work in harmony in order to provide the
                            inner spaces with a unique sense of warmness while
                            meeting the durability and quality requirements.

                        </Typography>
                    </Box>
                </Grid>
            </Grid>
            <Grid container height={"100vh"} id='news 1 section' justifyContent={"center"}>
                <Grid item md={5} sx={{ my: "auto" }}>
                    <Typography variant='h3' data-aos="fade-up" data-aos-duration="1200" data-aos-delay="200">
                        Real Estate News
                    </Typography>
                    <Typography variant='h5' sx={{ py: 6 }} data-aos="fade-up" data-aos-duration="1200" data-aos-delay="300" >
                        The Most promising projects
                    </Typography>
                    <Box width={"75%"} data-aos="fade-up" data-aos-duration="1200" data-aos-delay="400">
                        <Typography variant='body1'>
                            Serenity Lakes offers studio, one and two
                            bedroom residential apartments, as well as
                            stunning three bedroom duplexes. The modern
                            design relies on open spaces and clear views
                            which is reflected in the generous windows sizes
                            which can be seen in all elevations. This allows
                            the natural light to pass into all spaces without
                            compromising privacy, as the louvers are designed
                            to contrast the modern elements through the
                            traditional touch.The wood, aluminum, glazing,
                            marble, porcelain, and ceramic tiles are creatively
                            blended to work in harmony in order to provide the
                            inner spaces with a unique sense of warmness while
                            meeting the durability and quality requirements.

                        </Typography>
                    </Box>
                </Grid>
                <Grid item md={5} sx={{ my: "auto" }}>
                    <Box height={840} position={"relative"} data-aos="fade-up" data-aos-duration="1200" data-aos-delay="0">
                        <Image
                            src={"/news3.png"}
                            layout='fill'
                            objectFit='contain'
                            alt="Real Estate News"
                        />
                    </Box>
                </Grid>
            </Grid>
            <Grid container height={"100vh"} id='news 1 section' justifyContent={"center"} sx={{ backgroundColor: "#0F0F0F" }}>
                <Grid item md={5} sx={{ my: "auto", pl: 10 }}>
                    <Box height={840} position={"relative"} data-aos="fade-up" data-aos-duration="1200" data-aos-delay="0">
                        <Image
                            src={"/news4.png"}
                            layout='fill'
                            objectFit='contain'
                            alt="Properties News"
                        />
                    </Box>
                </Grid>
                <Grid item md={5} sx={{ my: "auto" }}>
                    <Typography variant='h3' color={"white"} data-aos="fade-up" data-aos-duration="1200" data-aos-delay="200">
                        Properties News
                    </Typography>
                    <Typography variant='h5' sx={{ py: 6 }} color={"white"} data-aos="fade-up" data-aos-duration="1200" data-aos-delay="300" >
                        The launch of &#34;Serenity Lakes 2&#34;
                    </Typography>
                    <Box width={"75%"} data-aos="fade-up" data-aos-duration="1200" data-aos-delay="0">
                        <Typography variant='body1' color={"white"}>
                            Serenity Lakes offers studio, one and two
                            bedroom residential apartments, as well as
                            stunning three bedroom duplexes. The modern
                            design relies on open spaces and clear views
                            which is reflected in the generous windows sizes
                            which can be seen in all elevations. This allows
                            the natural light to pass into all spaces without
                            compromising privacy, as the louvers are designed
                            to contrast the modern elements through the
                            traditional touch.The wood, aluminum, glazing,
                            marble, porcelain, and ceramic tiles are creatively
                            blended to work in harmony in order to provide the
                            inner spaces with a unique sense of warmness while
                            meeting the durability and quality requirements.

                        </Typography>
                    </Box>
                </Grid>
            </Grid>
            <GetInTouch />
            <OurOffice />
            <Footer />
        </div>
    )
}

export default News