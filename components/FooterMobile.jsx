import { Facebook, Instagram, Twitter } from '@mui/icons-material'
import { Button, Divider, Grid, IconButton, Typography } from '@mui/material'
import { Box } from '@mui/system'
import Link from 'next/link'
import React from 'react'

const FooterMobile = () => {
    return (
        <div>
            <Box textAlign={"center"} sx={{ backgroundColor: "#0F0F0F", mb: 10 }}>
                <Grid container justifyContent={"center"} sx={{ backgroundColor: "#0F0F0F", mt: 2 }}>
                    <Grid item xs={12} sx={{ mt: 4 }}>
                        <Button disableRipple sx={{ color: '#DAD3C7', textTransform: "capitalize", fontFamily: "Crimsson" }}
                            data-aos="fade-up" data-aos-duration="1200" data-aos-delay="100">
                            <Link href={"why-dubai"}>Why Dubai</Link>
                        </Button>
                        <Divider sx={{ borderColor: "rgba(218, 211, 199, 0.3)", my: 2 }}
                         data-aos="zoom-in" data-aos-duration="1200" data-aos-delay="600" />
                    </Grid>
                    <Grid item xs={12}>
                        <Button disableRipple sx={{ color: '#DAD3C7', textTransform: "capitalize", fontFamily: "Crimsson" }}
                            data-aos="fade-up" data-aos-duration="1200" data-aos-delay="100">
                            <Link href={"about-us"}>About US</Link>
                        </Button>
                        <Divider sx={{ borderColor: "rgba(218, 211, 199, 0.3)", my: 2 }}
                         data-aos="zoom-in" data-aos-duration="1200" data-aos-delay="600" />
                    </Grid>
                    <Grid item xs={12}>
                        <Button disableRipple sx={{ color: '#DAD3C7', textTransform: "capitalize", fontFamily: "Crimsson" }}
                            data-aos="fade-up" data-aos-duration="1200" data-aos-delay="100">
                            <Link href={"news"}>News</Link>
                        </Button>
                        <Divider sx={{ borderColor: "rgba(218, 211, 199, 0.3)", my: 2 }}
                         data-aos="zoom-in" data-aos-duration="1200" data-aos-delay="600" />
                    </Grid>
                    <Grid item xs={12}>
                        <Button disableRipple sx={{ color: '#DAD3C7', textTransform: "capitalize", fontFamily: "Crimsson" }}
                            data-aos="fade-up" data-aos-duration="1200" data-aos-delay="100">
                            <Link href={"contact-us"}>Contact US</Link>
                        </Button>
                        <Divider sx={{ borderColor: "rgba(218, 211, 199, 0.3)", my: 2 }}
                         data-aos="zoom-in" data-aos-duration="1200" data-aos-delay="600" />
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant='body1' sx={{ color: "#DAD3C7", fontFamily: "Crimsson" }}
                            data-aos="fade-up" data-aos-duration="1200" data-aos-delay="500">
                            +971 4 587 3777
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant='body1' sx={{ color: "#DAD3C7", fontFamily: "Crimsson" }}
                            data-aos="fade-up" data-aos-duration="1200" data-aos-delay="600">
                            hello@gulflandproperty.com
                        </Typography>
                        <Divider sx={{ borderColor: "rgba(218, 211, 199, 0.3)", my: 2 }}
                         data-aos="zoom-in" data-aos-duration="1200" data-aos-delay="600" />
                    </Grid>
                    <Grid item xs={12}>
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
                    <Grid item sx={{ mb: 10 }} >
                        <Typography sx={{ color: "#DAD3C7", fontFamily: "Crimsson" }} variant="body2" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="600">
                            Copyright © 2022 Gulf Land Property Developers
                        </Typography>
                        <Typography sx={{ color: "#DAD3C7", fontFamily: "Crimsson", fontSize: "20px" }} variant="body2" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="600">
                            Created By <a href="https://www.igniteae.com/" style={{ color: "white" }}>Ignite Technologies</a>
                        </Typography>
                    </Grid>
                </Grid>
            </Box>
        </div>
    )
}

export default FooterMobile