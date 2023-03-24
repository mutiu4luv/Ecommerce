import { Button, Container, Grid } from "@material-ui/core";
import { Typography } from "@mui/material";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import CartItem from "./cartItem/CartItem";
import useStyles from "./styles";
const Cart = ({
  cart,
  handleUpdateCartQty,
  handleRemoveFromCart,
  handleEmptyCart,
  // refetch,
}) => {
  // useEffect(() => {
  //   refetch();
  // }, [refetch]);
  // const isEmpty = !cart.line_items;
  const classes = useStyles();
  console.log(cart);

  const EmptyCart = () => {
    <Typography variant="subtitle1">
      You have no items in your ShoppingCart.
      <Link to="/" className={classes.link}>
        Start adding some
      </Link>{" "}
      !
    </Typography>;
  };

  const FilledCart = () => {
    <>
      <Grid container spacing={3}>
        {cart.line_items.map((item) => (
          <Grid item xs={12} sm={4} key={item.id}>
            <div>{item.name}</div>
          </Grid>
        ))}
      </Grid>
      <div className={classes.cardDetails}>
        <Typography variant="h4">
          Subtotal: {cart.subtotal.formatted_with_symbol}
        </Typography>
        <div>
          <Button
            className={classes.emptyButton}
            size="large"
            type="button"
            variant="contained"
            color="secondary"
          >
            Empty Cart
          </Button>
          <Button
            className={classes.checkoutBotton}
            size="large"
            type="button"
            variant="contained"
            color="primary"
          >
            Checkout
          </Button>
        </div>
      </div>
    </>;
  };
  if (!cart?.line_items)
    return (
      <>
        <div
          style={{
            color: "red",

            margin: "400px",
          }}
        >
          Loading...
        </div>
      </>
    );
  return (
    <Container>
      <div className={classes.toolbar} />
      <Typography className={classes.title} variant="h3" gutterBottom>
        Your Shopping Cart
      </Typography>
      {!cart.line_items ? <EmptyCart /> : <FilledCart />}
      <Grid container spacing={3}>
        {cart?.line_items.map((item) => (
          <Grid item xs={12} sm={4} key={item.id}>
            <CartItem
              item={item}
              onUpdateCartQty={handleUpdateCartQty}
              onRemoveFromCart={handleRemoveFromCart}
            />
          </Grid>
        ))}
      </Grid>
      <div className={classes.cardDetails}>
        <Typography variant="h4">
          Subtotal: {cart?.subtotal?.formatted_with_symbol}
        </Typography>
        <div>
          <Button
            className={classes.emptyButton}
            size="large"
            type="button"
            variant="contained"
            color="secondary"
            onClick={handleEmptyCart}
          >
            Empty Cart
          </Button>
          <Button
            component={Link}
            to="/checkout"
            className={classes.checkoutBotton}
            size="large"
            type="button"
            variant="contained"
            color="primary"
          >
            Checkout
          </Button>
        </div>
      </div>
    </Container>
  );
};

export default Cart;
