import { Container, Grid, Typography } from '@mui/material'
import React from 'react'
import {
    GoogleMap,
    useLoadScript,
    Marker,
} from "@react-google-maps/api";
import mapStyles from "../styles/mapStyles";

const OurOfficeMobile = () => {

    const libraries = ["places"];
    const mapContainerStyle = {
        height: "280px",
        width: "320px",
    };
    const options = {
        styles: mapStyles,
        disableDefaultUI: true,
        zoomControl: true,
    };
    const center = {
        lat: parseFloat(25.1846),
        lng: parseFloat(55.2639),
    };

    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: "AIzaSyDdUFUt8PVJa1SfPHicZyMGVLwXnp53cQY",
        libraries,
    });

    const mapRef = React.useRef();
    const onMapLoad = React.useCallback((map) => {
        mapRef.current = map;
    }, []);

    if (loadError) return <div style={{ textAlign: "center" }}><p>Error</p></div>;
    if (!isLoaded) return <div style={{ textAlign: "center" }}><p>Loading...</p></div>;

    return (
        <div>
            <Grid container sx={{ my: 2 }} justifyContent={'center'}>
                <Grid item xs={12}>
                    <Typography textAlign={"center"} sx={{ my: 2, fontFamily: "Crimson" }} variant='h5' data-aos="fade-up" data-aos-duration="1200" data-aos-delay="0">
                        Our Office
                    </Typography>
                </Grid>
                <Grid item data-aos="fade-up" data-aos-duration="1200" data-aos-delay="0">
                    <GoogleMap
                        id="map"
                        mapContainerStyle={mapContainerStyle}
                        zoom={14}
                        center={center}
                        options={options}
                        onLoad={onMapLoad}
                    >
                        <Marker
                            position={center}
                            icon={{
                                url: "https://res.cloudinary.com/suizaax/image/upload/v1652173226/pin_bkwysd.png",
                                origin: new window.google.maps.Point(0, 0),
                                anchor: new window.google.maps.Point(15, 15),
                                scaledSize: new window.google.maps.Size(30, 30),
                            }}
                        />
                    </GoogleMap>
                </Grid>
                <Grid item sx={{ my: 2 }} data-aos="fade-up" data-aos-duration="1200" data-aos-delay="0">
                    <Typography sx={{ fontFamily: "Montserrat"  }}>
                        The Bayswater Tower, Office 2101 Business Bay,
                    </Typography>
                    <Typography sx={{ fontFamily: "Montserrat"  }}>
                        Dubai, United Arab Emirates
                    </Typography>
                </Grid>
            </Grid>
        </div>
    )
}

export default OurOfficeMobile