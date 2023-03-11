import { AppBar, Badge, IconButton, Toolbar, Typography } from "@mui/material";
import navbar from "../../../assets/navbar.png";
import React from "react";
// import useStyles from "./styles";
import { ShoppingCart } from "@mui/icons-material";

const NavBar = () => {
  // const classes = useStyles();
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
            <IconButton aria-label="show cart item" color="inherit">
              <Badge badgeContent={3} color="secondary">
                <ShoppingCart />
              </Badge>
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavBar;
