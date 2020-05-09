import React from "react";
import "./dummy-store";
export default function Header(props) {
  return (
    <div>
      <h1 className={props.className}>Noteful</h1>
    </div>
  );
}
