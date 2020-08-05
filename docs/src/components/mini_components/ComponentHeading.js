import React from "react";

const ComponentHeading = props => {
  const { heading, isstable, link } = props;
  return (
    <React.Fragment>
      <div className="tuva-line">
        <h1 className="font-weight-normal">{heading}</h1>
        <span className="State bg-yellow float-left mt-3 font-weight-medium">
          {isstable}
        </span>
        <span className="Counter float-right mt-4">
          <a href={link} target="_blank" rel="noopener noreferrer">
            View Source
          </a>
        </span>
      </div>
    </React.Fragment>
  );
};

export default ComponentHeading;
