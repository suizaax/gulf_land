import { Menu, MoreVert } from '@mui/icons-material'
import { AppBar, Button, Container, IconButton, Toolbar, List, ListItem, ListItemText, Drawer, Divider, Typography } from '@mui/material'
import { Box } from '@mui/system'
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

const ContactUs = () => {

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
                <Box sx={{ flexGrow: 1, mb: 7 }}>
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
                <GetInTouchMobile />
                <OurOfficeMobile />
                <FooterMobile />
            </div>
        )
    }

    return (
        <div>
            <Head>
                <title>Gulf Land Property Developers - Contact Us</title>
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
                                src="/GulfLandLogoDark.png"
                                alt="GLPD LOGO"
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
                            <Button color='inherit' disableRipple sx={{ textTransform: "capitalize", ml: 2, color: "#DAD3C7", fontFamily: "Montserrat" }}>
                                <Link href={"why-dubai"}>Why Dubai</Link>
                            </Button>
                            <Button color='inherit' disableRipple sx={{ textTransform: "capitalize", ml: 2, color: "#DAD3C7", fontFamily: "Montserrat" }}>
                                Our Properties
                            </Button>
                            <Button color='inherit' disableRipple sx={{ textTransform: "capitalize", ml: 2, color: "white", fontFamily: "Montserrat" }}>
                                <Link href={"contact-us"}>Contact</Link>
                            </Button>
                        </Toolbar>
                    </Container>
                </AppBar>
            </Box>
            <GetInTouch />
            <OurOffice />
            <Footer />
        </div>
    )
}

export default ContactUs