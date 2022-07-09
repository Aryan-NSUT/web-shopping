import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Badge,
  MenuItem,
  Menu,
  Typography,
} from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";
import useStyles from "./NavBarStyles";
import { Link, useLocation } from "react-router-dom";

const Navbar = ({ totalItems }) => {
  const location = useLocation();
  const classes = useStyles();
  return (
    <>
      <AppBar
        className={classes.AppBar}
        position="fixed"
        color="inherit"
        style={{ background: "#311465" }}
      >
        <Toolbar>
          <Typography
            component={Link}
            to="/"
            variant="h6"
            className={classes.title}
            color="inherit"
          >
            <img
              src={"https://static.toiimg.com/photo/78271993.cms"}
              alt="Mountain"
              height="50px"
              className={classes.image}
              style={{ borderRadius: "10px" }}
            />
            Mountains
          </Typography>
          <div className={classes.grow} />
          { location.pathname === "/" &&(
            <div className={classes.button}>
              <IconButton
                component={Link}
                to="/cart"
                aria-label="Show Cart Items"
                color="inherit"
              >
                <Badge badgeContent={totalItems} color="secondary">
                  <ShoppingCart style={{ color: "white" }} />
                </Badge>
              </IconButton>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
