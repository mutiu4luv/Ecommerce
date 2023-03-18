import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@material-ui/core";
import React, { useState } from "react";
import useStyles from "./styles";

const CartItem = ({ item, onUpdateCartQty, onRemoveFromCart }) => {
  const [quantity, setQuantity] = useState(item.quantity);
  const classes = useStyles();

  const onUpdate = () => {
    setQuantity((prev) => prev + 1);
    onUpdateCartQty(item.id, quantity);
  };
  const onReduce = () => {
    setQuantity((prev) => prev - 1);
    onUpdateCartQty(item.id, quantity);
  };
  return (
    <div className={classes.root} style={{}}>
      <Card>
        <CardMedia
          image={item.image.url}
          alt={item.name}
          className={classes.media}
          // style={{ height: 260 }}
        />
        <CardContent
          className={classes.cardContent}
          // style={{
          //   display: "flex",
          //   justifyContent: "space-between",
          // }}
        >
          <Typography variant="h6">{item.name}</Typography>
          <Typography variant="h6">
            {item.price.formatted_with_symbol}
          </Typography>
        </CardContent>
        <CardActions
          className={classes.cardActions}
          // style={{ justifyContent: "space-between" }}
        >
          <div
            className={classes.buttons}
            // style={{ display: "flex", alignItems: "center" }}
          >
            <Button
              type="button"
              size="small"
              onClick={onReduce}
              // onClick={() => onUpdateCartQty(item.id, item.quantity - 1)}
            >
              -
            </Button>
            <Typography>{quantity}</Typography>
            <Button type="button" size="small" onClick={onUpdate}>
              +
            </Button>
          </div>
          <Button
            variant="contained"
            type="button"
            color="secondary"
            onClick={() => onRemoveFromCart(item.id)}
          >
            Remove
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default CartItem;
