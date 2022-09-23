import React, { Component } from "react";
import propTypes from "prop-types";
import Hover from "./Hover";

const container = {
    position: "relative",
    display: "flex",
}

export default function Tooltip ({ children, element }) {
          return (
              <Hover>
                {(hovering) => {
                return (
                <div style={container}>
                {hovering === true && element}  
                {children}
                </div>)
                }} 
              </Hover>
          );
}

Tooltip.propTypes = {
    children: propTypes.node.isRequired,
    element: propTypes.node.isRequired,
  };
