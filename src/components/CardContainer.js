import React from "react";
import Card from "./Card";

const CardContainer = ({ cats }) => {
  return (
    <div className="row mb-2 g-2">
      {cats.map((cat) => (
        <div key={cat.id} className="col-md-6">
          <Card
            name={cat.name}
            shortDesc={cat.shortDesc}
            img={cat.img}
            available={cat.available}
          />
        </div>
      ))}
    </div>
  );
};

export default CardContainer;
