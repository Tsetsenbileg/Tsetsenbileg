import React from "react";
import { Link } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
  makeStyles,
  Button,
} from "@material-ui/core";
import "./header.css";
const useStyles = makeStyles(() => ({
  header: {
    backgroundColor: "#400CCC",
  },
}));
export default function Header() {
  const { header } = useStyles();
  return (
    <header className="header-container">
      <div className="logo">Sign language</div>
      <div className="menu">
        <Link to="/add">
          <Button>Add</Button>
        </Link>
        <Link to="/sentences">
          <Button>Sentences</Button>
        </Link>
        <Link to="/category">
          <Button>Category</Button>
        </Link>
      </div>
    </header>
  );
}
