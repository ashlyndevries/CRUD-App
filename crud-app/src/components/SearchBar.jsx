import { TextField, InputAdornment } from "@mui/material";
import { useEffect, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import PropTypes from "prop-types";

const SearchBar = (props) => {
  const [searchQuery, setSearchQuery] = useState("");

  const filterContacts = (query, contacts) => {
    if (!query) {
      return contacts;
    } else {
      return contacts.filter((c) => c.lastName.toLowerCase().includes(query));
    }
  };

  useEffect(() => {
    props.setFilteredContacts(filterContacts(searchQuery, props.contacts));
  }, [searchQuery, props]);

  return (
    <TextField
      placeholder="Search for contact by last name..."
      variant="outlined"
      size="small"
      sx={{
        width: "100%",
        bgcolor: "white",
        mb: 2,
      }}
      value={searchQuery}
      onInput={(e) => setSearchQuery(e.target.value)}
      slotProps={{
        input: {
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        },
      }}
    />
  );
};

SearchBar.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      firstName: PropTypes.string.isRequired,
      lastName: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  setFilteredContacts: PropTypes.func.isRequired,
};

export default SearchBar;
