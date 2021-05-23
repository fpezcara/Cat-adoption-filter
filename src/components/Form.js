import React from "react";
import cats from "../assets/cats";
import Button from "./Button";
import useColour from "../hooks/useColour";

const Form = ({ state, handleChange, handleSubmit }) => {
  let uniqueColours = useColour(cats);

  return (
    <form
      className="row bg-primary bg-gradient my-3 p-4"
      onSubmit={handleSubmit}
    >
      <div className="form-group col-3 text-italic">
        <p className="form-label font-italic">Filter by colour:</p>
        {uniqueColours &&
          uniqueColours.map((colour, i) => (
            <div key={i} className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value={colour}
                name="colour"
                onChange={handleChange}
              />
              <label className="form-check-label text-capitalize">
                {colour}
              </label>
            </div>
          ))}
      </div>

      <div className="form-group col-3 mb-3">
        <p className="font-italic">Filter by gender:</p>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            value="f"
            name="gender"
            onChange={handleChange}
          />
          <label className="form-check-label">Femenine</label>
        </div>

        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            value="m"
            name="gender"
            onChange={handleChange}
          />
          <label className="form-check-label">Masculine</label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            value="a"
            name="gender"
            onChange={handleChange}
          />
          <label className="form-check-label">Any</label>
        </div>
      </div>

      <div className="col-3 mb-3">
        <label className="form-label font-italic">Filter by name:</label>
        <input
          className="form-control"
          type="text"
          name="name"
          placeholder="Name"
          value={state.name}
          onChange={handleChange}
        />
      </div>

      <div className="col-3 mt-4 text-center p-2">
        <Button message="Filter" buttonColour="secondary" />
      </div>
    </form>
  );
};

export default Form;
