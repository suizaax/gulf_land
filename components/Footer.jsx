import { Facebook, Instagram, Twitter } from '@mui/icons-material'
import { Button, Container, Divider, Grid, IconButton, Typography } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
    return (
        <div>
            <footer style={{ backgroundColor: "#0F0F0F" }}>
                <Grid container direction={"column"} sx={{ p: 4 }}>
                    <Container maxWidth="xl">
                        <Grid item sx={{ mb: 4 }} md={12}>
                            <Grid container direction={"row"} alignItems={"baseline"} justifyContent={"space-between"}>
                                <Grid item>
                                    <Image
                                        src={"/gulfLandLogo.png"}
                                        width={300}
                                        height={72}
                                        alt="GLPD LOGO"
                                    />
                                </Grid>
                                <Grid item>
                                    <IconButton disableRipple sx={{ color: "#DAD3C7", }}
                                    data-aos="fade-up" data-aos-duration="1200" data-aos-delay="300">
                                        <Facebook sx={{ width: 32, height: 32 }} />
                                    </IconButton>
                                    <IconButton disableRipple sx={{ color: "#DAD3C7", }}
                                    data-aos="fade-up" data-aos-duration="1200" data-aos-delay="400">
                                        <Twitter sx={{ width: 32, height: 32 }} />
                                    </IconButton>
                                    <IconButton disableRipple sx={{ color: "#DAD3C7", }}
                                    data-aos="fade-up" data-aos-duration="1200" data-aos-delay="500">
                                        <Instagram sx={{ width: 32, height: 32 }} />
                                    </IconButton>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item>
                            <Grid container direction={"column"}>
                                <Grid item sx={{ mb: 4 }}>
                                    <Grid container direction={"row"} justifyContent={"space-between"}>
                                        <Grid item>
                                            <Button disableRipple sx={{ color: '#DAD3C7', mr: 10, fontFamily: "Montserrat" }}
                                            data-aos="fade-up" data-aos-duration="1200" data-aos-delay="100">
                                                <Link href={"/"}>Home</Link>
                                            </Button>
                                            <Button disableRipple sx={{ color: '#DAD3C7', mr: 10, fontFamily: "Montserrat" }}
                                            data-aos="fade-up" data-aos-duration="1200" data-aos-delay="200">
                                                <Link href={"news"}>News</Link>
                                            </Button>
                                            <Button disableRipple sx={{ color: '#DAD3C7', mr: 60, fontFamily: "Montserrat" }}
                                            data-aos="fade-up" data-aos-duration="1200" data-aos-delay="300">
                                                <Link href={"contact-us"}>Contact Us</Link>
                                            </Button>
                                        </Grid>
                                        <Grid item>
                                            <Typography variant='h6' sx={{ color: "#DAD3C7", fontFamily: "Montserrat" }}
                                            data-aos="fade-up" data-aos-duration="1200" data-aos-delay="600">
                                                hello@gulflandproperty.com
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item>
                                    <Grid container direction={"row"} justifyContent={"space-between"}>
                                        <Grid item>
                                            <Button disableRipple sx={{ color: '#DAD3C7', mr: 7 , fontFamily: "Montserrat"}}
                                            data-aos="fade-up" data-aos-duration="1200" data-aos-delay="400">
                                                <Link href={"about-us"}>About Us</Link>
                                            </Button>
                                            <Button disableRipple sx={{ color: '#DAD3C7', mr: 7.5, fontFamily: "Montserrat" }}
                                            data-aos="fade-up" data-aos-duration="1200" data-aos-delay="500">
                                                <Link href={"gallery"}>Gallery</Link>
                                            </Button>
                                            <Button disableRipple sx={{ color: "transparent", textIndent: "-9999px" }}>
                                                <Link href={"contact-us"}>Contact Us</Link>
                                            </Button>
                                        </Grid>
                                        <Grid item>
                                            <Typography variant='h6' sx={{ color: "#DAD3C7", fontFamily: "Montserrat" }}
                                            data-aos="fade-up" data-aos-duration="1200" data-aos-delay="500">
                                                +971 4 587 3777
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Divider sx={{ borderColor: "#DAD3C7", mb: 2, mt: 4 }}
                         data-aos="zoom-in" data-aos-duration="1200" data-aos-delay="600" />
                        <Grid item sx={{ mb: 10 }} >
                            <Typography sx={{ color: "#DAD3C7", fontFamily: "Montserrat" }} data-aos="fade-up" data-aos-duration="1200" data-aos-delay="600">
                                Copyright © 2022 Gulf Land Property Developers
                            </Typography>
                        </Grid>
                    </Container>
                </Grid>
            </footer>
        </div>
    )
}

export default Footer