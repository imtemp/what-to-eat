import { TextField, Button, Chip } from "@mui/material";
import { useState } from "react";

const Search = () => {
  // set required variables and states
  const [addedIngredients, setAddedIngredients] = useState();
  const [currentIngredients, setCurrentIngredients] = useState([]);

  // set re-useable functions
  const addFilters = () => {
    setAddedIngredients("");
    setCurrentIngredients((prev) => {
      return [...prev, addedIngredients];
    });
  };

  const handleDelete = (e) => {
    setCurrentIngredients((currentIngreidents) => {
      currentIngredients.filter();
    });
  };
  return (
    <div>
      <TextField
        value={addedIngredients}
        onChange={(e) => setAddedIngredients(e.target.value)}
        label="Search"
        variant="outlined"
      />
      <Button variant="contained" onClick={addFilters}>
        Add
      </Button>

      {currentIngredients?.length > 0 ? (
        <div>
          {currentIngredients.map((currentIngredients) => (
            <Chip label={currentIngredients} onDelete={handleDelete} />
          ))}
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default Search;
