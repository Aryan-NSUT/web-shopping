import React from "react";
import { Typography, Container, Button, Grid } from "@material-ui/core";
import { Link } from "react-router-dom";
import useStyles from "./CartStyles";
import CartItem from "./CartItem/CartItem";
const Cart = ({
  cart,
  updateItemHandler,
  removeItemHandler,
  emptyItemHandler,
}) => {
  //   const isEmpty = true;

  const classes = useStyles();
  const EmptyCart = () => (
    <Typography variant="subtitle1">
      <Link className={classes.link} to="/">
        Start Adding items,
      </Link>
       in your cart
    </Typography>
  );
  const FilledCart = () => (
    <>
      <Grid container spacing={3}>
        {cart.line_items.map((item) => (
          <Grid item xs={12} sm={4} key={item.id}>
            <div>
              {" "}
              <CartItem
                item={item}
                onUpdateItem={updateItemHandler}
                onRemoveItem={removeItemHandler}
              />
            </div>
          </Grid>
        ))}
      </Grid>
      <div className={classes.cardDetails}>
        <Typography varient="h4">
          Subtotal = {cart.subtotal.formatted_with_symbol}
        </Typography>
        <div>
          <Button
            className={classes.emptyButton}
            size="large"
            type="button"
            variant="contained"
            color="secondary"
            onClick={emptyItemHandler}
          >
            Empty Cart
          </Button>
          <Button
            className={classes.checkout}
            component = {Link}
            to="/checkout"
            size="large"
            type="button"
            variant="contained"
            color="primary"
          >
            Checkout
          </Button>
        </div>
      </div>
    </>
  );
  if (!cart.line_items) return "Loading...";
  return (
    <Container>
      <div className={classes.toolbar} />
      <Typography className={classes.title} variant="h3" gutterBottom>
        Your Shopping Cart
      </Typography>
      {!cart.line_items.length ? <EmptyCart /> : <FilledCart />}
    </Container>
  );
};

export default Cart;
