import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";


function AddProduct() {
  const [product, setProduct] = useState({});
  const [url,setUrl]=useState("");
  const [image,setImage]=useState("");

  const handleChange = (event) => {
    setProduct({ ...product, [event.target.id]: event.target.value });
  };



  return (
    <div>
        
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
          <Button variant="contained" component="label">
            Upload Image
            <input hidden accept="image/*" multiple type="file" />
          </Button>
        </div>
      </Box>
    </div>
  );
}

export default AddProduct;
