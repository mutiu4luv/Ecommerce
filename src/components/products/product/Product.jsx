import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  IconButton,
} from "@mui/material";
import { AddShoppingCart } from "@mui/icons-material";
import useStyles from "./styles";

const Product = ({ product, onAddToCart }) => {
  const classes = useStyles();

  // const handleAddToCart = () => {
  //   onAddToCart(product.id, 1);
  // };
  // const handleAddToCart = () => {
  //   onAddToCart(product.id, 1);

  // };
  return (
    <Card className={classes.root} style={{ marginTop: "85px" }}>
      <CardMedia
        className={classes.media}
        image={product.image.url}
        title={Product.name}
      />
      <CardContent>
        <div className={classes.CardContent}>
          <Typography variant="h5" gutterBottom>
            {product.name}
          </Typography>
          <Typography variant="h5">
            {product.price.formatted_with_symbol}
          </Typography>
          <Typography
            dangerouslySetInnerHTML={{ __html: product.description }}
            variant="body2"
            gutterBottom
          />
        </div>
      </CardContent>
      <CardActions disableSpacing className={classes.CardActions}>
        <IconButton
          aria-label="Add to Cart "
          onClick={() => onAddToCart(product.id, 1)}
          // onClick={handleAddToCart}
        >
          <AddShoppingCart />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default Product;
