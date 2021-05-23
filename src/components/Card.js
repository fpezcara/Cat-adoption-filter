import React from "react";
import Button from "./Button";

const Card = ({ name, shortDesc, img, available }) => {
  return (
    <div className="row border border-rounded overflow-hidden flex-md-row my-2 mx-1 shadow-sm">
      <div className="col-md-5 p-3">
        <img alt={name} className="card-img text-center" src={img} />
      </div>
      <div className="col-md-7">
        <div className="card-body m-0">
          <h3 className="card-title text-capitalize">{name}</h3>
          <p className="card-text">
            <small>{shortDesc}</small>
          </p>
          <Button
            message={available ? "See more" : "Not available"}
            buttonColour={available ? "primary" : "secondary"}
          />
        </div>
      </div>
    </div>
  );
};

export default Card;
