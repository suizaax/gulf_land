import { Box, Button, FormControl, Grid, InputBase, MenuItem, Select, Typography } from '@mui/material'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";

const GetInTouch = () => {

    const [age, setAge] = useState('UAE');

    const handleChange = (event) => {
        setAge(event.target.value);
    };

    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);

    return (
        <div>
            <Grid container height={"100vh"} id='get in touch section' justifyContent={"center"} style={{ backgroundColor: "#F0EDE8" }}>
                <Grid item md={6} sx={{ mt: "auto", mb: "auto", pl: 10 }}>
                    <Typography variant='h4' sx={{ mb: 3, fontFamily: "Crimson" }} data-aos="fade-up" data-aos-duration="1200" data-aos-delay="0">
                        Get in Touch
                    </Typography>
                    <Typography variant='body2' sx={{ mb: 6, fontFamily: "Montserrat"  }} data-aos="fade-up" data-aos-duration="1200" data-aos-delay="200">
                        Contact us by filling the following form with your message.
                    </Typography>
                    <Box width={680} height={500}>
                        <form>
                            <Grid container direction="row" justifyContent={"center"} rowGap={4} columnGap={2}>
                                <Grid item md={12} data-aos="fade-up" data-aos-duration="1200" data-aos-delay="200">
                                    <InputBase
                                        placeholder='First Name'
                                        sx={{
                                            border: "rgba(149, 157, 165, 0.0)",
                                            p: 1,
                                            borderStyle: "solid",
                                            backgroundColor: "#FAFAFA",
                                            mr: 5,
                                            width: 320,
                                            boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
                                            fontFamily: "Montserrat" 
                                        }}
                                    />
                                    <InputBase
                                        placeholder='Last Name'
                                        sx={{
                                            border: "rgba(149, 157, 165, 0.0)",
                                            p: 1,
                                            borderStyle: "solid",
                                            backgroundColor: "#FAFAFA",
                                            width: 320,
                                            boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
                                            fontFamily: "Montserrat" 
                                        }}
                                    />
                                </Grid>
                                <Grid item data-aos="fade-up" data-aos-duration="1200" data-aos-delay="300">
                                    <InputBase
                                        placeholder='Email'
                                        autoComplete='email'
                                        sx={{
                                            border: "rgba(149, 157, 165, 0.0)",
                                            p: 1,
                                            borderStyle: "solid",
                                            backgroundColor: "#FAFAFA",
                                            width: 320,
                                            mr: 5,
                                            boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
                                            fontFamily: "Montserrat" 
                                        }}
                                    />
                                    <FormControl>
                                        <Select
                                            labelId="UAE"
                                            id="demo-simple-select"
                                            value={age}
                                            onChange={handleChange}
                                            sx={{
                                                backgroundColor: "#FAFAFA",
                                                borderRadius: 0,
                                                height: "52px",
                                                width: 104,
                                                mr: 3,
                                                boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
                                                fontFamily: "Montserrat" 
                                            }}
                                        >
                                            <MenuItem value={"UAE"}> UAE</MenuItem>
                                            <MenuItem value={"DZ"}>DZ</MenuItem>
                                            <MenuItem value={"USA"}> USA</MenuItem>
                                        </Select>
                                    </FormControl>
                                    <InputBase
                                        placeholder='Phone Number'
                                        sx={{
                                            border: "rgba(149, 157, 165, 0.0)",
                                            p: 1,
                                            borderStyle: "solid",
                                            backgroundColor: "#FAFAFA",
                                            width: 192,
                                            boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
                                            fontFamily: "Montserrat" 
                                        }}
                                    />
                                </Grid>
                                <Grid item data-aos="fade-up" data-aos-duration="1200" data-aos-delay="400">
                                    <InputBase
                                        placeholder='Interested in?'
                                        fullWidth
                                        sx={{
                                            border: "rgba(149, 157, 165, 0.0)",
                                            p: 1,
                                            borderStyle: "solid",
                                            backgroundColor: "#FAFAFA",
                                            width: 680,
                                            boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
                                            fontFamily: "Montserrat" 
                                        }}
                                    />
                                </Grid>
                                <Grid item data-aos="fade-up" data-aos-duration="1200" data-aos-delay="500">
                                    <InputBase
                                        placeholder='Write your message here...'
                                        fullWidth
                                        multiline
                                        sx={{
                                            border: "rgba(149, 157, 165, 0.0)",
                                            p: 1,
                                            borderStyle: "solid",
                                            backgroundColor: "#FAFAFA",
                                            width: 680,
                                            minHeight: 200,
                                            boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
                                            fontFamily: "Montserrat" 

                                        }}
                                    />
                                    <Box textAlign={"right"} sx={{ position: "relative", bottom: 50, pr: 2 }}>
                                        <Button
                                            disableRipple
                                            sx={{
                                                width: 160,
                                                backgroundColor: "#F0EDE8",
                                                color: "black",
                                                ":hover": {
                                                    backgroundColor: "#F0EDE8"
                                                },
                                                fontFamily: "Montserrat" 
                                            }}
                                        >
                                            Submit
                                        </Button>
                                    </Box>
                                </Grid>
                            </Grid>
                        </form>
                    </Box>
                </Grid>
                <Grid item md={6} sx={{
                    backgroundImage: `url("/homeGetInTouch.png")`,
                    backgroundPosition: "center",
                    backgroundSize: "cover"
                }}>
                    {/* <Box width={"50vw"} height={"100vh"} position={"relative"}>
                        <Image
                            src={"/homeGetInTouch.png"}
                            alt='nothing'
                            layout='fill'
                            objectFit='contain'
                        />
                    </Box> */}
                </Grid>
            </Grid>
        </div>
    )
}

export default GetInTouch