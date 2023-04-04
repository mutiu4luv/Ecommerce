import {
  AppBar,
  Badge,
  IconButton,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
import navbar from "../../../assets/navbar.png";
import React from "react";
// import useStyles from "./styles";
import { ShoppingCart } from "@mui/icons-material";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
// import Product from "../product/Product";

const NavBar = ({ totalItems, Products, setSearchQuery }) => {
  // const classes = useStyles();
  const [search, setSearch] = useState("");
  const location = useLocation();
  console.log(search);
  const [query, setQuery] = useState("");

  const handleInputChange = (event) => {
    setSearch(event.target.value);
  };

  // const handleSearch = () => {
  //   setSearchQuery(query);
  // };
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
          {/* <input type="text" placeholder="search..." className="search" /> */}

          {/* <TextField
            id="outlined-basic"
            name="search"
            label="search..."
            variant="outlined"
            style={{ marginLeft: "auto", marginRight: "auto" }}
            // onChange={(e) => setSearch(e.target.value)}
            onChange={handleInputChange}
          /> */}
          {/* <button onClick={handleSearch}>Search</button> */}
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
