import { Grid } from "@mui/material";
import React, { useState } from "react";
import Product from "./product/Product";

const Products = ({ products, onAddToCart, searchQuery }) => {
  const [filterValue, setFilterValue] = useState("");

  const handleChange = (e, item) => {
    products?.filter(
      setFilterValue(e.target.value),
      item.name.toLowerCase().includes(filterValue.toLowerCase())
    );
  };
  return (
    <main>
      <Grid container justifyContent="center" spacing={4}>
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
            <Product
              product={product}
              onAddToCart={onAddToCart}
              onSearch={handleChange}
            />
          </Grid>
        ))}
      </Grid>
    </main>
  );
};

export default Products;
