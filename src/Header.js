import React from "react";
import "./dummy-store";
import { Link } from "react-router-dom";

export default function Header(props) {
  return (
    <div className="header">
      <Link to="/">
        <h1 className={props.className}>Noteful</h1>
      </Link>
    </div>
  );
}
