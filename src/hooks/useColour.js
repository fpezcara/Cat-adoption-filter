const useColour = (cats) => {
  let colours = [];
  cats.map((cat) =>
    cat.colour.filter((color) => {
      return colours.push(color.toString());
    })
  );
  return [...new Set(colours)];
};
export default useColour;
