import React from "react";
import Cards from "./Card/Cards";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function Grids(props) {
  return (
    <Box sx={{ flexGrow: 3 }}>
      <Grid container spacing={4}>
      {props.data.map((e, i) => {
                return (
                  e.imageUrl?
                  <Grid item xs={11} sm={8} md={7} lg={4}>
                    <Cards key={i} e={e} cart={props.cart}/>
                  </Grid>:
                  console.log("error")
                );
              })}
      </Grid>
    </Box>
  );
}

export default Grids;
