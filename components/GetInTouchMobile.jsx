import { Box, Button, FormControl, Grid, InputBase, MenuItem, Select, Typography } from '@mui/material'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
import { minHeight } from '@mui/system';

const GetInTouchMobile = () => {

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
            <Grid container id='get in touch section' sx={{ backgroundImage: 'url("/getinTouchBack.png")', backgroundPosition: "center", backgroundSize: "cover" }}>
                <Grid item sm={12} sx={{ p: 2 }}>
                    <Typography variant='h4' data-aos="fade-up" data-aos-duration="1200" data-aos-delay="0" sx={{ mt: 4, fontFamily: "Crimson" }}>
                        Get in Touch
                    </Typography>
                    <Typography variant='body2' data-aos="fade-up" data-aos-duration="1200" data-aos-delay="200" sx={{ my: 3, fontFamily: "Montserrat"  }}>
                        Contact us by filling the following form with your message.
                    </Typography>
                    <Box>
                        <form>
                            <Grid container direction="row" spacing={1} alignItems='center'>
                                <Grid item xs={12} data-aos="fade-up" data-aos-duration="1200" data-aos-delay="200" sx={{ mb: 2 }}>
                                    <InputBase
                                        placeholder='First Name'
                                        fullWidth
                                        sx={{
                                            border: "rgba(149, 157, 165, 0.2)",
                                            p: 1,
                                            borderStyle: "solid",
                                            backgroundColor: "#FAFAFA",
                                            boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
                                            fontFamily: "Montserrat" 
                                        }}
                                    />
                                </Grid>
                                <Grid item xs={12} data-aos="fade-up" data-aos-duration="1200" data-aos-delay="200" sx={{ mb: 2 }}>
                                    <InputBase
                                        placeholder='Last Name'
                                        fullWidth
                                        sx={{
                                            border: "rgba(149, 157, 165, 0.2)",
                                            p: 1,
                                            borderStyle: "solid",
                                            backgroundColor: "#FAFAFA",
                                            boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
                                            fontFamily: "Montserrat" 
                                        }}
                                    />
                                </Grid>
                                <Grid item xs={12} data-aos="fade-up" data-aos-duration="1200" data-aos-delay="300" sx={{ mb: 2 }}>
                                    <InputBase
                                        placeholder='Email'
                                        autoComplete='email'
                                        fullWidth
                                        sx={{
                                            border: "rgba(149, 157, 165, 0.2)",
                                            p: 1,
                                            borderStyle: "solid",
                                            backgroundColor: "#FAFAFA",
                                            boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
                                            fontFamily: "Montserrat" 
                                        }}
                                    />

                                </Grid>
                                <Grid item xs={8} data-aos="fade-up" data-aos-duration="1200" data-aos-delay="300" sx={{ mb: 2 }}>
                                    <InputBase
                                        placeholder='Phone Number'
                                        fullWidth
                                        sx={{
                                            border: "rgba(149, 157, 165, 0.2)",
                                            p: 1,
                                            borderStyle: "solid",
                                            backgroundColor: "#FAFAFA",
                                            boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
                                            fontFamily: "Montserrat" 
                                        }}
                                    />
                                </Grid>
                                <Grid item xs={4} data-aos="fade-up" data-aos-duration="1200" data-aos-delay="300" sx={{ mb: 2 }}>
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
                                                boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
                                                width: "113px",
                                                fontFamily: "Montserrat" 
                                            }}
                                        >
                                            <MenuItem value={"UAE"}> UAE</MenuItem>
                                            <MenuItem value={"DZ"}>DZ</MenuItem>
                                            <MenuItem value={"USA"}> USA</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Grid>
                                <Grid item xs={12} data-aos="fade-up" data-aos-duration="1200" data-aos-delay="400" sx={{ mb: 2 }}>
                                    <InputBase
                                        placeholder='Interested in?'
                                        fullWidth
                                        sx={{
                                            border: "rgba(149, 157, 165, 0.2)",
                                            p: 1,
                                            borderStyle: "solid",
                                            backgroundColor: "#FAFAFA",
                                            boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
                                            fontFamily: "Montserrat" 
                                        }}
                                    />
                                </Grid>
                                <Grid item xs={12} data-aos="fade-up" data-aos-duration="1200" data-aos-delay="500" sx={{ mb: 2 }}>
                                    <InputBase
                                        placeholder='Write your message here...'
                                        fullWidth
                                        multiline
                                        sx={{
                                            border: "rgba(149, 157, 165, 0.2)",
                                            p: 1,
                                            borderStyle: "solid",
                                            backgroundColor: "#FAFAFA",
                                            boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
                                            minHeight: "200px",
                                            fontFamily: "Montserrat" 

                                        }}
                                    />
                                </Grid>
                                <Grid item xs={12} data-aos="fade-up" data-aos-duration="1200" data-aos-delay="600" sx={{ mb: 10 }}>
                                    <Box textAlign={"center"}>
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
            </Grid>
        </div>
    )
}

export default GetInTouchMobile