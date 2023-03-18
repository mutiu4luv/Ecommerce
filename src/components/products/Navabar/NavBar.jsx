import { AppBar, Badge, IconButton, Toolbar, Typography } from "@mui/material";
import navbar from "../../../assets/navbar.png";
import React from "react";
// import useStyles from "./styles";
import { ShoppingCart } from "@mui/icons-material";
import { Link, useLocation } from "react-router-dom";

const NavBar = ({ totalItems }) => {
  // const classes = useStyles();
  const location = useLocation();
  return (
    <div>
      <AppBar
        position="fixed"
        // className={classes.appbar}
        color="inherit"
        style={{ background: "transparent" }}
      >
        <Toolbar>
          <Typography
            component={Link}
            to="/"
            variant="h6"
            // className={classes.title}
            color="inherit"
          >
            <img
              src={navbar}
              alt="Mutiu.js"
              height="23px"
              style={{ marginRight: "10px" }}
              // className={classes.image}
            />
            mutiu.js
          </Typography>
          {/* <div className={classes.grow} /> */}
          <div
            // className={classes.button}
            style={{
              marginLeft: "auto",
            }}
          >
            {location.pathname === "/" && (
              <IconButton
                component={Link}
                to="/cart"
                aria-label="show cart item"
                color="inherit"
              >
                <Badge badgeContent={totalItems} color="secondary">
                  <ShoppingCart />
                </Badge>
              </IconButton>
            )}
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavBar;
