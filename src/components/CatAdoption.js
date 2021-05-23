import React, { useState } from "react";
import Form from "./Form";
import CardContainer from "./CardContainer";
import cats from "../assets/cats";

const CatAdoption = () => {
  const [filteredCats, setFilteredCats] = useState([...cats]);
  const [state, setState] = useState({
    colour: [],
    gender: "",
    name: "",
  });

  const [selectedOption, setSelectedOption] = useState("");

  const handleChange = (e) => {
    if (Array.isArray(state[e.target.name])) {
      setState({
        ...state,
        [e.target.name]: [...state[e.target.name], e.target.value],
      });
    } else {
      setState({ ...state, [e.target.name]: e.target.value });
    }

    setSelectedOption(e.target);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    switch (selectedOption.name) {
      case "colour":
        setFilteredCats(
          filteredCats.reduce((acc, cur) => {
            selectedOption.checked
              ? cur.colour.includes(selectedOption.value) && acc.push(cur)
              : acc.push(cur);

            return acc;
          }, [])
        );
        break;
      case "gender":
        setFilteredCats(
          cats.reduce((acc, cur) => {
            selectedOption.value === "a"
              ? acc.push(cur)
              : cur.gender === selectedOption.value && acc.push(cur);

            return acc;
          }, [])
        );
        break;
      case "name":
        setFilteredCats(
          cats.filter((cat) => selectedOption.value === cat.name)
        );
        break;
    }
  };
  return (
    <>
      <Form
        state={state}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
      <CardContainer cats={filteredCats} />
    </>
  );
};

export default CatAdoption;
