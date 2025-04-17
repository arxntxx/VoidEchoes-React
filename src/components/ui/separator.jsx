import React from "react";
import PropTypes from "prop-types";

export function Separator({ className }) {
  return (
    <hr className={`border-t  ${className || ""}`} />
  );
}
