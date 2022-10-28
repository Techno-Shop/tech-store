import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import axios from "axios"

function AddProduct() {
  const [url, setUrl] = useState("");
  
  const [product, setProduct] = useState({});
  const [image, setImage] = useState("");

  const handleChange = (event) => {
    setProduct({ ...product, [event.target.id]: event.target.value });
    
  };

  const cloudName = "dmqowjr06";

  const onClickHandler = (e) => {
    e.preventDefault();
    const file=e.target.files[0]
    const formData = new FormData();
    formData.append("file",file);
    formData.append("api_key", "494476953465418");
    formData.append("upload_preset","z1o9n4vg")
    axios.post(`https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,formData)
    .then((res)=>{console.log(res.data.url);setUrl(JSON.stringify(res.data.url));console.log(url);setProduct({...product,imageUrl:url})})
    .catch((err) => {
        console.log(err);
    })    
  };

  const uploadHandler=()=>{
    
  }

  return (
    <div>
        {console.log(product)}
      <Box>
        <div>
          <TextField
            id="name"
            label="Product Name"
            multiline
            maxRows={4}
            margin="normal"
            onChange={handleChange}
          />
        </div>
        <div>
          <TextField
            id="field"
            label="Field"
            placeholder="Placeholder"
            multiline
            margin="normal"
            onChange={handleChange}
          />
        </div>
        <div>
          <TextField
            id="price"
            label="Price"
            placeholder="Placeholder"
            multiline
            margin="normal"
            onChange={handleChange}
          />
        </div>
        <div>
          <TextField
            id="description"
            label="Description"
            multiline
            rows={4}
            margin="normal"
            onChange={handleChange}
          />
        </div>
        <div>
            <input  accept="image/*" type="file" onChange={(e)=>onClickHandler(e)} name="test"/>
        </div>
        <div>
            <button onClick={()=>uploadHandler()}>upload</button>
        </div>
       
      </Box>
    </div>
  );
}

export default AddProduct;
