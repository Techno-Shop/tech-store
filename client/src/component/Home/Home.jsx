import React from "react";
import Carousele from "../carousel/Carousele";
import NavbarComp from "../NavbarComp";
import "./Home.css";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Cards from "../Card/Cards";
import Typography from '@mui/material/Typography';

function Home() {
  return (
    <div className="home">
      <NavbarComp />
      <div className="carousel">
        <Carousele />
      </div>
      <center>
        <div className="mostTitle">
        <Typography gutterBottom variant="h4" component="div" color={"#00BFFF"}>
            Our Most Liked Products
        </Typography>
        </div>
        <div className="mostBought">
          <Box sx={{ flexGrow: 3 }}>
            <Grid container spacing={8}>
              <Grid item xs={11} sm={8} md={7} lg={4}>
                <Cards />
              </Grid>
              <Grid item xs={11} sm={8} md={7} lg={4}>
                <Cards />
              </Grid>
              <Grid item xs={11} sm={8} md={7} lg={4}>
                <Cards />
              </Grid>
            </Grid>
          </Box>
        </div>
      </center>
    </div>
  );
}

export default Home;
