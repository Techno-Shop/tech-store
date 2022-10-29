import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { IconButton, Rating } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';

export default function Cards() {
  return (
    <Card  sx={{ maxWidth: 500 }}>
      <CardMedia
        component="img"
        height="140"
        image = "/static/images/cards/contemplative-reptile.jpg" 
        alt="green iguana"
      />
      <CardContent >
        <Typography  gutterBottom variant="h6" component="div">
          PC PORTABLE
        </Typography>
        <Typography gutterBottom variant="h6" component="div" color={"#00BFFF"}>
          3500.00 DT
        </Typography>
        
        <IconButton aria-label="Add to Cart" 	mt={"10px"}>
          <ShoppingCartIcon  fontSize='medium' />
        </IconButton>
        <IconButton aria-label="Details" mt={"50px"}>
          <RemoveRedEyeIcon fontSize='medium'/>
        </IconButton>
        
      </CardContent >
    </Card>
  );
}