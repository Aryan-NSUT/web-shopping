import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  IconButton,
} from "@material-ui/core";
import { AddShoppingCartRounded } from "@material-ui/icons";
import React from "react";
import useStyles from "./productStyles";

const Product = ({ product, onAddToCart }) => {
  const classes = useStyles();
  const name = product.name;
  const desc = product.description;
  const price = product.price.formatted_with_symbol;
  const imgScr = product.image.url;

  return (
    <Card className={classes.root}>
      <CardMedia className={classes.media} image={imgScr} title={name} />
      <CardContent>
        <div className={classes.cardContent}>
          <Typography variant="h5" gutterBottom>
            {name}
          </Typography>
          <Typography variant="h5" gutterBottom>{price}</Typography>
        </div>
        <Typography dangerouslySetInnerHTML={{__html : desc}} variant="body2" color="textSecondary" component="p" />
      </CardContent>
      <CardActions disableSpacing className={classes.cardActions}>
        <IconButton aria-label="Add to Cart" onClick={()=>onAddToCart(product.id,1)}>
          <AddShoppingCartRounded />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default Product;
