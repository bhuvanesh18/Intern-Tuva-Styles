import React, { Component } from "react";
const Paragraph = props => {
  const { paragraph } = props;
  return <p className="mt-2 font-weight-normal">{paragraph}</p>;
};
export default Paragraph;
